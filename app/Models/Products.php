<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    protected $fillable = [
        'name',
        'images',
        'slug',
        'id_category',
        'price',
        'qty',
        'desc_short',
        'detail_prod',
        'bahan',
        'petunjuk_perawatan'
    ];

    protected $casts = [
        'images' => 'array',
    ];

    public function products()
    {
        return $this->hasMany(Products::class, 'id_category', 'id');
    }
    
    public function category()
    {
        return $this->belongsTo(Categories::class, 'id_category', 'id');
    }
}
