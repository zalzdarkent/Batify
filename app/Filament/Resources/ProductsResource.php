<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use App\Models\Products;
use Filament\Forms\Form;
use App\Models\Categories;
use Filament\Tables\Table;
use Illuminate\Support\Str;
use Filament\Resources\Resource;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Contracts\Support\Htmlable;
use App\Filament\Resources\ProductsResource\Pages;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\ProductsResource\RelationManagers;

class ProductsResource extends Resource
{
    protected static ?string $model = Products::class;

    protected static ?string $navigationIcon = 'heroicon-o-cube';

    protected static ?string $navigationGroup = 'Main';
    
    protected static ?int $navigationGroupSort = 0;

    protected static ?string $recordTitleAttribute = 'name';

    public static function getGlobalSearchResultTitle(Model $record): string | Htmlable
    {
        return $record->name;
    }

    public static function getGlobalSearchResultUrl(Model $record): string
    {
        return static::getUrl('index', ['tableSearch' => $record->name]);
    }

    public static function getGlobalSearchResultDetails(Model $record): array
    {
        return [
            'Category' => $record->category->name,
        ];
    }

    protected static ?string $navigationBadgeTooltip = 'Total Produk';

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Card::make()
                    ->schema([
                        Forms\Components\Section::make('Informasi Produk')
                            ->schema([
                                Forms\Components\Grid::make(2)
                                    ->schema([
                                        Forms\Components\TextInput::make('name')
                                            ->label('Nama Produk')
                                            ->required()
                                            ->maxLength(255)
                                            ->live(onBlur: true)
                                            ->afterStateUpdated(
                                                fn($state, Forms\Set $set) =>
                                                $set('slug', Str::slug($state))
                                            ),
                                        Forms\Components\TextInput::make('slug')
                                            ->label('Slug')
                                            ->required()
                                            ->maxLength(255)
                                            ->disabled()
                                            ->dehydrated(),
                                    ]),
                                Forms\Components\Grid::make(3)
                                    ->schema([
                                        Forms\Components\Select::make('id_category')
                                            ->label('Kategori')
                                            ->required()
                                            ->options(function () {
                                                $activeCategories = Categories::all()->pluck('name', 'id')->toArray();
                                                $trashedCategories = Categories::onlyTrashed()->get()->mapWithKeys(function ($category) {
                                                    return [$category->id => $category->name . ' (Dihapus)'];
                                                })->toArray();
                                                
                                                return $activeCategories + $trashedCategories;
                                            })
                                            ->searchable(),
                                        Forms\Components\TextInput::make('price')
                                            ->label('Harga')
                                            ->required()
                                            ->numeric()
                                            ->prefix('Rp')
                                            ->step(1000),
                                        Forms\Components\TextInput::make('qty')
                                            ->label('Stok')
                                            ->required()
                                            ->numeric()
                                            ->minValue(0),
                                    ]),
                                Forms\Components\Grid::make(1)
                                    ->schema([
                                        Forms\Components\FileUpload::make('images')
                                            ->label('Gambar Produk')
                                            ->required()
                                            ->multiple()
                                            ->maxFiles(10)
                                            ->acceptedFileTypes(['image/jpeg', 'image/jpg', 'image/png'])
                                            ->maxSize(2048) // 2MB in KB
                                            ->imageResizeMode('cover')
                                            ->imageCropAspectRatio('16:9')
                                            ->imageResizeTargetWidth('1920')
                                            ->imageResizeTargetHeight('1080')
                                            ->directory('product-images')
                                            ->visibility('public'),
                                        Forms\Components\Textarea::make('desc_short')
                                            ->label('Deskripsi Singkat')
                                            ->maxLength(500)
                                            ->rows(3),
                                    ]),
                            ])
                            ->collapsible(),

                        Forms\Components\Section::make('Detail Produk')
                            ->schema([
                                Forms\Components\Grid::make(1)
                                    ->schema([
                                        Forms\Components\RichEditor::make('detail_prod')
                                            ->label('Detail Produk')
                                            ->toolbarButtons([
                                                'attachFiles',
                                                'blockquote',
                                                'bold',
                                                'bulletList',
                                                'codeBlock',
                                                'h2',
                                                'h3',
                                                'italic',
                                                'link',
                                                'orderedList',
                                                'redo',
                                                'strike',
                                                'underline',
                                                'undo',
                                            ]),
                                        Forms\Components\RichEditor::make('bahan')
                                            ->label('Bahan')
                                            ->toolbarButtons([
                                                'bold',
                                                'bulletList',
                                                'italic',
                                                'orderedList',
                                                'redo',
                                                'strike',
                                                'underline',
                                                'undo',
                                            ]),
                                        Forms\Components\RichEditor::make('petunjuk_perawatan')
                                            ->label('Petunjuk Perawatan')
                                            ->toolbarButtons([
                                                'bold',
                                                'bulletList',
                                                'italic',
                                                'orderedList',
                                                'redo',
                                                'strike',
                                                'underline',
                                                'undo',
                                            ]),
                                    ]),
                            ])
                            ->collapsible(),
                    ])
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('Nama Produk')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\ImageColumn::make('images')
                    ->label('Gambar')
                    ->circular()
                    ->stacked()
                    ->limit(3)
                    ->limitedRemainingText(),
                Tables\Columns\TextColumn::make('slug')
                    ->label('Slug')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('category.name')
                    ->label('Kategori')
                    ->sortable()
                    ->searchable()
                    ->formatStateUsing(function ($state, $record) {
                        if ($record->category && $record->category->trashed()) {
                            return "{$state} (Dihapus)";
                        }
                        return $state ?? 'Tidak ada kategori';
                    })
                    ->color(fn ($record) => $record->category && $record->category->trashed() ? 'danger' : null),
                Tables\Columns\TextColumn::make('price')
                    ->label('Harga')
                    ->money('IDR')
                    ->sortable(),
                Tables\Columns\TextColumn::make('qty')
                    ->label('Stok')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('desc_short')
                    ->label('Deskripsi')
                    ->limit(50)
                    ->searchable()
                    ->toggleable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Dibuat')
                    ->dateTime()
                    ->since()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->label('Diperbarui')
                    ->dateTime()
                    ->since()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('id_category')
                    ->label('Kategori')
                    ->options(function () {
                        $activeCategories = Categories::all()->pluck('name', 'id')->toArray();
                        $trashedCategories = Categories::onlyTrashed()->get()->mapWithKeys(function ($category) {
                            return [$category->id => $category->name . ' (Dihapus)'];
                        })->toArray();
                        
                        return $activeCategories + $trashedCategories;
                    })
                    ->searchable(),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make()
                    ->successNotificationTitle('Produk berhasil diperbarui')
                    ->successNotification(
                        \Filament\Notifications\Notification::make()
                            ->success()
                            ->title('Produk Diperbarui!')
                            ->body('Data produk berhasil diperbarui. File gambar lama yang tidak digunakan telah dihapus otomatis.')
                    ),
                Tables\Actions\DeleteAction::make()
                    ->requiresConfirmation()
                    ->modalHeading('Hapus Produk')
                    ->modalDescription('Apakah Anda yakin ingin menghapus produk ini?')
                    ->modalSubmitActionLabel('Ya, Hapus')
                    ->modalCancelActionLabel('Batal'),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make()
                        ->requiresConfirmation()
                        ->modalHeading('Hapus Produk Terpilih')
                        ->modalDescription('Apakah Anda yakin ingin menghapus semua produk yang dipilih?')
                        ->modalSubmitActionLabel('Ya, Hapus Semua')
                        ->modalCancelActionLabel('Batal'),
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
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProducts::route('/create'),
            'edit' => Pages\EditProducts::route('/{record}/edit'),
        ];
    }
}
