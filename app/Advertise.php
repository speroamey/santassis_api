<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Advertise extends Model
{
    //
    protected $fillable = [
        'name',
        'image',
        'description',
        'state',
        'weight',
        'size',
        'start_date',
        'end_date',
    ];


    public function user()
    {
      return $this->belongsTo(User::class);
    }
}
