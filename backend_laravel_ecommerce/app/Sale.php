<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    protected $fillable = ['num_sale','date_sale','intervalos_cuotas','abono_inicial','cant_cuotas'];
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
    public function products()
    {
        return $this->belongsToMany(Product::class)->withPivot(['quantity_products','total']);
    }
}
