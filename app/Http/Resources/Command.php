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
            'id'=>$this->id,
            'line_commands'=>$this->lineCommands,
            'user'=>$this->user,
            'reference'=>$this->reference,
            'state'=>$this->state,
            'description'=>$this->description,
            'zone_livraison'=>$this->zone_livraison,
            'livraison_price'=>$this->livraison_price,
            'comissions'=>$this->comissions,
            'ttc_price'=>$this->ttc_price,
            'total'=>$this->total,
            'address_livraison'=>$this->address_livraison,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
