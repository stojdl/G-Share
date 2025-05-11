<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CommentLikeRequest;
use App\Models\CommentLike;

class CommentLikeController extends Controller
{
    public function like(CommentLikeRequest $request)
    {
        $request->validated();

        $commentLike = CommentLike::where('user_id', auth()->id())
            ->where('comment_id', $request->input('comment_id'))
            ->first();

        if ($commentLike) {
            $this->destroy($commentLike);
        } else {
            $this->store($request);
        }

        return back()->with('success', 'Action performed successfully!');
    }

    public function store(CommentLikeRequest $request)
    {
        $request->validated();

        CommentLike::create([
            'user_id' => auth()->id(),
            'comment_id' => $request->input('comment_id'),
        ]);

        return back()->with('success', 'Comment liked successfully!');
    }

    public function destroy(CommentLike $commentLike)
    {
        $commentLike->delete();

        return back()->with('success', 'Comment like removed successfully!');
    }
}
