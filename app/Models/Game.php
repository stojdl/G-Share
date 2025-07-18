<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    protected $fillable = [
        'name',
        'title',
        'slug',
        'description',
        'release_date',
        'image',
        'url',
    ];

    public function developers()
    {
        return $this->belongsToMany(Developer::class, 'game_developers');
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'game_categories');
    }

    


}
