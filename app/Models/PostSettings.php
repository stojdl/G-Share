<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PostSettings extends Model
{
    /**
     * Get the post that owns the PostSettings
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function post(): BelongsTo
    {
        return $this->belongsTo(Post::class);
    }
}
