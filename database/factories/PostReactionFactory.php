<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PostReaction>
 */
class PostReactionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'post_id' => \App\Models\Post::factory(),
            'user_id' => \App\Models\User::factory(),
            'reaction_type' => $this->faker->randomElement(['like', 'love', 'haha', 'wow', 'sad', 'angry']),
        ];
    }

    public function forUser(UserFactory $user): static
    {
        return $this->state(fn (array $attributes) => [
            'user_id' => $user,
        ]);
    }
    
    public function forPost(PostFactory $post): static
    {
        return $this->state(fn (array $attributes) => [
            'post_id' => $post,
        ]);
    }
}
