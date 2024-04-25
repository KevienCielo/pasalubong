<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('logout', [LoginController::class, 'logout']);
    Route::post('products', [ProductController::class, 'store']);
});

Route::get('products', [ProductController::class, 'getProducts']);

Route::post('register', [LoginController::class, 'register']);
Route::post('login', [LoginController::class, 'login'])->name(name: 'login');

Route::get(uri: '/', action: 'App\Http\Controllers\StripeController@index')->name(name: 'index');
Route::post(uri: '/checkout', action: 'App\Http\Controllers\StripeController@checkout')->name(name: 'checkout');
Route::get(uri: '/success', action: 'App\Http\Controllers\StripeController@success')->name(name: 'success');