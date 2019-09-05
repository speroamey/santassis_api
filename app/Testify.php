<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Testify extends Model
{
    //
    protected $fillable = [
        'description', 'authorized','user_id'
    ];


    public function user()
    {
      return $this->belongsTo(User::class);
    }
}
