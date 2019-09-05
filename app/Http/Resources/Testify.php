<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Testify extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'description'=>$this->description,
            'user'=>$this->user,
            'authorized'=> $this->authorized,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
