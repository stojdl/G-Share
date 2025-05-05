<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CommentLike>
 */
class CommentLikeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'comment_id' => \App\Models\Comment::factory(),
            'user_id' => \App\Models\User::factory(),
        ];
    }

    public function forUser(UserFactory $user): static
    {
        return $this->state(fn (array $attributes) => [
            'user_id' => $user,
        ]);
    }

    public function forComment(CommentFactory $comment): static
    {
        return $this->state(fn (array $attributes) => [
            'comment_id' => $comment,
        ]);
    }
}
