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
        Schema::create('user_profiles', function (Blueprint $table) {
            $table->id();
            $table->string('nickname')->nullable();
            $table->string('hashtag')->nullable();
            $table->string('avatar')->nullable();
            $table->string('quote')->nullable();
            $table->string('bio')->nullable();
            $table->enum('continent', ['Africa', 'Antarctica', 'Asia', 'Europe', 'North America', 'Oceania', 'South America'])->nullable();
            $table->string('website')->nullable();
            $table->string('year_of_birth')->nullable();
            $table->string('timezone')->nullable();
            $table->foreignId('user_id')->references('id')
                                        ->on('users')
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
        Schema::dropIfExists('user_profiles');
    }
};
