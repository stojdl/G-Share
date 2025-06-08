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
        Schema::create('teams', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('avatar')->nullable();
            $table->string('size');
            $table->string('description')->nullable();
            $table->string('language');
            $table->string('region');
            $table->enum('membership_type', ['open', 'request', 'invite'])->default('request');

            $table->foreignId('creator_user_id')->references('id')
                                                ->on('users')
                                                ->onDelete('cascade');
            $table->foreignId('owner_user_id')->references('id')
                                              ->on('users')
                                              ->onDelete('cascade');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teams');
    }
};
