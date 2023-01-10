@extends('adminlte::page')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <section class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1>Gestión de productos</h1>
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                    <li class="breadcrumb-item"><a href="{{ route('home') }}">Inicio</a></li>
                                    <li class="breadcrumb-item active">Productos</li>
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
                        <h3 class="card-title">Registro de productos</h3>
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th style="width: 10px">#</th>
                                    <th>Nombre</th>
                                    <th>Categoría</th>
                                    <th>Precio Venta</th>
                                    <th>Precio Compra</th>
                                    <th>Stock</th>
                                    <th>Imagen</th>
                                    <th style="width: 40px">Acciones</th>
                                </tr>
                            </thead>
                            <tbody id="table">
                                @foreach ($products as $product)
                                    <tr>
                                        <td>{{ $product->id }}</td>
                                        <td>{{ $product->name }}</td>
                                        <td>{{ $product->category->name }}</td>
                                        <td>{{ $product->price }}</td>
                                        <td>{{ $product->cost }}</td>
                                        <td>{{ $product->stock }}</td>
                                        <td class="text-center">
                                            <img src="{{ $product->image }}" alt="{{ $product->name }}" width="50">
                                        </td>
                                        <td class="d-flex justify-content-lg-center">
                                            <a href="{{ route('products.edit', $product->id) }}"
                                                class="btn btn-warning mr-1">
                                                <i class="fas fa-edit"></i>
                                            </a>
                                            <a href="#" class="btn btn-danger" data-table="products"
                                                data-id={{ $product->id }}>
                                                X
                                            </a>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                    <div class="card-footer d-flex justify-content-end">
                        {{ $products->links() }}
                    </div>
                </div>
            </div>
            <div class="col-12-col-md-2">
                <button class="btn btn-app" data-toggle="modal" data-target="#modal-products">
                    <i class="fas fa-plus"></i> Agregar
                </button>
            </div>
        </div>
    </div>
    @include('admin.products.modal')
@endsection
@section('scripts')
    @include('admin.util')
@endsection
