<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserPrivacySettings extends Model
{
    use HasFactory;

    /**
     * Get the user that owns the UserPrivacySettings
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
