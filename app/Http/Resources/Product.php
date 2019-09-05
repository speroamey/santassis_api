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

            'image_ordonnance'=> $this->image_ordonnance,
            'image_ordonnance_url'=> $this->ordonnance_url,
            'date_peremption'=>$this->date_peremption,
            
            'reference'=>$this->reference,
            'description'=>$this->description,
            'user'=>$this->user,
            'authorized'=> $this->authorized,
            'quantity'=>$this->quantity,
            'dose'=>$this->dose,
            'type'=>$this->type,
            'date_peremption'=>$this->date_peremption,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
