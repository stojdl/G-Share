<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserProfileResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'nickname' => $this->nickname,
            'hashtag' => $this->hashtag,
            'avatar' => $this->avatar,
            'quote' => $this->quote,
            'bio' => $this->bio,
            'continent' => $this->continent,
            'website' => $this->website,
            'year_of_birth' => $this->year_of_birth,
            'timezone' => $this->timezone,
        ];
    }
}
