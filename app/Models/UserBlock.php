<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserBlock extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * Get the user that owns the UserBlocks
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'blocker_id');
    }

    /**
     * Get the blocked_user that owns the UserBlocks
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function blocked_user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'blocked_id');
    }
}
