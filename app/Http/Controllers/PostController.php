<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\PostRequest;
use App\Models\Post;

class PostController extends Controller
{
    public function store(PostRequest $request)
    {
        $request->validated();

        Post::create([
            'user_id' => auth()->id(),
            'title' => $request->input('title'),
            'body' => $request->input('body'),
        ]);

        return back()->with('success', 'Post created successfully!');
    }
}
