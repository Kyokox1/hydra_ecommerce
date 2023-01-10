<div id="modal-products" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="my-modal-title" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="title-categoria">Crear Producto</h5>
                <button class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form action="{{ route('products.store') }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <div class="card-body">
                        <div class="form-group">
                            <label for="name">Nombre(*)</label>
                            <input type="text" class="form-control name-category" name="name"
                                placeholder="Ingrese el nombre de la categoría" value="{{ old('name') }}">
                        </div>
                        <div class="form-group">
                            <label for="category_id">Categorias</label>
                            <select id="category_id" class="form-control" name="category_id">
                                <option value="">--Seleccione categoría</option>
                                @foreach ($categories as $category)
                                    <option value={{ $category->id }}
                                        {{ old('category_id') == $category->id ? 'selected' : null }}>{{ $category->name }}
                                    </option>
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="description">Descripción</label>
                            <input type="text" class="form-control" name="description"
                                placeholder="Ingrese el nombre de la categoría" value="{{ old('description') }}">
                        </div>
                        <div class="form-group">
                            <label for="price">Precio</label>
                            <input type="number" class="form-control" name="price"
                                placeholder="Ingrese el nombre de la categoría" value="{{ old('price') }}">
                        </div>
                        <div class="form-group">
                            <label for="cost">Costo</label>
                            <input type="number" class="form-control" name="cost"
                                placeholder="Ingrese el nombre de la categoría" value="{{ old('cost') }}">
                        </div>
                        <div class="form-group">
                            <label for="stock">Stock</label>
                            <input type="number" class="form-control" name="stock"
                                placeholder="Ingrese el nombre de la categoría" value="{{ old('stock') }}">
                        </div>
                        <div class="form-group">
                            <label for="image">Imagen</label>
                            <input type="file" class="form-control" name="image"
                                placeholder="Ingrese el nombre de la categoría" value="{{ old('image') }}">
                        </div>
                    </div>
                    <div class="modal-footer justify-content-between">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                        <button id="btn-submit" type="submit" class="btn btn-primary">Crear</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</div>
