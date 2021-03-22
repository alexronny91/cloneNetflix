$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


function mostrar(id){
    document.getElementById(id).style.display = 'flex'    
}

function fechar(id){
    document.getElementById(id).style.display = 'none'
}