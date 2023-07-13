<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\CareFacilities;

class careFacilitiesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request)
    {
        // return parent::toArray($request);
        return [
            'id' => (int) $this->id,
            'name' => $this->name,
            'state' => $this->state,
            'details' => $this->details,
            'location' => $this->location,
            'phone_number' => $this->phone_number,
            'email' => $this->email,
        ];
    }
}
