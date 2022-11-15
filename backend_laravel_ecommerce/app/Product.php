<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name','category_id','code','name','description','price','cost','stock','image'];
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public static function search($column,$search){
        return Product::where($column,'like','%'.$search.'%')->get();
    }
}
