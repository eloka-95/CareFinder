<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\V1\authenticationController;
use App\Http\Controllers\CareFacilitiesController;
use App\Http\Controllers\V1\searchController;
use App\Http\Controllers\V1\otpController;
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
    Route::post('/caresearch', [searchController::class, 'findHealthFacilities']);
    Route::resource('/facility',  CareFacilitiesController::class);
    Route::post('/verifytoken', [otpController::class, 'verifyOtp']);
    Route::post('/logoutuser', [authenticationController::class, 'logoutUser']);
});

Route::controller(authenticationController::class)->group(function () {
    Route::post('/register', 'registerUser');
    Route::post('/login', 'loginUser');
});
