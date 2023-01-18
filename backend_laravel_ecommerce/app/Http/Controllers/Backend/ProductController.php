<?php

namespace App\Http\Controllers\Backend;

use App\Category;
use App\Http\Controllers\Controller;
use App\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products=Product::with('category')->paginate(10);
        $categories=Category::select('id','name')->get();
        return view('admin.products.index',compact('products','categories'));
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
        $request->validate([
            'category_id'=>'numeric|integer|required',
            'name'=>'required',
            'price'=>'required|numeric',
            'cost'=>'required|numeric',
            'stock'=>'required|numeric',
        ]);
        $custom_name='';
        if ($request->file('image')) {
            $imagen = $request->file('image');
            $custom_name = 'img-' . Str::uuid()->toString() . '.' . $imagen->getClientOriginalExtension();
            $imagen->move(public_path() . '/productos', $custom_name);
        }
        $product=new Product();
        $product->name=$request->name;
        $product->category_id=$request->category_id;
        $product->description=$request->description;
        $product->price=$request->price;
        $product->code='CL00';
        $product->cost=$request->cost;
        $product->stock=$request->stock;
        $product->image='/productos/'.$custom_name;
        $product->save();
        return redirect()->back()->withSuccess('Se registro el producto correctamente');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $product=Product::findOrfail($id);
        $categories=Category::select('id','name')->get();
        return view('admin.products.edit',compact('product','categories'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'category_id'=>'numeric|integer|required',
            'name'=>'required',
            'price'=>'required|numeric',
            'cost'=>'required|numeric',
            'stock'=>'required|numeric',
        ]);
       
        $product=Product::findOrfail($id);
        $product->name=$request->name;
        $product->category_id=$request->category_id;
        $product->description=$request->description;
        $product->price=$request->price;
        $product->code='CL00';
        $product->cost=$request->cost;
        $product->stock=$request->stock;
        $custom_name='';
        if ($request->file('image')) {
            if (file_exists($product->image)) {
                unlink($product->image);
            }
            $imagen = $request->file('image');
            $custom_name = 'img-' . Str::uuid()->toString() . '.' . $imagen->getClientOriginalExtension();
            $imagen->move(public_path() . '/productos', $custom_name);
            $product->image='/productos/'.$custom_name;
        }
        
        $product->save();
        return redirect()->back()->withSuccess('Se actualizo el producto correctamente');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Product::findOrfail($id)->delete();
        return response()->json(['status'=>'success','message'=>'Se eliminó el registro']);
    }
}
