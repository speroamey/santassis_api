<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Contact extends Model
{
    //
    protected $fillable = [
        'fullname', 'phone', 'email','content',
    ];

  
}
