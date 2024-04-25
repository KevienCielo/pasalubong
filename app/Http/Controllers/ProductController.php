<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    //
    public function getProducts(Request $request)
    {
        // $perPage = $request->input('per_page', 10); // Number of products per page, default is 10
        // $products = Product::paginate($perPage);

        $products = Product::all();
        return response()->json($products);

        // return response()->json($products);
    }

    public function store(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'imgSrc' => 'required|string',
            'name' => 'nullable|string',
            'category' => 'required|string',
            'price' => 'required|numeric',
        ]);

        // Create a new product instance
        $product = Product::create($validatedData);

        // Return a success response with the created product
        return response()->json(['message' => 'Product created successfully', 'product' => $product], 201);
    }
}
