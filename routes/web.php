<?php

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;
use App\Http\Controllers\Auth\LoginController;

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

    Route::get('login', [LoginController::class, 'create'])->name('login');
    Route::post('login', [LoginController::class, 'login'])->name('login');
    Route::post('logout', [LoginController::class, 'logout'])
        ->middleware('auth')->name('logout');

Route::middleware('auth')->group(function () {
    Route::get('/admin', function () {
        return inertia('AdminDashboard');
    });

    Route::get('users/create', function () {
        return Inertia::render('Users/Create');
    })->middleware('can:create,App\Models\User');

    Route::get('/users', function () {
        return Inertia::render('Users/Index', [
            'users' => User::query()
                ->when(request('search'), function ($query, $search) {
                    $query->where('name', 'like', '%' . $search . '%');
                })
                ->paginate(20)
                ->withQueryString(),
            'filters' => request()->only(['search']),
            /* 'can' => [
                'createUser' => in_array(Auth::user()->email, ['admin@admin.com', 'mario@rossi.it']),
                'editUser' => in_array(Auth::user()->email, ['admin@admin.com', 'mario@rossi.it']),
                'deleteUser' => in_array(Auth::user()->email, ['admin@admin.com', 'mario@rossi.it']),
            ], */
            'can' => [
                'createUser' => Auth::user()->can('create', User::class),
                'editUser' => Auth::user()->can('update', User::class),
                'deleteUser' => Auth::user()->can('delete', User::class),
            ]
        ]);
    });
    Route::post('users', function () {
        $attributes = request()->validate([
            'name' => 'required|string|min:5|max:255',
            'email' => 'required|email|unique:users|min:5|max:255',
            'password' => 'required|string|min:8',
        ], [
            'name.required' => 'Il campo nome è obbligatorio.',
            'name.min' => 'Il campo nome deve contenere almeno 5 caratteri.',
            'name.string' => 'Il campo nome deve essere una stringa.',
            'name.max' => 'Il campo nome non può superare i 255 caratteri.',
            'email.required' => 'Il campo email è obbligatorio.',
            'email.email' => 'Inserisci un indirizzo email valido.',
            'email.min' => 'Il campo email deve contenere almeno 5 caratteri.',
            'email.unique' => 'L\'indirizzo email è già stato utilizzato.',
            'email.max' => 'Il campo email non può superare i 255 caratteri.',
            'password.required' => 'Il campo password è obbligatorio.',
            'password.min' => 'La password deve contenere almeno 8 caratteri.',
        ]);
        User::create($attributes);
        return redirect('/users');
    });
    Route::get('users/edit', function () {
        return Inertia::render('Users/Edit');
    });
});

