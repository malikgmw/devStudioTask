<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::namespace('API')->group(function () {
    Route::group(['prefix' => 'auth'], function () {
        Route::post('login', 'AuthController@login');
        Route::post('register', 'AuthController@register');
        Route::post('reset-password-request', 'AuthController@resetPasswordRequest');
        Route::post('reset-password', 'AuthController@resetPassword');

        Route::group(['middleware' => 'auth:api'], function() {
            Route::get('profile', 'AuthController@profile');
            Route::post('change-password', 'AuthController@changePassword');
            Route::get('logout','AuthController@logout');
        });
    });

    Route::group(['prefix' => 'admin', 'middleware' => 'auth:api'], function () {
        Route::group(['middleware' => 'scope:admin'], function () {
            Route::resource('tasks' , 'TaskController');
            Route::post('complete-task' , 'TaskController@completeTask');
            Route::post('inComplete-task' , 'TaskController@inCompleteTask');
        });
    });
});
