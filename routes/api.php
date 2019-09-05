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
Route::post('upload_image', 'Api\NewsController@imageUpload');
Route::resource('products', 'Api\ProductController');
Route::get('all_testifies', 'Api\TestifyController@all');
Route::get('all_prestations', 'Api\PrestationController@all');
Route::get('all_news', 'Api\NewsController@all');
Route::get('last_news', 'Api\NewsController@lastNews');
Route::get('news/{id}', 'Api\NewsController@show');
Route::post('messages', 'Api\Auth\LoginController@customerSendMessage');
Route::post('create-pass-token', 'Api\Auth\PasswordResetController@create');
Route::get('find/{token}', 'Api\Auth\PasswordResetController@find');
Route::post('reset', 'Api\Auth\PasswordResetController@reset');

Route::middleware('auth:api')->group( function () {
    // return $request->user();
    Route::get('user','Api\Auth\LoginController@user');
    Route::put('product-update-state/{id}','Api\UserProductController@updateProductState');
    Route::resource('users','Api\Auth\LoginController');
    Route::put('user-avatar','Api\Auth\LoginController@UpdateUserAvatar');
    Route::put('user','Api\Auth\LoginController@UpdateUser');
    Route::get('disconnect','Api\Auth\LoginController@disconnect');
    Route::get('logout','Api\Auth\LoginController@logout');
    Route::get('command-lines-commands/{id}', 'Api\LineCommandController@showCommandLineCommand');
    Route::resource('user-products', 'Api\UserProductController');
    Route::resource('commands', 'Api\CommandController');
    Route::resource('prestations', 'Api\PrestationController');
    Route::resource('news', 'Api\NewsController');
    Route::resource('advertise', 'Api\AdvertiseController');
    Route::resource('testifies', 'Api\TestifyController');
    Route::get('all-testifies','Api\TestifyController@all');
});
