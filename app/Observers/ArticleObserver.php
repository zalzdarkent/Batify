<?php

namespace App\Observers;

use App\Models\Articles;
use Illuminate\Support\Facades\Auth;
use Filament\Notifications\Notification;

class ArticleObserver
{
    /**
     * Handle the Articles "created" event.
     */
    protected $receipients;

    public function __construct()
    {
        $this->receipients = Auth::user();
    }

    public function created(Articles $articles): void
    {
        Notification::make()
            ->title('Article Created')
            ->body("Article '{$articles->title}' has been created successfully.")
            ->success()
            ->sendToDatabase($this->receipients);
    }

    /**
     * Handle the Articles "updated" event.
     */
    public function updated(Articles $articles): void
    {
        Notification::make()
            ->title('Article Updated')
            ->body("Article '{$articles->title}' has been updated successfully.")
            ->success()
            ->sendToDatabase($this->receipients);
    }

    /**
     * Handle the Articles "deleted" event.
     */
    public function deleted(Articles $articles): void
    {
        Notification::make()
            ->title('Article Deleted')
            ->body("Article '{$articles->title}' has been deleted successfully.")
            ->success()
            ->sendToDatabase($this->receipients);
    }

    /**
     * Handle the Articles "restored" event.
     */
    public function restored(Articles $articles): void
    {
        Notification::make()
            ->title('Article Restored')
            ->body("Article '{$articles->title}' has been restored successfully.")
            ->success()
            ->sendToDatabase($this->receipients);
    }

    /**
     * Handle the Articles "force deleted" event.
     */
    public function forceDeleted(Articles $articles): void
    {
        Notification::make()
            ->title('Article Force Deleted')
            ->body("Article '{$articles->title}' has been force deleted successfully.")
            ->success()
            ->sendToDatabase($this->receipients);
    }
}
