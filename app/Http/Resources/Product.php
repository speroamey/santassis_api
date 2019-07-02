<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Product extends JsonResource
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
            'name' => $this->name,
            'price' => $this->price,
            'image'=> $this->image,
            'image_url'=>$this->url,
            'reference'=>$this->reference,
            'description'=>$this->description,
            'user'=>$this->user,
            'authorized'=> $this->authorized,
            'quantity'=>$this->quantity,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
