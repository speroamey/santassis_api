<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Command extends Model
{
    //
    protected $fillable = [
        'reference','state','description','address_livraison','user_id'
    ];


    public function user()
    {
      return $this->belongsTo(User::class);
    }

    public function product()
    {
      return $this->belongsTo(Product::class);
    }
}
