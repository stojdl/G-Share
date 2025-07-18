<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TeamJoinRequest extends Model
{
    protected $fillable = [
        'status',
        'user_id',
        'team_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function team()
    {
        return $this->belongsTo(Team::class);
    }   
}
