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

function assistir(){
    document.getElementById('popup').style.display = 'block'
}

function fechar(){
    document.getElementById('popup').style.display = 'none'
}