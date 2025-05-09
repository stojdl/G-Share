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
    
    public function share_place()
{
    $users = \App\Models\User::with(
        'posts',
        'profile',
        'settings',
        'privacy_settings',
        'posts.reactions.user',
        'posts.views.user',
        'posts.shares.user',
        'posts.comments.user',
        'posts.comments.likes.user',
        'posts.comments.children.user',
        'posts.comments.children.likes.user'
    )->get();

    $posts = \App\Models\Post::with('user', 'comments.user', 'reactions.user')->get();
    $comments = \App\Models\Comment::with('user', 'likes.user', 'children.user', 'children.likes.user')->get();
    $views = \App\Models\PostView::with('user')->get();
    $reactions = \App\Models\PostReaction::with('user')->get();

    return Inertia::render('SharePlace', [
        'users' => $users,
        'posts' => $posts,
        'comments' => $comments,
        'views' => $views,
        'reactions' => $reactions,
    ]);
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

    public function explore()
{
    $users = \App\Models\User::all()->load('posts', 'profile', 'settings', 'privacy_settings');

    foreach ($users as $user) {
        $user->load(
            'posts.reactions.user',
            'posts.views.user',
            'posts.shares.user',
            'posts.comments.user',
            'posts.comments.likes.user',
            'posts.comments.children.user',
            'posts.comments.children.likes.user'
        );
    }

    return Inertia::render('Fragments/SharePlace/Explore', [
    'users' => $users,
    'posts' => \App\Models\Post::all()->load('user', 'comments.user', 'reactions.user'),
]);


}

}
