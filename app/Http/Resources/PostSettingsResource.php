<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostSettingsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'show_post' => $this->show_post,
            'allow_reactions' => $this->allow_reactions,
            'allow_comments' => $this->allow_comments,
            'allow_sharing' => $this->allow_sharing,
            'can_be_saved' => $this->can_be_saved,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'deleted_at' => $this->deleted_at,
            'post' => new PostResource($this->whenLoaded('post')),
        ];
    }
}
