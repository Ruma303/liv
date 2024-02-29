<?php

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

/* Route::get('/', function () {
    return inertia('Welcome');
});
 */

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


Route::get('/users', function () {
    return Inertia::render('Users/Index', [
        'users' => User::query()
            ->when(request('search'), function ($query, $search) {
            $query->where('name', 'like', '%' . $search . '%');
        })
        ->paginate(20)
        ->withQueryString(),
        'filters' => request()->only(['search'])
    ]);
});


    Route::get('users/create', function () {
        return Inertia::render('Users/Create');
    });
    Route::get('users/edit', function () {
        return Inertia::render('Users/Edit');
    });
