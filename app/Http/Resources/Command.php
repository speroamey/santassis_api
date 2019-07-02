<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Command extends JsonResource
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
            'user'=>$this->user,
            'product'=>$this->product,
            'reference'=>$this->reference,
            'state'=>$this->state,
            'description'=>$this->description,
            'address_livraison'=>$this->address_livraison,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
