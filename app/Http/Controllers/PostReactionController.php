<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\PostReactionRequest;
use App\Models\PostReaction;


class PostReactionController extends Controller
{
    public function store(PostReactionRequest $request)
    {
        $request->validated();

        PostReaction::create([
            'user_id' => auth()->id(),
            'post_id' => $request['post_id'],
            'reaction_type' => $request['reaction']
        ]);

        return back()->with('success', 'Reaction succesfully created!');
    } 

    public function destroy($post_id)
    {
        $reaction = PostReaction::where('post_id', $post_id)->where('user_id', auth()->id())->firstOrFail();

        $reaction->delete();

        return back()->with('success', 'Reaction deleted successfully!');
    }
}
