<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

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

    protected static function boot()
    {
        parent::boot();

        static::updating(function ($product) {
            // Get original images sebelum update
            $originalImages = $product->getOriginal('images');
            $newImages = $product->images;

            // Convert ke array jika perlu
            if (is_string($originalImages)) {
                $originalImages = json_decode($originalImages, true) ?? [];
            }
            if (!is_array($originalImages)) {
                $originalImages = [];
            }
            if (!is_array($newImages)) {
                $newImages = [];
            }

            // Cari gambar yang dihapus (ada di original tapi tidak ada di new)
            $deletedImages = array_diff($originalImages, $newImages);

            // Hapus file gambar yang sudah tidak digunakan
            foreach ($deletedImages as $imagePath) {
                if (Storage::disk('public')->exists($imagePath)) {
                    Storage::disk('public')->delete($imagePath);
                }
            }
        });

        static::deleting(function ($product) {
            if ($product->images && is_array($product->images)) {
                foreach ($product->images as $imagePath) {
                    if (Storage::disk('public')->exists($imagePath)) {
                        Storage::disk('public')->delete($imagePath);
                    }
                }
            }
        });
    }

    public function products()
    {
        return $this->hasMany(Products::class, 'id_category', 'id');
    }
    
    public function category()
    {
        return $this->belongsTo(Categories::class, 'id_category', 'id')->withTrashed();
    }
}
