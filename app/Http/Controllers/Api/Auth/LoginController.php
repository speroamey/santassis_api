<?php


// Author:Spero AMEY email: ameyspero@gmail.com;

namespace App\Http\Controllers\Api\Auth;

use App\Notifications\SignupActivate;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Laravel\Passport\Client;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use App\User;
use App\Http\Resources\User as UserResource;
use App\Http\Resources\UserCollection;
use App\Http\Controllers\Api\BaseController as BaseController;

use Validator;
use App\Recipients\AdminRecipient;
use App\Notifications\SendMessage;
use App\Contact;

class LoginController extends BaseController
{
    //
    private $client;

    function __construct()
    {
        $this->client = Client::find(1);
    }

    public function login(Request $request)
    {
        $this->validate($request, [
            'username' => 'required',
            'password' => 'required'
        ]);
        
        $user = User::where('email', request(['username']))->first();
        $credentials = request(['email', 'password']);
        $credentials['active'] = $user['active'];
        // dd($credentials);
        if(!$user || !Auth::attempt($credentials))
            return response()->json([
                'message' => 'Identifiants incorrectes'
            ], 401);
        

        if (!$credentials['active'] )
            return response()->json([
                'message' => 'Accès non autorisé! Assurez vous d\'avoir payé les droits d\'adhésion'
            ], 401);

        $params = [
            'grant_type' => 'password',
            'client_id' => $this->client->id,
            'client_secret' => $this->client->secret,
            'username' => request('username'),
            'password' =>  request('password'),
            'scope' => '*',
        ];

        $request->request->add($params);
        $proxy = Request::create('oauth/token', 'POST');
        return Route::dispatch($proxy);
    }

    public function refresh(Request $request)
    {
        $this->validate($request, [
            'refresh_token' => 'required'
        ]);

        $params = [
            'grant_type' => 'refresh_token',
            'refresh_token' => request('refresh_token'),
            'client_id' => $this->client->id,
            'client_secret' => $this->client->secret,
        ];

        $request->request->add($params);
        $proxy = Request::create('oauth/token', 'POST');
        return Route::dispatch($proxy);
    }


    public function signupActivate($token)
    {
        $user = User::where('activation_token', $token)->first();
        if (!$user) {
            return response()->json([
                'message' => 'This activation token is invalid.'
            ], 404);
        }
        $user->active = true;
        $user->activation_token = '';
        $user->save();
        return $user;
    }


    public function user(Request $request)
    {
        return new UserResource(request()->user());
    }

    public function customerSendEmail(Request $request)
    {
        $input = $request->input('avatar');

        if($input){
            $input->notify(new SignupActivate($input));
        }
        return new UserResource(request()->user());
    }

    public function updateUserAvatar(Request $request)
    {
        // Grab all the input passed in
            $data = $request->input('avatar');
            // return response()->json($data);
            $file = str_replace(['data:image/png;base64,'], '', $data);
            // dd($file);
            $file = str_replace(' ', '', $file);
            $file = base64_decode($file);
            $safeName = "avatar-".time().".png";
            $success = Storage::disk('public')->put( 'avatar/'.$safeName, $file);
            $input['avatar'] = $safeName;
            // Use Eloquent to grab the gift record that we want to update,
            // referenced by the ID passed to the REST endpoint
            $user = User::find(Auth::user()->id);
            // Call fill on the gift and pass in the data
            $user->fill($input);
            $user->save();
            return new UserResource($user);
        
    }


    public function updateUser(Request $request)
    {
        // Grab all the input passed in
            $input = $request->all();
            $user = User::find(Auth::user()->id);
            $user->fill($input);
            $user->save();
            return new UserResource($user);
    }

    public function disconnect(Request $request)
    {
        // Grab all the input passed in
        $input = $request->all();
        $user = User::find(Auth::user()->id);
        return new UserResource($user);
    }

    //Déconnexion
    public function logout(Request $request)
    {
        $accessToken = Auth::user()->token();
        DB::table('oauth_refresh_tokens')
            ->where('access_token_id', $accessToken->id)
            ->update(['revoked' => true]);
        $accessToken->revoke();
        return response()->json([], 204);
    }


    public function index(Request $request)
    {
        // dd(  Product::latest()->first()->url);
        return new UserCollection( User::paginate(12));
        // return $this->sendResponse(new ProductCollection( Product::paginate(3)), 'Products retrieved successfully.');
    }

    public function update(Request $request, User $user)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'active' => 'required',
        ]);
        

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }

        $user = User::find($input['id']);
        $user->fill($input);
        $user->save();
        return $this->sendResponse($user->toArray(), 'Product updated successfully.');
    }


    public function customerSendMessage(Request $request)
    {
        $input = $request->all();
        
        $message = Contact::create($input);
        $recipient = new AdminRecipient();
        $recipient->notify(new SendMessage($message));
        return $this->sendResponse($message, 'Message envoyé.');

    }
}
