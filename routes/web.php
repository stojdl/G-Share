<?php

use App\Http\Controllers\PagesController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\CommentLikeController;
use App\Http\Controllers\FriendshipController;
use App\Http\Controllers\PostReactionController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Middleware\Localization;



Route::middleware(Localization::class)->group(function () {
    // Hlavní routa pro domovskou stránku
    Route::get('/', [PagesController::class, 'home_page'])->name('home_page');

    // Routa pro dashboard, chráněná middlewarem
    Route::get('/dashboard', [PagesController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');

    // Skupina rout chráněných middlewarem 'auth'
    Route::middleware('auth')->group(function () {
        Route::get('/profile', [PagesController::class, 'profile'])->name('profile.show');
        Route::get('/edit-profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

        Route::get('/user/{user}/profile', [PagesController::class, 'user_profile'])->name('user_profile');
        Route::post('/user/{user}/add-friend', [FriendshipController::class, 'store'])->name('friendship.store');
        Route::post('/user/{user}/accept-friendship-request', [FriendshipController::class, 'accept_friendship_request'])->name('friendship.accept');
        Route::delete('/user/{user}/remove-friend', [FriendshipController::class, 'destroy'])->name('friendship.remove');

        Route::get('/share-place', [PagesController::class, 'share_place'])->name('share_place');

        Route::group(['prefix' => 'post'], function () {
            Route::post('/store', [PostController::class, 'store'])->name('post.store');
            Route::post('/react', [PostReactionController::class, 'store'])->name('post.reaction.store');
            Route::post('/{post_id}/remove-reaction', [PostReactionController::class, 'destroy'])->name('post.reaction.remove');
        });

        Route::group(['prefix' => 'comment'], function () {
            Route::post('/store', [CommentController::class, 'store'])->name('comment.store');
            Route::post('/like', [CommentLikeController::class, 'like'])->name('comment.like');
        });
    });

    // Routy pro další stránky
    Route::get('/dev', [PagesController::class, 'dev'])->name('dev');

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
});

