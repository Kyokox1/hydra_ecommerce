<?php

namespace App\Http\Controllers;

use App\Sale;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class SaleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sales=auth()->user()->sales()->with('products')->get();
        return response()->json($sales);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            DB::beginTransaction();
            $venta=Sale::create([
                'num_sale'=>'B1929'.rand(1,100000),
                'date_sale'=>Carbon::now(),
                'intervalos_cuotas'=>Carbon::now(),
                'abono_inicial'=>0,
                'cant_cuotas'=>0
            ]);
            $products = json_decode(json_encode($request->products));
            foreach ($products as $product) {
               DB::table('product_sale')->insert([
                'quantity_products'=>$product->quantity,
                'product_id'=>$product->product_id,
                'sale_id'=>$venta->id,
                'total'=>$product->total
               ]);
            }
            DB::table('sale_user')->insert([
                'sale_id'=>$venta->id,
                'user_id'=>Auth::user()->id,
                'abono'=>0,
                'saldo_historico'=>0,
                'date_abono'=>Carbon::now()
            ]);
            DB::commit();
            return response()->json([
                'message' => 'Compra realizada con exito',
                'status' => 'success',
                'compra' => $venta
            ], 201);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json([
                'message' => 'Error al realizar la compra',
                'status' => 'error',
                'error' => $th->getMessage()
            ], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Sale  $sale
     * @return \Illuminate\Http\Response
     */
    public function show(Sale $sale)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Sale  $sale
     * @return \Illuminate\Http\Response
     */
    public function edit(Sale $sale)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Sale  $sale
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Sale $sale)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Sale  $sale
     * @return \Illuminate\Http\Response
     */
    public function destroy(Sale $sale)
    {
        //
    }
}

