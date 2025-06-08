<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateTeamRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'slug' => 'required|string|unique:teams,slug|max:255',
            'avatar' => 'nullable|image|max:2048',
            'size' => 'required|string|max:50',
            'description' => 'nullable|string|max:500',
            'language' => 'required|string|max:50',
            'region' => 'required|string|max:50',
            'membership_type' => 'required|in:open,request,invite',
        ];
    }
}
