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
        Schema::create('team_join_requests', function (Blueprint $table) {
            $table->id();
            $table->enum('status', ['pending', 'accepted', 'blocked'])->default('pending');
            $table->foreignId('user_id')->references('id')
                                        ->on('users')
                                        ->onDelete('cascade');
            $table->foreignId('team_id')->references('id')
                                        ->on('teams')
                                        ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('team_join_requests');
    }
};
