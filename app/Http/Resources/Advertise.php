<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Advertise extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return  [
            'user'=>$this->user,
            'name'=>$this->name,
            'image'=>$this->image,
            'description'=>$this->description,
            'state'=>$this->state,
            'weight'=>$this->weight,
            'size'=>$this->size,
            'start_date'=>$this->start_date,
            'end_date'=>$this->end_date,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
