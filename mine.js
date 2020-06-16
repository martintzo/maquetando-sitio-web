'use strict'

//slider
$(document).ready(function(){
    $('.slider').bxSlider({
        mode :'fade',
        captions: true,
        slidewith :300,
        pager: true
    
    
    });
//posts
var posts = [
    {
        title : 'prueba de titulo 1',
        date : moment().date()+moment().format(' MMMM YYYY'),
        content : ' Aenean bibendum diam eget congue accumsan. Vivamus pharetra augue et mi cursus, nec rutrum justo gravida. Vestibulum eget hendrerit sem. Nunc non odio enim. Nunc quis placerat tellus. Duis in cursus ligula. Quisque mauris libero, scelerisque vitae nisl at, tempus vehicula felis. Nullam ullamcorper sed turpis vitae aliquet. Curabitur venenatis blandit elit, ac sodales erat auctor quis. Suspendisse risus diam, lacinia ut molestie sed, placerat eget metus. Ut ullamcorper, felis volutpat facilisis laoreet, arcu mauris laoreet orci, sit amet maximus dolor turpis id tellus. Donec vestibulum diam eget metus finibus convallis.'
        
    },
    {
        title : 'prueba de titulo 2',
        date :  moment().date()+moment().format(' MMMM YYYY'),
        content :' Aenean bibendum diam eget congue accumsan. Vivamus pharetra augue et mi cursus, nec rutrum justo gravida. Vestibulum eget hendrerit sem. Nunc non odio enim. Nunc quis placerat tellus. Duis in cursus ligula. Quisque mauris libero, scelerisque vitae nisl at, tempus vehicula felis. Nullam ullamcorper sed turpis vitae aliquet. Curabitur venenatis blandit elit, ac sodales erat auctor quis. Suspendisse risus diam, lacinia ut molestie sed, placerat eget metus. Ut ullamcorper, felis volutpat facilisis laoreet, arcu mauris laoreet orci, sit amet maximus dolor turpis id tellus. Donec vestibulum diam eget metus finibus convallis.'
        
    },
    {
        title : 'prueba de titulo 3',
        date :  moment().date()+moment().format(' MMMM YYYY'),
        content : ' Aenean bibendum diam eget congue accumsan. Vivamus pharetra augue et mi cursus, nec rutrum justo gravida. Vestibulum eget hendrerit sem. Nunc non odio enim. Nunc quis placerat tellus. Duis in cursus ligula. Quisque mauris libero, scelerisque vitae nisl at, tempus vehicula felis. Nullam ullamcorper sed turpis vitae aliquet. Curabitur venenatis blandit elit, ac sodales erat auctor quis. Suspendisse risus diam, lacinia ut molestie sed, placerat eget metus. Ut ullamcorper, felis volutpat facilisis laoreet, arcu mauris laoreet orci, sit amet maximus dolor turpis id tellus. Donec vestibulum diam eget metus finibus convallis.'
        
    },
    {
        title : 'prueba de titulo 4',
        date :  moment().date()+moment().format(' MMMM YYYY'),
        content : ' Aenean bibendum diam eget congue accumsan. Vivamus pharetra augue et mi cursus, nec rutrum justo gravida. Vestibulum eget hendrerit sem. Nunc non odio enim. Nunc quis placerat tellus. Duis in cursus ligula. Quisque mauris libero, scelerisque vitae nisl at, tempus vehicula felis. Nullam ullamcorper sed turpis vitae aliquet. Curabitur venenatis blandit elit, ac sodales erat auctor quis. Suspendisse risus diam, lacinia ut molestie sed, placerat eget metus. Ut ullamcorper, felis volutpat facilisis laoreet, arcu mauris laoreet orci, sit amet maximus dolor turpis id tellus. Donec vestibulum diam eget metus finibus convallis.'
        
    },


];

posts.forEach((item, index) => {
    var post = `
    <article class="post" >
        <h3>${item.title}</h3>
        <span class="date" >${item.date}</span>

        <p>
            ${item.content}
        </p>
        <a href="#" class="button">Leer Mas</a>
    </article>
    
    `
    ;
    $('#posts').append(post);
});
//cambiador de tema

 var theme = $('#theme');
 $('#to-green').click(function(){
     theme.attr('href','css/green.css')

 });
 $('#to-blue').click(function(){
    theme.attr('href','css/blue.css')

});
$('#to-orange').click(function(){
    theme.attr('href','css/orange.css')

});
//scrol arriba de la web
$('.subir').click(function(e){
    e.preventDefoult();
    $('html , body').animate({
        scrollTop : 0
    }, 500);
    return false;

});
//capturar info
$('#login').submit(function(){
    console.log('captura el submit');
    var nombre_usuario = $('#form_name').val();
    localStorage.setItem = ('nombre_usuario',nombre_usuario);
});
var nombre_usuario = localStorage.getItem('nombre_usuario');
console.log(nombre_usuario);

/*var nombre_usuario = localStorage.getItem('nombre_usuario');
$('#about p').html('Bienvenido, '+nombre_usuario);*/
    
});
