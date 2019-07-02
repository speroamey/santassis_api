<?php

namespace App\Http\Controllers\Api\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Laravel\Passport\Client;
use Illuminate\Support\Facades\Route;
Use App\User;
use App\Notifications\SignupActivate;

class registerController extends Controller
{
    //
    private $client;

    function __construct(){
        $this->client= Client::find(1);
       
    }

    public function register(Request $request){
        $this->validate($request,[
            'name'=>'required',
            'phone'=>'required|unique:users,phone',
            'password'=>'required|min:6|confirmed',
            'email'=>'required|email|unique:users,email'
        ]);
        
        $user= User::create([
            'name'=> request('name'),
            'phone'=>request('phone'),
            'password'=>bcrypt('password'),
            'role'=>'USER',
            'email'=>request('email'),
            'activation_token' => str_random(60)
        ]) ;
        // dd($this->client);
        
        if($user){
            $user->notify(new SignupActivate($user));
        }
        $params =[
            'grant_type' => 'password',
            'client_id' => $this->client->id,
            'client_secret' => $this->client->secret,
            'username' => request('email'),
            'password' =>  request('password'),
            'scope' => '*',
        ];
       

        $request->request->add($params);
        $proxy= Request::create('oauth/token','POST');
     
        return Route::dispatch($proxy);
        // dd($request->all());
    }
}
