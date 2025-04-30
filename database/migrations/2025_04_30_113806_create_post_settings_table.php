<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('post_settings', function (Blueprint $table) {
            $table->id();
            $table->enum('show_post', ['everyone', 'friends_close_friends', 'followers', 'following', 'only_me']);
            $table->enum('allow_reactions', ['everyone', 'friends_close_friends', 'followers', 'following', 'only_me']);
            $table->enum('allow_comments', ['everyone', 'friends_close_friends', 'followers', 'following', 'only_me']);
            $table->enum('allow_sharing', ['everyone', 'friends_close_friends', 'followers', 'following', 'only_me']);
            $table->boolean('can_be_saved');
            $table->foreign('post_id')->references('id')
                                        ->on('posts')
                                        ->onDelete('cascade'); 
            $table->timestamps();
            $table->timestamp('deleted_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('post_settings');
    }
};
