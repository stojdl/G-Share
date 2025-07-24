<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Game;
use App\Models\Developer;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $developer = [
            'name' => 'Riot games',
            'slug' => 'riot-games',
            'description' => 'wallah',
          //  'image' => '',
            'url' => 'https://riotgames.com/'
        ];

        Developer::updateOrCreate([
            'slug' => $developer['slug']
        ], [
            'name' => $developer['name'],
            'description' => $developer['description'],
            'url' => $developer['url']
        ]);

        // Add the developer to the games table
        $games = Game::where('slug', 'league-of-legends')->get();
        foreach ($games as $game) {
            $game->developers()->syncWithoutDetaching(Developer::where('slug', $developer['slug'])->first());
        }
        // $games = Game::where('slug', 'valorant')->get();
        // foreach ($games as $game) {
        //     $game->developers()->syncWithoutDetaching(Developer::where('slug', $developer['slug'])->first());
        // }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        $developer = Developer::where('slug', 'riot-games')->first();
        if ($developer) {
            // Detach the developer from all games
            $games = Game::whereHas('developers', function ($query) use ($developer) {
                $query->where('slug', $developer->slug);
            })->get();

            foreach ($games as $game) {
                $game->developers()->detach($developer->id);
            }

            // Delete the developer
            $developer->delete();
        }
    }
};
