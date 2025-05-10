<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Friendship>
 */
class FriendshipFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => \App\Models\User::factory(),
            'friend_id' => \App\Models\User::factory(),
            'action_user_id' => \App\Models\User::factory(),
            'status' => $this->faker->randomElement(['pending', 'accepted', 'blocked']),
        ];
    }
}
