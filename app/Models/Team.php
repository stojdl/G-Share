<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'avatar',
        'size',
        'description',
        'language',
        'region',
        'membership_type',
        'creator_user_id',
        'owner_user_id',
    ];

    public function members()
    {
        return $this->hasMany(TeamMember::class);
    }
    public function joinRequests()
    {
        return $this->hasMany(TeamJoinRequest::class);
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_user_id');
    }

    public function owner()
    {
        return $this->belongsTo(User::class, 'owner_user_id');
    }
}
