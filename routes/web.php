<?php

use App\Http\Controllers\PagesController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Hlavní routa pro domovskou stránku
Route::get('/', [PagesController::class, 'home_page'])->name('home_page');

// Routa pro dashboard, chráněná middlewarem
Route::get('/dashboard', [PagesController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');

// Skupina rout chráněných middlewarem 'auth'
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Routy pro další stránky
Route::get('/dev', [PagesController::class, 'dev'])->name('dev');
Route::get('/share-place', [PagesController::class, 'share_place'])->name('share_place'); // Dočasná routa

// Routa pro zobrazení uživatelského profilu
Route::get('/user/{user}', [PagesController::class, 'user'])->name('user');

// Routy pro komunity, skupiny, esporty atd.
Route::get('/communities', [PagesController::class, 'communities'])->name('communities');
Route::get('/groups', [PagesController::class, 'groups'])->name('groups');
Route::get('/esports', [PagesController::class, 'esports'])->name('esports');

// Routy pro týmové akce
Route::get('/create-team', [PagesController::class, 'create_team'])->name('create_team');
Route::get('/find-team', [PagesController::class, 'find_team'])->name('find_team');

// Routy pro místnosti, turnaje a výzvy
Route::get('/rooms', [PagesController::class, 'rooms'])->name('rooms');
Route::get('/tournaments', [PagesController::class, 'tournaments'])->name('tournaments');
Route::get('/challenges', [PagesController::class, 'challenges'])->name('challenges');

// Načtení autentizačních rout
require __DIR__.'/auth.php';
