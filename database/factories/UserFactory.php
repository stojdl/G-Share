<?php

namespace Database\Factories;

use App\Models\UserProfile;
use App\Models\UserSettings;
use App\Models\UserPrivacySettings;
use App\Models\Post;
use App\Models\Comment;
use App\Models\PostReaction;
use App\Models\PostView;
use App\Models\Share;
use App\Models\CommentLike;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'username' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => static::$password ??= Hash::make('password'),
            'last_login' => now(),
            'premium' => fake()->numberBetween(0, 2),
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }

    public function withProfile(): static
    {
        return $this->has(UserProfile::factory(), 'profile');
    }

    public function withSettings(): static
    {
        return $this->has(UserSettings::factory(), 'settings');
    }

    public function withPrivacySettings(): static
    {
        return $this->has(UserPrivacySettings::factory(), 'privacy_settings');
    }

    public function withPosts(int $count = 5): static
    {
        return $this->has(Post::factory()->count($count), 'posts');
    }

    public function withComments(int $count = 5): static
    {
        return $this->has(Comment::factory()->count($count), 'comments');
    }

    public function withCommentLikes(int $count = 5): static
    {
        return $this->has(CommentLike::factory()->count($count), 'comment_likes');
    }

    public function withPostReactions(int $count = 5): static
    {
        return $this->has(PostReaction::factory()->count($count), 'post_reactions');
    }

    public function withPostViews(int $count = 5): static
    {
        return $this->has(PostView::factory()->count($count), 'post_views');
    }

    public function withShares($count = 5): static
    {
        return $this->has(Share::factory()->count($count), 'shares');
    }
}
