<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserBlocks extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * Get the user that owns the UserBlocks
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'blocker_user_id');
    }

    /**
     * Get the blocked_user that owns the UserBlocks
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function blocked_user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'blocked_user_id');
    }
}
