<?php

use App\User;
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

// login route
/*
Route::group(['middleware' => ['guest:api']], function () {
    Route::post('login', 'ApiLoginController@login');
    Route::post('register', 'ApiRegisterController@register');
    Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
    // Route::post('password/reset', 'Auth\ResetPasswordController@reset')->name('password.reset');
});

Route::group(['middleware' => ['auth:api']], function () {
    Route::get('logout', 'ApiLoginController@logout');
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::get('api_test', function () {
        return 'authenticated';
    });
});
*/

Route::post('/store_request', 'CounselController@store');
Route::post('/store_customer', 'EstorController@attachCustomer');
Route::post('/store_estor', 'EstorController@store');
Route::post('/process_estor', 'EstorController@getResultAndSave');

// if session is needed
// Route::group(['middleware' => ['web']], function () {
//     Route::post('/store_estor', 'EstorController@store');
// });

// Route::get('/test', function (Request $request) {
//     $client = new \GuzzleHttp\Client();
//     $response = $client->request('GET', 'http://api.rentdirect.co.kr/connection.php');
//     return $response->getBody();
// });
