<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StripeController extends Controller
{
    public function index()
    {
        return view(view: 'index');
    }
    public function checkout()
    {
        \Stripe\Stripe::setApiKey(config(key: 'stripe.sk'));
        $session = \Stripe\Checkout\Session::create([
            'line_items' => [
                [
                    'price_data' => [
                        'currency' => 'gbp',
                        'product_data' => [
                            'name' => 'Send Me Money!!!'
                        ],
                        'unit_amount' => 500
                    ],
                    'quantity' => 1,
                ],
            ],
            'mode' => 'payment',
            'success_url' => route(name: 'success'),
            'cancel_url' => route(name: 'index'),

        ]);
        return redirect()->away($session->url);
    }
    public function success()
    {
        return redirect('http://localhost:5173/shop');
    }
}
