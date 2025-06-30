<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Categories extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
    ];

    protected $dates = ['deleted_at'];

    public function products()
    {
        return $this->hasMany(Products::class, 'id_category', 'id');
    }
    
    public function category()
    {
        return $this->belongsTo(Categories::class, 'id_category', 'id');
    }
}
