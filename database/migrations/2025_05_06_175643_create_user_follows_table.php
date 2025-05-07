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
        Schema::create('user_follows', function (Blueprint $table) {
            $table->id();
            $table->foreignId('follower_user_id')->references('id')
                                                  ->on('users')
                                                  ->onDelete('cascade');
            $table->foreignId('followed_user_id')->references('id')
                                                ->on('users')
                                                ->onDelete('cascade');
            $table->unique(['follower_user_id', 'followed_user_id'], 'user_follow_unique');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_follows');
    }
};
