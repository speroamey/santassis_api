<?php


// Author:Spero AMEY email: ameyspero@gmail.com;

namespace App\Http\Controllers\Api\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Laravel\Passport\Client;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
Use App\User;

class LoginController extends Controller
{
    //
    private $client;

    function __construct(){
        $this->client= Client::find(1);
    }

    public function login(Request $request){

        $this->validate($request,[
            'username'=>'required',
            'password'=> 'required'
        ]);

        $credentials = request(['email', 'password']);
        $credentials['active'] = 1;
        
        if(!Auth::attempt($credentials))
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
            
        $params =[
            'grant_type' => 'password',
            'client_id' => $this->client->id,
            'client_secret' => $this->client->secret,
            'username' => request('username'),
            'password' =>  request('password'),
            'scope' => '*',
        ];
   
        $request->request->add($params);
        $proxy= Request::create('oauth/token','POST');
        return Route::dispatch($proxy);
    }

    public function refresh(Request $request){
        $this->validate($request,[
            'refresh_token'=>'required'
        ]);
      
        $params =[
            'grant_type' => 'refresh_token',
            'refresh_token' =>request('refresh_token'),
            'client_id' => $this->client->id,
            'client_secret' => $this->client->secret,
        ];
        
        $request->request->add($params);
        $proxy= Request::create('oauth/token','POST');
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

    //Déconnexion
    public function logout(Request $request){
        $accessToken = Auth::user()->token();
        DB::table('oauth_refresh_tokens')
        ->where('access_token_id', $accessToken->id)
        ->update(['revoked'=> true ]);

        $accessToken->revoke();
        return response()->json([],204);
    }
}
