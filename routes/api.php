<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register','Api\Auth\RegisterController@register');
Route::post('login','Api\Auth\LoginController@login');
Route::post('refresh','Api\Auth\LoginController@refresh');
Route::get('signup/activate/{token}', 'Api\Auth\LoginController@signupActivate');
Route::get('storage', function(){
    echo 'toto';
    return "hello";
});
Route::post('upload_image', 'Api\NewsController@imageUpload');
Route::middleware('auth:api')->group( function () {
    // return $request->user();
    Route::post('logout','Api\Auth\LoginController@logout');
   
    Route::get('/products', 'Api\ProductController@index');
    Route::resource('products', 'Api\ProductController');
    Route::resource('commands', 'Api\CommandController');
    Route::resource('prestations', 'Api\PrestationController');
    Route::resource('news', 'Api\NewsController');
    Route::resource('advertise', 'Api\AdvertiseController');
    Route::resource('testifies', 'Api\TestifyController');
    // dd('salut');
});



Route::group([    
    'namespace' => 'Api\Auth',      
    'prefix' => 'password'
], function () {    
    Route::post('create', 'PasswordResetController@create');
    Route::get('find/{token}', 'PasswordResetController@find');
    Route::post('reset', 'PasswordResetController@reset');
});