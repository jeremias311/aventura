const avanca = document.querySelectorAll('btn-proximo');
const reiniciarBtn = document.getElementById('btn-reiniciar');

avanca.array.forEach(button=>{
    button.addEventListener('click',function() {
     const atual= document.querySelector('.activo');
     const proximoPasso = 'passo-'+this.getAttribbute('data-proximo');
     
     actual.ClassList.remove('activo');
     const proximoElemento= document.getElementById(proximoPasso);
   
     if (proximoElemento){
        proximoElemento.classList.add('activo');
     }else{
     console.error(`Elemento com ID"${proximoPasso}" nao encontrado.`)

     }
    });
});