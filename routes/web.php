<?php
use App\Post;
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


Auth::routes();

Route::get('/', 'HomeController@index')->name('home');
Route::get('/dashboard', 'DashboardController@index')->name('dashboard');
Route::get('note', 'NoteController@index');
Route::post('note', 'NoteController@store');
Route::post('position', 'NoteController@updateposition');
Route::post('delete', 'NoteController@destroy');
Route::post('editnote', 'NoteController@editnote');
Route::get('/test', function(){
  return view('dashboard');
});
