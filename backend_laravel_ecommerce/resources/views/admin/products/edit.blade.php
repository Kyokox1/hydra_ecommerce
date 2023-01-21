@extends('adminlte::page')

@section('content')
    <div class="container-fluid">
        <form action="{{ route('products.update',$product->id) }}" class="card card-outline card-primary mt-2" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PUT')
            <div class="card-header">
                <h3 class="card-title">Actualizar Producto</h3>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label for="name">Nombre(*)</label>
                    <input type="text" class="form-control name-category" name="name"
                        placeholder="Ingrese el nombre de la categoría" value="{{ old('name') ?? $product->name}}">
                </div>
                <div class="form-group">
                    <label for="category_id">Categorias</label>
                    <select id="category_id" class="form-control" name="category_id">
                        <option value="">--Seleccione categoría</option>
                        @foreach ($categories as $category)
                            <option value={{ $category->id }}
                                {{ old('category_id') == $category->id ? 'selected' : ($category->id == $product->category_id?'selected':null) }}>{{ $category->name }}
                            </option>
                        @endforeach
                    </select>
                </div>
                <div class="form-group">
                    <label for="description">Descripción</label>
                    <input type="text" class="form-control" name="description"
                        placeholder="Ingrese el nombre de la categoría" value="{{ old('description')??$product->description }}">
                </div>
                <div class="form-group">
                    <label for="price">Precio</label>
                    <input type="number" class="form-control" name="price"
                        placeholder="Ingrese el nombre de la categoría" value="{{ old('price') ?? $product->price }}">
                </div>
                <div class="form-group">
                    <label for="cost">Costo</label>
                    <input type="number" class="form-control" name="cost"
                        placeholder="Ingrese el nombre de la categoría" value="{{ old('cost') ?? $product->cost }}">
                </div>
                <div class="form-group">
                    <label for="stock">Stock</label>
                    <input type="number" class="form-control" name="stock"
                        placeholder="Ingrese el nombre de la categoría" value="{{ old('stock')??$product->stock }}">
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-9">
                            <div class="form-group">
                                <label for="image">Imagen</label>
                                <input type="file" class="form-control" name="image"
                                    placeholder="Ingrese el nombre de la categoría" value="{{ old('image') }}">
                            </div>
                        </div>
                        <div class="col-3">
                            <img src="{{ $product->image }}" alt="{{ $product->name }}" width="100">
                        </div>

                    </div>
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
