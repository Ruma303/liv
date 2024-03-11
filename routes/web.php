<?php

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
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

Route::get('/admin', function () {
    return inertia('AdminDashboard', [
        'admin' => 'Il Boss'
    ]);
});

Route::inertia('/dashboard', 'Dashboard');
