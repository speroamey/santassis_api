<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Product extends Model
{
    //
    protected $fillable = [
        'name', 'reference', 'price','image','image_ordonnance','date_peremption','authorized', 'quantity',
        'dose','type','user_id','description',
    ];

    public function user()
    {
      return $this->belongsTo(User::class);
    }

    public function getUrlAttribute()
    {
      return env('APP_URL').Storage::url('prodcts/'.$this->image);
    }

    public function getOrdonnanceUrlAttribute()
    {
      return env('APP_URL').Storage::url('prodcts/'.$this->image_ordonnance);
    }
}
