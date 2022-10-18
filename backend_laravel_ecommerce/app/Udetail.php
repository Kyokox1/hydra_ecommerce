<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Udetail extends Model
{
    protected $fillable = ['user_id','type_document','document','firstname','secondname','lastname','secondlastname','phone'];
}
