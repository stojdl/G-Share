<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserPrivacySettings>
 */
class UserPrivacySettingsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $visibility_options = ['everyone', 'friends', 'close_friends', 'only_me'];

        return [
            'user_id' => null,
            'show_account' => $this->faker->randomElement($visibility_options),
            'show_activity' => $this->faker->randomElement($visibility_options),
            'show_posts' => $this->faker->randomElement($visibility_options),
            'show_challenges' => $this->faker->randomElement($visibility_options),
            'show_continent' => $this->faker->randomElement($visibility_options),
            'show_timezone' => $this->faker->randomElement($visibility_options),
            'show_year_of_birth' => $this->faker->randomElement($visibility_options),
            'allow_friend_requests' => $this->faker->boolean(),
            'allow_follow_requests' => $this->faker->boolean(),
            'show_followers' => $this->faker->randomElement($visibility_options),
            'show_following' => $this->faker->randomElement($visibility_options),
            'allow_dirrected_messages' => $this->faker->randomElement($visibility_options),
            'allow_conversations' => $this->faker->randomElement($visibility_options),
            'allow_mentions' => $this->faker->randomElement($visibility_options),
            'allow_comments' => $this->faker->randomElement($visibility_options),
            'allow_likes' => $this->faker->randomElement($visibility_options),
            'allow_reactions' => $this->faker->randomElement($visibility_options),
            'allow_shares' => $this->faker->randomElement($visibility_options),
            'allow_saves' => $this->faker->randomElement($visibility_options),
            'show_saved_posts' => $this->faker->randomElement($visibility_options),
            'show_saved_posts_folders' => $this->faker->randomElement($visibility_options),
        ];
    }
}
