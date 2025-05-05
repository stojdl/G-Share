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
        //$users = \App\Models\User::all()->load('posts', 'profile', 'settings', 'privacy_settings', 'posts.comments', 'posts.likes', 'posts.reactions');
        
        $users = \App\Models\User::all()->load('posts', 'profile', 'settings', 'privacy_settings');

        foreach ($users as $user) {
            $user->load('posts.reactions.user', 
                        'posts.views.user', 
                        'posts.shares.user',
                        'posts.comments.user', 
                        'posts.comments.likes.user', 
                        'posts.comments.children.user', 
                        'posts.comments.children.likes.user');
            // Pokud máte subkomentáře:
            //$user->load('posts.comments.children.user');

            // $user->posts->each(function ($post) {
            //     $post->load('comments.user', 'reactions.user');
            //     // Pokud máte subkomentáře:
            //     $post->comments->each(function ($comment) {
            //         $comment->load('user', 'children.user');
            //     });
            // });
        }

        return Inertia::render('Dev', [
            'users' => $users,
            'posts' => \App\Models\Post::all()->load('user', 'comments.user', 'reactions.user'),
            'comments' => \App\Models\Comment::all()->load('user', 'post', 'children.user'),
            'views' => \App\Models\PostView::all()->load('user', 'post'),
            'reactions' => \App\Models\PostReaction::all()->load('user', 'post'),
        ]);
    }
}
