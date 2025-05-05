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
        Schema::create('shares', function (Blueprint $table) {
            $table->id();

            $table->string('share_type')->nullable(); // e.g., 'facebook', 'twitter', etc.
            $table->string('share_url')->nullable(); // URL of the shared post

            $table->string('share_image')->nullable(); // Image URL for the share
            $table->string('share_thumbnail')->nullable(); // Thumbnail URL for the share
            $table->string('share_title')->nullable(); // Title for the share
            $table->string('share_description')->nullable(); // Description for the share
            
            $table->foreignId('user_id')->references('id')
                                        ->on('users')
                                        ->onDelete('cascade');
            $table->foreignId('post_id')->references('id')
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
        Schema::dropIfExists('shares');
    }
};
