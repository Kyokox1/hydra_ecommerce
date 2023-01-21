@extends('adminlte::page')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <section class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1>Gestión de categorías</h1>
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                    <li class="breadcrumb-item"><a href="{{ route('home') }}">Inicio</a></li>
                                    <li class="breadcrumb-item active">Categorías</li>
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
                        <h3 class="card-title">Registro de categorías</h3>
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th style="width: 10px">#</th>
                                    <th>Nombre</th>
                                    <th style="width: 40px">Acciones</th>
                                </tr>
                            </thead>
                            <tbody id="table">
                                @foreach ($categories as $category)
                                    <tr>
                                        <td>{{ $category->id }}</td>
                                        <td>{{ $category->name }}</td>
                                        <td class="d-flex justify-content-lg-center">
                                            <a href="{{ route('categories.edit', $category->id) }}"
                                                class="btn btn-warning mr-1">
                                                <i class="fas fa-edit"></i>
                                            </a>
                                            <a href="#" class="btn btn-danger" data-table="categories"
                                                data-id={{ $category->id }}>
                                                X
                                            </a>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                    <div class="card-footer d-flex justify-content-end">
                        {{ $categories->links() }}
                    </div>
                </div>
            </div>
            <div class="col-12-col-md-2">
                <button class="btn btn-app" data-toggle="modal" data-target="#modal-categories">
                    <i class="fas fa-plus"></i> Agregar
                </button>
            </div>
        </div>
    </div>
    @include('admin.categories.modal')
@endsection
@section('scripts')
    @include('admin.util')
@endsection
