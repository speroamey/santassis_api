<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class News extends Model
{
    //
    protected $fillable = [
        'title','resume', 'content','user_id','image_cover'
    ];

  
    public function user()
    {
      return $this->belongsTo(User::class);
    }

    public function getUrlAttribute()
    {
      return env('APP_URL').Storage::url('news/'.$this->image_cover);
    }

    

}
