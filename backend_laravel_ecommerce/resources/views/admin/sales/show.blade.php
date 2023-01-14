@extends('adminlte::page')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <section class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1 class="text-uppercase">Venta {{ $sale->num_sale }} - {{ $sale->users[0]->name }}</h1>
                                <p class="text-primary">{{ $sale->date_sale }}</p>
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                    <li class="breadcrumb-item"><a href="{{ route('home') }}">Inicio</a></li>
                                    <li class="breadcrumb-item active">Ventas</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-md-10">
                <div class="card card-outline card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Productos registrados</h3>
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Imagen</th>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody id="table">
                                @foreach ($sale->products as $product)
                                    <tr>
                                        <td class="text-center"><img src="{{ $product->image }}" alt="{{ $product->name }}" width="50"></td>
                                        <td>{{ $product->name }}</td>
                                        <td>{{ $product->pivot->quantity_products }}</td>
                                        <td>{{ $product->pivot->total }}</td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <div class="col-12-col-md-2">
            </div>
        </div>
    </div>

@endsection
