<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\FriendshipRequest;
use App\Models\Friendship;

class FriendshipController extends Controller
{
    public function store($user_id)
    {
    $friendship = Friendship::withTrashed()->where('user_id', auth()->id())
        ->where('friend_id', $user_id)
        ->first();

    if ($friendship) {
        $friendship->restore();
    } else {
        Friendship::create([
            'user_id' => auth()->id(),
            'friend_id' => $user_id,
            'status' => "pending",
            'action_user_id' => auth()->id(),
        ]);
    }

        return back()->with('success', 'Friend request sent!');
    }

    public function accept_friendship_request($user_id)
    {
        $friendship = Friendship::where('user_id', $user_id)
            ->where('friend_id', auth()->id())
            ->where('status', 'pending')
            ->firstOrFail();

        $friendship->update([
            'status' => 'accepted',
            'action_user_id' => auth()->id(),
        ]);

        $existingFriendship = Friendship::withTrashed()
            ->where('user_id', auth()->id())
            ->where('friend_id', $user_id)
            ->first();

        if ($existingFriendship) {
            $existingFriendship->restore();
            $existingFriendship->update([
            'status' => 'accepted',
            'action_user_id' => auth()->id(),
            ]);
        } else {
            Friendship::create([
            'user_id' => auth()->id(),
            'friend_id' => $user_id,
            'status' => 'accepted',
            'action_user_id' => auth()->id(),
            ]);
        }

        return back()->with('success', 'Friend request accepted!');
    }

    public function destroy($user_id)
    {
        $friendships = Friendship::where(function ($query) use ($user_id) {
            $query->where('user_id', auth()->id())
                  ->where('friend_id', $user_id);
        })->orWhere(function ($query) use ($user_id) {
            $query->where('user_id', $user_id)
                  ->where('friend_id', auth()->id());
        })->get();

        foreach ($friendships as $friendship) {
            $friendship->update([
                'status' => 'pending',
                'action_user_id' => auth()->id(),
            ]);
            $friendship->delete();
        }

        return back()->with('success', 'Friendship removed!');
    }
}
