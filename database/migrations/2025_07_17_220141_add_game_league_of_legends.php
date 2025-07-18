<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Game;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $game = [
            'name' => 'League of Legends',
            'slug' => 'league-of-legends',
            'description' => 'League of Legends is a multiplayer online battle arena (MOBA) game developed and published by Riot Games. Players assume the role of a "champion" with unique abilities and battle against other players or computer-controlled champions.',
            //'image' => 'https://example.com/images/league-of-legends.jpg',
            'release_date' => '2009-10-27',
        ];
        
        Game::updateOrCreate(
            ['slug' => $game['slug']],
            [
                'name' => $game['name'],
                'description' => $game['description'],
                'release_date' => $game['release_date'],
                // 'image' => $game['image'], // Uncomment if you have an image URL
            ]
        );
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Game::where('slug', 'league-of-legends')->delete();
    }
};
