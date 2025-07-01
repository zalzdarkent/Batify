<?php

namespace App\Observers;

use App\Models\Products;
use Illuminate\Support\Facades\Auth;
use Filament\Notifications\Notification;

class ProductObserver
{
    /**
     * Handle the Products "created" event.
     */
    protected $receipients;

    public function __construct()
    {
        $this->receipients = Auth::user();
    }

    public function created(Products $products): void
    {
        Notification::make()
            ->title('Product Created')
            ->body("Product '{$products->name}' has been created successfully.")
            ->success()
            ->sendToDatabase($this->receipients);
    }

    /**
     * Handle the Products "updated" event.
     */
    public function updated(Products $products): void
    {
        Notification::make()
            ->title('Product Updated')
            ->body("Product '{$products->name}' has been updated successfully.")
            ->success()
            ->sendToDatabase($this->receipients);
    }

    /**
     * Handle the Products "deleted" event.
     */
    public function deleted(Products $products): void
    {
        Notification::make()
            ->title('Product Deleted')
            ->body("Product '{$products->name}' has been deleted successfully.")
            ->success()
            ->sendToDatabase($this->receipients);
    }

    /**
     * Handle the Products "restored" event.
     */
    public function restored(Products $products): void
    {
        Notification::make()
            ->title('Product Restored')
            ->body("Product '{$products->name}' has been restored successfully.")
            ->success()
            ->sendToDatabase($this->receipients);
    }

    /**
     * Handle the Products "force deleted" event.
     */
    public function forceDeleted(Products $products): void
    {
        Notification::make()
            ->title('Product Force Deleted')
            ->body("Product '{$products->name}' has been force deleted successfully.")
            ->success()
            ->sendToDatabase($this->receipients);
    }
}
