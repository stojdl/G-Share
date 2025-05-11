<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SavedPostsFolder extends Model
{
    /**
     * Get the user that owns the SavedPostsFolder
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get all of the saved_posts for the SavedPostsFolder
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function saved_posts(): HasMany
    {
        return $this->hasMany(SavedPost::class);
    }
}
