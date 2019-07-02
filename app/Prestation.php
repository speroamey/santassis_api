<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Prestation extends Model
{
    //
    protected $fillable = [
        'name', 'description', 'price','user_id'
    ];

    public function user()
    {
      return $this->belongsTo(User::class);
    }

}
