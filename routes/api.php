<?php

use Illuminate\Http\Request;

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




Route::prefix('user')->group(function () {

  
    Route::post('/login', 'Api\Auth\AuthController@login');
    
    // private routes for user
    Route::middleware('auth:api')->group(function(){
    
        Route::post('/logout', 'Api\Auth\AuthController@logout');
        Route::post('/get/report/{id}', 'Api\UserController@get_report');
    
    });


    // private routes for admin only
    Route::middleware('auth:api', 'admin:api')->group(function(){
    
        Route::post('/logout', 'Api\Auth\AuthController@logout');

        Route::post('/delete/{id}', 'Api\AdminController@delete_user');
        Route::post('/add', 'Api\AdminController@add_user');
        Route::post('/edit/{id}', 'Api\AdminController@edit_user');
        Route::post('/get', 'Api\AdminController@get_users');
        Route::post('/add/report/{id}', 'Api\AdminController@add_report');
        Route::post('/get/reports/{id}', 'Api\AdminController@get_reports');
        Route::post('/time_out/{id}', 'Api\AdminController@time_out');
    
    });
    
    

    });
    
    
