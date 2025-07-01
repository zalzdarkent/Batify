<?php

namespace App\Observers;

use App\Models\Categories;
use Illuminate\Support\Facades\Auth;
use Filament\Notifications\Notification;

class CategoryObserver
{
    /**
     * Store the recipients for notifications.
     */
    protected $receipients;
    
    /**
     * Initialize the observer with current user.
     */
    public function __construct()
    {
        $this->receipients = Auth::user();
    }
    
    public function created(Categories $categories): void
    {
        Notification::make()
            ->title('Category Created')
            ->body("Category '{$categories->name}' has been created successfully.")
            ->success()
            ->sendToDatabase($this->receipients);
    }

    /**
     * Handle the Categories "updated" event.
     */
    public function updated(Categories $categories): void
    {
        Notification::make()
            ->title('Category Updated')
            ->body("Category '{$categories->name}' has been updated successfully.")
            ->success()
            ->sendToDatabase($this->receipients);
    }

    /**
     * Handle the Categories "deleted" event.
     */
    public function deleted(Categories $categories): void
    {
        Notification::make()
            ->title('Category Deleted')
            ->body("Category '{$categories->name}' has been deleted successfully.")
            ->success()
            ->sendToDatabase($this->receipients);
    }

    /**
     * Handle the Categories "restored" event.
     */
    public function restored(Categories $categories): void
    {
        Notification::make()
            ->title('Category Restored')
            ->body("Category '{$categories->name}' has been restored successfully.")
            ->success()
            ->sendToDatabase($this->receipients);
    }

    /**
     * Handle the Categories "force deleted" event.
     */
    public function forceDeleted(Categories $categories): void
    {
        Notification::make()
            ->title('Category Force Deleted')
            ->body("Category '{$categories->name}' has been force deleted successfully.")
            ->success()
            ->sendToDatabase($this->receipients);
    }
}
