<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserProfile>
 */
class UserProfileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $continent_options = [
            'Africa',
            'Antarctica',
            'Asia',
            'Europe',
            'North America',
            'Oceania',
            'South America',
        ];

        return [
            'user_id' => null,
            'avatar' => $this->faker->imageUrl(640, 480, 'people'),
            'quote' => $this->faker->sentence(),
            'bio' => $this->faker->sentence(3),
            'continent' => $this->faker->randomElement($continent_options),
            'website' => $this->faker->url(),
            'year_of_birth' => $this->faker->year(),
            'timezone' => $this->faker->timezone(),
        ];
    }
}
