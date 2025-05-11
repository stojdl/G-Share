<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserSettingsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'dark_mode' => $this->dark_mode,
            'email_notifications' => $this->email_notifications,
            'sms_notifications' => $this->sms_notifications,
            'push_notifications' => $this->push_notifications,
            'two_factor_auth' => $this->two_factor_auth,
            'currency' => $this->currency,
            'language' => $this->language,
            'collect_challenges' => $this->collect_challenges,
        ];
    }
}
