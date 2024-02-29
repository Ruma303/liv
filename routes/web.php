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



    Route::post('users', function () {
        // Validare la richiesta

        /* $attributes = request()->validate([
            'name' => ['required'],
            'email' => ['required', 'email'],
            'password' => ['required', 'min:8'],
        ]); */
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
        // Creare un nuovo utente
        User::create($attributes);

        // Reindirizzare l'utente
        return redirect('/users');
    });


    Route::get('users/edit', function () {
        return Inertia::render('Users/Edit');
    });
