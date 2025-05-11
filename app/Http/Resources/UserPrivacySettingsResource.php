<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserPrivacySettingsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'show_account' => $this->show_account,
            'show_activity' => $this->show_activity,
            'show_posts' => $this->show_posts,
            'show_challenges' => $this->show_challenges,
            'show_continent' => $this->show_continent,
            'show_timezone' => $this->show_timezone,
            'show_year_of_birth' => $this->show_year_of_birth,
            'allow_friend_requests' => $this->allow_friend_requests,
            'allow_follow_requests' => $this->allow_follow_requests,
            'show_followers' => $this->show_followers,
            'show_following' => $this->show_following,
            'allow_directed_messages' => $this->allow_directed_messages,
            'allow_conversations' => $this->allow_conversations,
            'allow_mentions' => $this->allow_mentions,
            'allow_comments' => $this->allow_comments,
            'allow_likes' => $this->allow_likes,
            'allow_reactions' => $this->allow_reactions,
            'allow_shares' => $this->allow_shares,
            'allow_saves' => $this->allow_saves,
            'show_saved_posts' => $this->show_saved_posts,
            'show_saved_posts_folders' => $this->show_saved_posts_folders,
        ];
    }
}
