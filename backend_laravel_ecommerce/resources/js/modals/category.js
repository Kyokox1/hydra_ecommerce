const { default: Axios } = require("axios");

(function(){
    const btn=$('#edit-categories');
    const inpCategory=$('.name-category');
    const titleCategory=$('#title-categoria');
    const btnSubmit=$('#btn-submit')
    const category=btn.data('category');
    btn.on('click',function(){
        inpCategory.val(category.name)
        titleCategory.text('Editar Categoría')
    })
    btnSubmit.on('click',function(e){
        e.preventDefault();
        
        const url=`/categories/${category.id}`
        
    })
})()