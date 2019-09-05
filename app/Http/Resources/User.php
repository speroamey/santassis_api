<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class User extends JsonResource
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
            'role' => $this->role,
            'name' => $this->name,
            'firstname' => $this->firstname,
            'lastname'=>$this->lastname,
            'avatar'=> $this->avatar,
            'avatar_url'=>$this->url,
            'active'=>$this->active,
            'birthdate'=>$this->birthdate,
            'sexe'=>$this->sexe,
            'phone'=> $this->phone,
            'email'=>$this->email,
            'profession'=>$this->profession,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
