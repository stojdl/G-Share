<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Friendship extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'friend_id',
        'action_user_id',
        'status',
        'deleted_at',
    ];

    /**
     * Get the user that owns the Friendship
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * Get the friend that owns the Friendship
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function friend(): BelongsTo
    {
        return $this->belongsTo(User::class, 'friend_id');
    }

    /**
     * Get the action_user that owns the Friendship
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function action_user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'action_user_id');
    }
}
