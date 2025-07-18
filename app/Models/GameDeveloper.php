<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GameDeveloper extends Model
{
    protected $fillable = [
        'game_id',
        'developer_id',
    ];

    public function game()
    {
        return $this->belongsTo(Game::class);
    }

    public function developer()
    {
        return $this->belongsTo(Developer::class);
    }
}
