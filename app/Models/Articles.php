<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Articles extends Model
{
    protected $table = "articles";
    protected $fillable = [
        'title',
        'thumbnail',
        'desc',
        'content',
    ];

    /**
     * The "booted" method of the model.
     */
    protected static function booted(): void
    {
        // Delete the thumbnail when the article is deleted
        static::deleting(function (Articles $article) {
            if ($article->thumbnail) {
                Storage::disk('public')->delete($article->thumbnail);
            }
        });

        // Delete the old thumbnail when the article is updated with a new one
        static::updating(function (Articles $article) {
            if ($article->isDirty('thumbnail') && $article->getOriginal('thumbnail')) {
                Storage::disk('public')->delete($article->getOriginal('thumbnail'));
            }
        });
    }
}
