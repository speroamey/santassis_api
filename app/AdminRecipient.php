<?php

namespace App;


//app/Recipients/AdminRecipient.php
namespace App\Recipients;

class AdminRecipient extends Recipient{

    public function __construct()
    {
        $this->email = env('ADMIN_EMAIL');
    }

}