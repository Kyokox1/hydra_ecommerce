<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes(['register'=>false]);

Route::get('/home', 'HomeController@index')->name('home');
Route::resource('categories','CategoryController')->except('create');
Route::resource('products','Backend\ProductController')->except('create');
Route::resource('sales','Backend\SaleController')->except('create','store','edit','update');
//index,xcreate(store),edit(update),destroy
//vista - edit GET categories/{categoryId}/edit
//index - index get categories
Route::resource('registers','UserController')->except('create');
Route::post('logoutdos','UserController@logout')->name('logoutdos');