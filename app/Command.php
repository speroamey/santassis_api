<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Command extends Model
{
    //
    protected $fillable = [
        'reference','state','description','address_livraison','user_id','ttc_price','total','comissions','zone_livraison','livraison_price'
    ];

    public function user()
    {
      return $this->belongsTo(User::class);
    }

    public function lineCommands()
    {
      return $this->hasMany(LineCommand::class);
    }
}
