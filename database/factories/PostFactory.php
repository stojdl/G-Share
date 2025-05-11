<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
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
            'title' => fake()->sentence(),
            'body' => fake()->paragraph(15),
            'created_at' => now(),
            'updated_at' => now(),
            'deleted_at' => null,
        ];
    }
    
    public function forUser(UserFactory $user): static
    {
        return $this->state(fn (array $attributes) => [
            'user_id' => $user,
        ]);
    }
}
