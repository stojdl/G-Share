<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CommentRequest;
use App\Models\Comment;


class CommentController extends Controller
{
    public function store(CommentRequest $request)
    {
        $request->validated();

        $comment = Comment::create([
                'user_id' => auth()->id(),
                'post_id' => $request->input('post_id'),
                'parent_comment_id' => $request->input('parent_comment_id'),
                'body' => $request->input('body'),
        ]);

        return back()->with('success', 'Comment added successfully!');
    }

}
