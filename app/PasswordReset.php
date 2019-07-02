<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PasswordReset extends Model
{
    //Author:ameyspero@gmail.com
    protected $fillable = [
        'email', 'token'
    ];
}
