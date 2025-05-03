<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserSettings>
 */
class UserSettingsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => null,
            'dark_mode' => $this->faker->boolean(),
            'email_notifications' => $this->faker->boolean(),
            'sms_notifications' => $this->faker->boolean(),
            'push_notifications' => $this->faker->boolean(),
            'language' => $this->faker->locale(),
            'currency' => $this->faker->currencyCode(),
        ];
    }
}
