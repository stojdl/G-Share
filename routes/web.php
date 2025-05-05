<?php

use App\Http\Controllers\PagesController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [PagesController::class, 'home_page'])->name('home_page');

Route::get('/dashboard', [PagesController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/dev', [PagesController::class, 'dev'])->name('dev');
//Route::get('/share-place', [PagesController::class, 'share_place'])->middleware(['auth', 'verified'])->name('share_place');
Route::get('/share-place', [PagesController::class, 'share_place'])->name('share_place'); //pak smazat az bude databaze doplnena

Route::get('/communities', [PagesController::class, 'communities'])->name('communities');
Route::get('/groups', [PagesController::class, 'groups'])->name('groups');
Route::get('/esports', [PagesController::class, 'esports'])->name('esports');

Route::get('/create-team', [PagesController::class, 'create_team'])->name('create_team');
Route::get('/find-team', [PagesController::class, 'find_team'])->name('find_team');

Route::get('/rooms', [PagesController::class, 'rooms'])->name('rooms');
Route::get('/tournaments', [PagesController::class, 'tournaments'])->name('tournaments');
Route::get('/challenges', [PagesController::class, 'challenges'])->name('challenges');








require __DIR__.'/auth.php';
