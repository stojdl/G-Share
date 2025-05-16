<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'username' => $this->username,
            'hashtag' => $this->hashtag,
            'email' => $this->email,
            'last_login' => $this->last_login,
            'premium' => $this->premium,
            'profile' => new UserProfileResource($this->whenLoaded('profile')),
            'settings' => new UserSettingsResource($this->whenLoaded('settings')),
            'privacy_settings' => new UserPrivacySettingsResource($this->whenLoaded('privacy_settings')),
            'friends' => UserResource::collection($this->whenLoaded('friends')),
            'friendships' => FriendshipResource::collection($this->whenLoaded('friendships')),
            'friendship_requests' => FriendshipResource::collection($this->whenLoaded('friend_requests')),
            'posts' => PostResource::collection($this->whenLoaded('posts')),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'deleted_at' => $this->deleted_at,
        ];
    }
}
