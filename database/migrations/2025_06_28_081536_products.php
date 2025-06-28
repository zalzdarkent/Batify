<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->json('images');
            $table->string('slug');
            $table->bigInteger('id_category');
            $table->unsignedBigInteger('price');
            $table->integer('qty');
            $table->text('desc_short')->nullable();
            $table->text('detail_prod')->nullable();
            $table->text('bahan')->nullable();
            $table->text('petunjuk_perawatan')->nullable();
            $table->timestamps();
        });

        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
        Schema::dropIfExists('categories');
    }
};
