<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Comment;
use App\Models\CommentLike;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comment>
 */
class CommentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'body' => $this->faker->sentence(2),
            'parent_comment_id' => null,
            'post_id' => \App\Models\Post::factory(),
            'user_id' => \App\Models\User::factory(),
        ];
    }

    public function withComments(): static
    {
        return $this->has(Comment::factory(), 'comments');
    }

    public function withCommentLikes(): static
    {
        return $this->has(CommentLike::factory(), 'comment_likes');
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

    public function forComment(CommentFactory $comment): static
    {
        return $this->state(fn (array $attributes) => [
            'comment_id' => $comment,
        ]);
    }
}
