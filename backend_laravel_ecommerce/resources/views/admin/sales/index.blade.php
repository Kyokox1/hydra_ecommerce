@extends('adminlte::page')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <section class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1>Gestión de ventas</h1>
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                    <!-- <li class="breadcrumb-item"><a href="{{ route('home') }}">Inicio</a></li> -->
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
                        <h3 class="card-title">Registro de ventas</h3>
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th style="width: 10px">#</th>
                                    <th>Cliente</th>
                                    <th>Num_Venta</th>
                                    <th>Fecha</th>
                                    <th style="width: 40px">Acciones</th>
                                </tr>
                            </thead>
                            <tbody id="table">
                                @foreach ($sales as $sale)
                                    <tr>
                                        <td>{{ $sale->id }}</td>
                                        <td>{{ $sale->users[0]->name }}</td>
                                        <td>{{ $sale->num_sale }}</td>
                                        <td>{{ $sale->date_sale }}</td>
                                        <td class="d-flex justify-content-lg-center">
                                            <a href="{{ route('sales.show', $sale->id) }}"
                                                class="btn btn-primary mr-1">
                                                <i class="fas fa-eye"></i>
                                            </a>
                                            <a href="#" class="btn btn-danger" data-table="sales"
                                                data-id={{ $sale->id }}>
                                                X
                                            </a>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                    <div class="card-footer d-flex justify-content-end">
                        {{ $sales->links() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('scripts')
    @include('admin.util')
@endsection
