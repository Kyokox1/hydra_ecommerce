<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script>
    const table = document.getElementById('table');
    window.CSRF_TOKEN = '{{ csrf_token() }}';
    table.addEventListener('click', async (e) => {
        if (e.target.classList.contains('btn-danger')) {
            e.preventDefault();
            const id = e.target.dataset.id;
            const table = e.target.dataset.table;
            const sw = await Swal.fire({
                title: 'Esta seguro de eliminar el registro?',
                text: "Una vez eliminado no puede recuperarlo!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si,Eliminar!',
                cancelButtonText: 'Cancelar'
            })
            if (sw.isConfirmed) {
                const res = await fetch(`/${table}/${id}`, {
                    headers: {
                        'X-CSRF-TOKEN': window.CSRF_TOKEN
                    },
                    method: "DELETE",
                })
                const {
                    status,
                    message
                } = await res.json();
                if (status == 'success') {
                    Swal.fire(
                        'Eliminado',
                        message,
                        status
                    )
                    e.target.parentElement.parentElement.remove();
                }
            }
        }
    })
</script>
