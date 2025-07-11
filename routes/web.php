<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('homepage/index');
})->name('home');

Route::get('/katalog', function () {
    return Inertia::render('catalog/index');
})->name('catalog');

Route::get('/katalog/{id}', function () {
    return Inertia::render('catalog/detailProduct/index');
});

Route::get('/keranjang', function () {
    return Inertia::render('keranjang/index');
})->name('cart');

Route::get('/keranjang/{userId}/{cartId}', function () {
    return Inertia::render('keranjang/detail/index');
});

Route::get('/keranjang/{userId}/{cartId}/checkout', function () {
    return Inertia::render('keranjang/checkout/index');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
