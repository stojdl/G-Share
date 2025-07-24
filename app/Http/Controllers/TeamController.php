<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Team;
use App\Models\TeamMember;
use App\Models\TeamJoinRequest;
use App\Http\Requests\CreateTeamRequest;

class TeamController extends Controller
{
    public function store(CreateTeamRequest $request)
    {
        $request->validated(); 

        // Validate and create a new team
        $team = Team::create([
            'name' => $request->name,
            'slug' => $request->slug,
            'avatar' => $request->avatar,
            'size' => $request->size,
            'description' => $request->description,
            'language' => $request->lang,
            'region' => $request->region,
            'membership_type' => $request->membership_type,
            'creator_user_id' => auth()->id(),
            'owner_user_id' => auth()->id(),
        ]);

        // Add the creator as the first member
        TeamMember::create([
            'role' => 'owner',
            'joined_at' => now(),
            'user_id' => auth()->id(),
            'team_id' => $team->id,
        ]);

        return back()->with('success', 'Team created successfully.');
    }

    public function join(Request $request) 
    {
        TeamMember::create([
            'role' => 'member',
            'joined_at' => now(),
            'user_id' => auth()->id(),
            'team_id' => $request->team_id,
        ]);

        return back()->with('success', 'Team member created successfully.');
    }

    public function request(Request $request)
    {
        TeamJoinRequest::create([
            'user_id' => auth()->id(),
            'team_id' => $request->team_id,
        ]);

        return back()->with('success', 'Join request sent successfully.');
    }

    public function accept_request(Request $request) 
    {
        $joinRequest = TeamJoinRequest::find($request->request_id);
        
        TeamMember::create([
            'role' => 'member',
            'joined_at' => now(),
            'user_id' => $joinRequest->user_id,
            'team_id' => $joinRequest->team_id,
        ]);

        $joinRequest->update(['status' => 'accepted']);

        return back()->with('success', 'Join request accepted successfully.');
    }

    public function leave(Request $request)
    {
        TeamMember::where('team_id', $request->team_id)->where('user_id', auth()->id())->delete();
        TeamJoinRequest::where('team_id', $request->team_id)->where('user_id', auth()->id())->delete();

        return back()->with('success', 'You have left the team successfully.');
    }

    public function delete(Request $request)
    {
        Team::where('id', $request->team_id)->first()->delete();
       
        return redirect(route('team.create'));
    }

}
