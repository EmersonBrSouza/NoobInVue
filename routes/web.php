<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Http\Controllers\TaskController;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/component', function () {
    return view('component');
});

Route::get('/task','TaskController@fetchAll');
Route::put('/task','TaskController@create');
Route::get('/email_exists', function (){
    return response()->json(true);
});
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
