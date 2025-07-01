<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use Filament\Forms\Form;
use App\Models\Categories;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\CategoriesResource\Pages;
use App\Filament\Resources\CategoriesResource\RelationManagers;

class CategoriesResource extends Resource
{
    protected static ?string $model = Categories::class;

    protected static ?string $navigationIcon = 'heroicon-o-tag';

    protected static ?string $navigationGroup = 'Main';

    protected static ?string $navigationBadgeTooltip = 'Total Kategori';

    protected static ?string $recordTitleAttribute = 'name';

    public static function getGlobalSearchResultTitle(Model $record): string | Htmlable
    {
        return $record->name;
    }

    public static function getGlobalSearchResultUrl(Model $record): string
    {
        return static::getUrl('index', ['tableSearch' => $record->name]);
    }

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::whereNull('deleted_at')->count();
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->required()
                    ->maxLength(255),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->modifyQueryUsing(fn(Builder $query) => $query->withTrashed()->withCount('products'))
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('Nama Kategori')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('products_count')
                    ->label('Jumlah Produk')
                    ->sortable()
                    ->badge()
                    ->color('success')
                    ->formatStateUsing(fn($state) => $state . ' produk'),
                Tables\Columns\TextColumn::make('deleted_at')
                    ->label('Status')
                    ->formatStateUsing(fn($state) => $state ? 'Dihapus' : 'Aktif')
                    ->badge()
                    ->color(fn($state) => $state ? 'danger' : 'success'),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Dibuat')
                    ->since()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->label('Diperbarui')
                    ->since()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\TrashedFilter::make()
                    ->label('Status')
                    ->placeholder('Semua')
                    ->falseLabel('Hanya yang Dihapus')
                    ->trueLabel('Hanya yang Aktif'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make()
                    ->requiresConfirmation()
                    ->modalHeading('Hapus Kategori')
                    ->modalDescription(function ($record) {
                        $productCount = $record->products()->count();
                        if ($productCount > 0) {
                            return "Kategori ini memiliki {$productCount} produk. Kategori akan di-soft delete (disembunyikan) dan dapat dipulihkan kapan saja. Produk-produk tidak akan terhapus.";
                        }
                        return 'Apakah Anda yakin ingin menghapus kategori ini?';
                    })
                    ->modalSubmitActionLabel('Ya, Hapus')
                    ->modalCancelActionLabel('Batal')
                    ->action(function ($record) {
                        $record->delete(); // Soft delete
                        \Filament\Notifications\Notification::make()
                            ->success()
                            ->title('Kategori Dihapus')
                            ->body('Kategori berhasil di-soft delete. Data dapat dipulihkan kapan saja.')
                            ->send();
                    }),
                Tables\Actions\RestoreAction::make()
                    ->successNotification(
                        \Filament\Notifications\Notification::make()
                            ->success()
                            ->title('Kategori Dipulihkan')
                            ->body('Kategori berhasil dipulihkan dan aktif kembali.')
                    ),
                Tables\Actions\ForceDeleteAction::make()
                    ->requiresConfirmation()
                    ->modalHeading('Hapus Permanen')
                    ->modalDescription('PERINGATAN: Tindakan ini akan menghapus kategori secara permanen dan tidak dapat dibatalkan!')
                    ->modalSubmitActionLabel('Ya, Hapus Permanen')
                    ->visible(fn($record) => $record->trashed()),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make()
                        ->requiresConfirmation()
                        ->modalHeading('Hapus Kategori Terpilih')
                        ->modalDescription('Kategori yang dipilih akan di-soft delete dan dapat dipulihkan kapan saja. Produk-produk yang terkait tidak akan terhapus.')
                        ->modalSubmitActionLabel('Ya, Hapus Semua')
                        ->modalCancelActionLabel('Batal')
                        ->action(function ($records) {
                            foreach ($records as $record) {
                                $record->delete(); // Soft delete
                            }
                            \Filament\Notifications\Notification::make()
                                ->success()
                                ->title('Kategori Dihapus')
                                ->body(count($records) . ' kategori berhasil di-soft delete.')
                                ->send();
                        }),
                    Tables\Actions\RestoreBulkAction::make()
                        ->successNotification(
                            \Filament\Notifications\Notification::make()
                                ->success()
                                ->title('Kategori Dipulihkan')
                                ->body('Kategori yang dipilih berhasil dipulihkan.')
                        ),
                    Tables\Actions\ForceDeleteBulkAction::make()
                        ->requiresConfirmation()
                        ->modalHeading('Hapus Permanen')
                        ->modalDescription('PERINGATAN: Tindakan ini akan menghapus kategori secara permanen!')
                        ->modalSubmitActionLabel('Ya, Hapus Permanen'),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCategories::route('/'),
            'create' => Pages\CreateCategories::route('/create'),
            'edit' => Pages\EditCategories::route('/{record}/edit'),
        ];
    }
}
