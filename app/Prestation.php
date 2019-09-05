<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Prestation extends Model
{
    //
    protected $fillable = [
        'name', 'description', 'price','created_by'
    ];

    public function user()
    {
      return $this->belongsTo(User::class);
    }

}
