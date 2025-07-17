<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TeamMember;
use App\Http\Requests\CreateTeamRequest;

class TeamMemberController extends Controller
{
    public function store(CreateTeamMemberRequest $request)
    {
        $request->validated();

        // Validate and create a new team member
        $teamMember = TeamMember::create([
            'role' => $request->role,
            'kicked' => false,
            'joined_at' => now(),
            'user_id' => $request->user_id,
            'team_id' => $request->team_id,
        ]);

        return back()->with('success', 'Team member added successfully.');
    }
}
