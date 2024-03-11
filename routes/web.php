<?php

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;

Route::get('/', function () {
    return Inertia::render('Front/Welcome', [
        'nick' => 'Ruma',
        'job' => 'Web developer',
        'Liv' => ['Inertia', 'Laravel', 'Vue'],
        'others' => ['SCSS', 'Tailwind'],
        'username' => 'User Autenticato'
    ]);
});

Route::get('/about', [PageController::class, 'about']);
Route::get('/contacts', [PageController::class, 'contacts']);

Route::post('/send-post-request', function () {
    dd('Richiesta POST attivata');
});

Route::patch('/send-patch-request', function () {
    dump(request('user'));
    dd('Richiesta PATCH attivata');
});

Route::get('/dashboard', function () {
    return inertia('Back/Dashboard', [
        'admin' => 'Il Boss'
    ]);
});

Route::inertia('report', 'Back/Report');
