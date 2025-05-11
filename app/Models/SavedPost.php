<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SavedPost extends Model
{
    /**
     * Get the user that owns the SavedPost
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the post that owns the SavedPost
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function post(): BelongsTo
    {
        return $this->belongsTo(Post::class);
    }

    /**
     * Get the saved_posts_folder that owns the SavedPost
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function saved_posts_folder(): BelongsTo
    {
        return $this->belongsTo(SavedPostsFolder::class);
    }
}
