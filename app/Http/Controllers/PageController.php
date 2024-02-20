<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    public function about()
    {
        $someData = ['There', 'is', 'some', 'data', 'from', 'backend'];
        return inertia('About', compact('someData'));
    }


    public function contacts()
    {
        return inertia('Contacts');
    }
}
