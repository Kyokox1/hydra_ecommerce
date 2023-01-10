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
Route::group(['prefix' => 'auth'], function() {
    Route::post('signup', 'AuthController@signup');
    Route::post('login', 'AuthController@login');
});
Route::get('products','ProductController@index')->name('products.index');
Route::get('products/search','ProductController@filterProduct')->name('products.filter');
Route::get('products/{id}','ProductController@show')->name('products.show');
Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('refresh_user', 'AuthController@userInfo');
    Route::post('logout', 'AuthController@logout');

    Route::group(['middleware' => 'roles:Client'], function () {
        Route::post('venta-client','SaleController@store');
    });
});

