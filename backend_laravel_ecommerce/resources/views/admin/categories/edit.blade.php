@extends('adminlte::page')

@section('content')
    <div class="container-fluid">
        <form action="{{ route('categories.update',$category->id) }}" class="card card-outline card-primary mt-2" method="POST">
            @csrf
            @method('PUT')
            <div class="card-header">
                <h3 class="card-title">Actualizar Categoría</h3>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label for="name">Nombre(*)</label>
                    <input type="text" class="form-control name-category" name="name"
                        placeholder="Ingrese el nombre de la categoría" value="{{ old('name') ?? $category->name }}">
                </div>
            </div>
            <div class="card-footer d-flex justify-content-end">
                <button class="btn btn-primary">
                    Actualizar
                </button>
            </div>
        </form>
    </div>
@endsection
