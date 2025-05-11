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
        Schema::create('user_privacy_settings', function (Blueprint $table) {
            $table->id();

            $table->enum('show_account', ['everyone', 'friends', 'close_friends', 'only_me'])->default('friends');
            $table->enum('show_activity', ['everyone', 'friends', 'close_friends', 'only_me'])->default('only_me');
            $table->enum('show_posts', ['everyone', 'friends', 'close_friends', 'only_me'])->default('friends');
            $table->enum('show_challenges', ['everyone', 'friends', 'close_friends', 'only_me'])->default('only_me');

            $table->enum('show_continent', ['everyone', 'friends', 'close_friends', 'only_me'])->default('friends');
            $table->enum('show_timezone', ['everyone', 'friends', 'close_friends', 'only_me'])->default('friends');

            $table->enum('show_year_of_birth', ['everyone', 'friends', 'close_friends', 'only_me'])->default('only_me');
          
            $table->boolean('allow_friend_requests')->default(true);
            $table->boolean('allow_follow_requests')->default(true);
            $table->enum('show_followers', ['everyone', 'friends', 'close_friends', 'only_me'])->default('friends');
            $table->enum('show_following', ['everyone', 'friends', 'close_friends', 'only_me'])->default('friends');


            $table->enum('allow_dirrected_messages', ['everyone', 'friends', 'close_friends', 'only_me'])->default('friends');
            $table->enum('allow_conversations', ['everyone', 'friends', 'close_friends', 'only_me'])->default('friends');

            $table->enum('allow_mentions', ['everyone', 'friends', 'close_friends', 'only_me'])->default('friends');

            $table->enum('allow_comments', ['everyone', 'friends', 'close_friends', 'only_me'])->default('friends');
            $table->enum('allow_likes', ['everyone', 'friends', 'close_friends', 'only_me'])->default('friends');
            $table->enum('allow_reactions', ['everyone', 'friends', 'close_friends', 'only_me'])->default('friends');
            $table->enum('allow_shares', ['everyone', 'friends', 'close_friends', 'only_me'])->default('friends');
            $table->enum('allow_saves', ['everyone', 'friends', 'close_friends', 'only_me'])->default('friends');

            $table->enum('show_saved_posts', ['everyone', 'friends', 'close_friends', 'only_me'])->default('only_me');
            $table->enum('show_saved_posts_folders', ['everyone', 'friends', 'close_friends', 'only_me'])->default('only_me');

            $table->foreignId('user_id')->references('id')
                                        ->on('users')
                                        ->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_privacy_settings');
    }
};
