<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Team;
use App\Models\TeamMember;
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
            'kicked' => false,
            'joined_at' => now(),
            'user_id' => auth()->id(),
            'team_id' => $team->id,
        ]);

        return back()->with('success', 'Team created successfully.');
    }
}
