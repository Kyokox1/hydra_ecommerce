<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    protected $fillable = ['num_sale','date_sale','intervalos_cuotas','abono_inicial','cant_cuotas'];
}
