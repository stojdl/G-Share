<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserFollow extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * Get the user that owns the UserFollow
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'following_user_id');
    }

    /**
     * Get the followed_user that owns the UserFollow
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function followed_user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'followed_user_id');
    }
}
