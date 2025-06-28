<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    protected $fillable = [
        'name',
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
