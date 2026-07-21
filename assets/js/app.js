const modal=document.getElementById('assistant');document.querySelectorAll('.open-assistant').forEach(b=>b.addEventListener('click',()=>{modal.classList.add('open');modal.setAttribute('aria-hidden','false')}));document.querySelector('.close').addEventListener('click',()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true')});modal.addEventListener('click',e=>{if(e.target===modal){modal.classList.remove('open')}});document.getElementById('quoteForm').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.currentTarget);const msg=`Hola Strategy VMK, deseo solicitar una propuesta.

Nombre: ${d.get('nombre')}
Empresa: ${d.get('empresa')||'No indicada'}
Servicio: ${d.get('servicio')}
Ciudad: ${d.get('ciudad')}
Requerimiento: ${d.get('detalle')}`;window.open('https://wa.me/51997164811?text='+encodeURIComponent(msg),'_blank')});const menuBtn=document.querySelector('.menu-btn'),nav=document.querySelector('nav');menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
// Menú móvil de categorías de productos
document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".nav-products-toggle"),w=document.querySelector(".nav-products");if(t&&w){t.addEventListener("click",e=>{if(window.innerWidth<=900){e.preventDefault();w.classList.toggle("open")}})}});
