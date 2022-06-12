<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JWTController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\UserController;

Route::group(['middleware' => 'api'], function($router) {
    Route::post('/register', [JWTController::class, 'register']);
    Route::post('/login', [JWTController::class, 'login']);
    Route::post('/logout', [JWTController::class, 'logout']);
    Route::post('/refresh', [JWTController::class, 'refresh']);
    Route::post('/profile', [JWTController::class, 'profile']);
});

//Admin Controller

Route::post('/add_item', [AdminController::class, 'addItem']);
Route::post('/add_category', [AdminController::class, 'addCategory']);
Route::get('/get_categories', [AdminController::class, 'getCategories']);


//User Controller
Route::get('/items/{category_id}', [UserController::class, 'getItems']);
Route::group(['middleware' => 'favorite'], function($router) {
    Route::post('/favorite', [UserController::class, 'favorite']);
});