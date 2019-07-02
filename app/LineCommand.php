<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LineCommand extends Model
{
    //
    protected $fillable = [
        'state','description','command_id','product_id', 'quantity','user_id','unit_price','tva_price'
    ];


    public function user()
    {
      return $this->belongsTo(User::class);
    }

    public function product()
    {
      return $this->belongsTo(Product::class);
    }
    
    public function command()
    {
      return $this->belongsTo(Command::class);
    }
}
