<div id="modal-users" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="my-modal-title"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="title-categoria">Crear categoría</h5>
                <button class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form action="{{ route('registers.store') }}" method="POST">
                    @csrf
                    <div class="card-body">
                        <div class="form-group">
                            <label for="name">Nombre(*)</label>
                            <input type="text" class="form-control name-category" name="name"
                                placeholder="Nombre" value="{{ old('name') }}">
                        </div>
                        <div class="form-group">
                            <label for="name">Email(*)</label>
                            <input type="text" class="form-control name-category" name="email"
                                placeholder="Email" value="{{ old('name') }}">
                        </div>
                        <div class="form-group">
                            <label for="name">Contraseña(*)</label>
                            <input type="text" class="form-control name-category" name="password"
                                placeholder="Contraseña" value="{{ old('name') }}">
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
