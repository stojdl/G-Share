<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\Http\Resources\PostResource;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\User;


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
                        'posts.comments.children.likes.user',
                        'blocks.user',
                        'blocked_by.user',
                        'friends.user',
                        'friendships.user',
                        'friendship_requests.user',
                        'followers.user',
                        'follows.user');
                        
            // $user->all_friends = $user->all_friends();

            
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
            // 'users' => [...$users, 'friends' => $users->all_friends()],
            'users' => $users,
            'posts' => \App\Models\Post::all()->load('user', 'comments.user', 'reactions.user'),
            'comments' => \App\Models\Comment::all()->load('user', 'post', 'children.user'),
            'views' => \App\Models\PostView::all()->load('user', 'post'),
            'reactions' => \App\Models\PostReaction::all()->load('user', 'post'),
        ]);
    }

    public function profile()
    {
        $user = User::find(auth()->user()->id);
        $user->load('profile', 'settings', 'privacy_settings',
                    'friends', 'friendships', 'friendship_requests.user',
                    'posts', 'posts.reactions.user',
                    'posts.comments.user', 'posts.comments.likes.user', 
                    'posts.comments.children.user', 'posts.comments.children.likes.user',
                    'posts.comments.children.children.user', 'posts.comments.children.children.likes.user',
                    'posts.comments.children.children.children.user', 'posts.comments.children.children.children.likes.user',
                    'posts.comments.children.children.children.children.user', 'posts.comments.children.children.children.children.likes.user',
                    'posts.comments.children.children.children.children.children.user', 'posts.comments.children.children.children.children.children.likes.user',);

        return Inertia::render('Profile/Show', [
            'user' => $user
        ]);
    }

    public function user_profile($user)
    {
        $logged_user = User::find(auth()->user()->id);
        $user = User::find($user);

        if ($logged_user->id === $user->id) {
            return redirect()->route('profile.show');
        }

        $logged_user->load('friendship_requests.user');
        $user->load('profile',
                    'friends', 'friendships', 'friendship_requests.user',
                    'posts', 'posts.reactions.user',
                    'posts.comments.user', 'posts.comments.likes.user', 
                    'posts.comments.children.user', 'posts.comments.children.likes.user',
                    'posts.comments.children.children.user', 'posts.comments.children.children.likes.user',
                    'posts.comments.children.children.children.user', 'posts.comments.children.children.children.likes.user',
                    'posts.comments.children.children.children.children.user', 'posts.comments.children.children.children.children.likes.user',
                    'posts.comments.children.children.children.children.children.user', 'posts.comments.children.children.children.children.children.likes.user',);

        return Inertia::render('User/Show', [
            'user' => $user,
            'loggedUser' => $logged_user
        ]);
    }
    
    public function share_place()
    {

        $posts = \App\Models\Post::all()->load('user', 
                                               'views', 
                                               'reactions.user', 
                                               'shares.user', 
                                               'comments.user', 
                                               'comments.likes.user', 
                                               'comments.children.user', 
                                               'comments.children.likes.user',
                                               'comments.children.children.user',
                                               'comments.children.children.likes.user',
                                               'comments.children.children.children.user',
                                               'comments.children.children.children.likes.user',
                                               'comments.children.children.children.children.user',
                                               'comments.children.children.children.children.likes.user',
                                               'comments.children.children.children.children.children.user',
                                               'comments.children.children.children.children.children.likes.user',);

                                            
        return Inertia::render('SharePlace', [
            'posts' => $posts,
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
}
