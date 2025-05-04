<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\Http\Resources\PostResource;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


class PagesController extends Controller
{
    public function welcome()
    {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }

    public function dashboard()
    {
        return Inertia::render('Dashboard');
    }

    public function dev()
    {
        return Inertia::render('Dev', [
            'users' => UserResource::collection(\App\Models\User::all()->load('posts', 'profile', 'settings', 'privacy_settings')),
                                                                     
            
        ]);
    }
    
    public function share_place()
    {
        return Inertia::render('SharePlace');
    }

    public function home_page()
    {
        return Inertia::render('HomePage');
    }

    public function communities()
    {
        return Inertia::render('Communities');
    }


    public function groups()
    {
        return Inertia::render('Groups');
    }

    public function esports()
    {
        return Inertia::render('Esports');
    }

    public function create_team()
    {
        return Inertia::render('CreateTeam');
    }
    public function find_team()
    {
        return Inertia::render('FindTeam');
    }

    public function rooms()
    {
        return Inertia::render('Rooms');
    }

    public function tournaments()
    {
        return Inertia::render('Tournaments');
    }

    public function challenges()
    {
        return Inertia::render('Challenges');
    }

}
