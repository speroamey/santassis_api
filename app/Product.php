<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Product extends Model
{
    //
    protected $fillable = [
        'name', 'reference', 'price','image','authorized', 'quantity','user_id','description',
    ];

    public function user()
    {
      return $this->belongsTo(User::class);
    }

    public function getUrlAttribute()
    {
      return env('APP_URL').Storage::url('prodcts/'.$this->image);
    }
}
