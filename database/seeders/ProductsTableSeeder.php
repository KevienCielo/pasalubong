<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::create([
            'imgSrc' => 'assets/images/baguio ube jam.jpg',
            'name' => 'Baguio Ube Jam',
            'category' => 'Luzon',
            'price' => 550.00,
        ]);
        Product::create([
            'imgSrc' => 'assets/images/Batangas - Calabarzon2.jpg',
            'name' => 'Tapang Batangas',
            'category' => 'Luzon',
            'price' => 850.00,
        ]);
        Product::create([
            'imgSrc' => 'assets/images/San Mateo - Mungo Noodles Calabarzon2.jpg',
            'name' => 'Munggo Noodles',
            'category' => 'Luzon',
            'price' => 440.00,
        ]);
        Product::create([
            'imgSrc' => 'assets/images/Forest Honey - Agusan del Norte - Caraga2.jpg',
            'name' => 'Frozen Honey',
            'category' => 'Mindanao',
            'price' => 680.00,
        ]);
        Product::create([
            'imgSrc' => 'assets/images/Muscovado - Antique Region2.jpg',
            'name' => 'Muscovado',
            'category' => 'Visayas',
            'price' => 730.00,
        ]);
        Product::create([
            'imgSrc' => 'assets/images/special-moron-and-binagol - Tacloban2.jpg',
            'name' => 'Special Moron and Binagol',
            'category' => 'Visayas',
            'price' => 940.00,
        ]);
        Product::create([
            'imgSrc' => 'assets/images/Strawberry La Trinidad - benguet2.jpg',
            'name' => 'Strawberry Jam',
            'category' => 'Luzon',
            'price' => 480.00,
        ]);
        Product::create([
            'imgSrc' => 'assets/images/Bottled Sardines.jpg',
            'name' => 'Dipolog Bottled Sardines',
            'category' => 'Mindanao',
            'price' => 390.00,
        ]);
        Product::create([
            'imgSrc' => 'assets/images/Durian-Davao.jpg',
            'name' => 'Durian Candy',
            'category' => 'Mindanao',
            'price' => 240.00,
        ]);
        Product::create([
            'imgSrc' => 'assets/images/Piaya - Bacolod Negros Occ2.jpg',
            'name' => 'Bacolod Piaya',
            'category' => 'Visayas',
            'price' => 430.00,
        ]);
    }
}
