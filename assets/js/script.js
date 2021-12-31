$(document).ready(function () {

    function heightHeader () {
        $(window).on('resize', function () {
            $('.header__blue').css('height', $('.header__blue figure svg').height());
        })
        $('.header__blue').css('height', $('.header__blue figure svg').height());
    }
    heightHeader();

    function mapa (){
        if($(window).width() > 1024) {
            $(document).on('scroll', function() {
                let scroll = $(window).scrollTop();
                $('.mapa').css({
                    '-webkit-transform' : 'translateY(-'+scroll+')',
                    '-moz-transform'    : 'translateY(-'+scroll+')',
                    '-ms-transform'     : 'translateY(-'+scroll+')',
                    '-o-transform'      : 'translateY(-'+scroll+')',
                    'transform'         : 'translateY(-'+scroll+')'
                })
            })
        }
        $('.mapa__figure path').on('click', function() {
            let municipio = $(this).data('name');
            $('.info__item').removeClass('show');
            $('.info__item[data-name="'+municipio+'"]').addClass('show');
            let positionY = $(this).position().top - $(this).parents().position().top;
            let positionX = $(this).offset().left - $(this).parents().position().left;
            console.log('Y:' + positionY, 'X:' + positionX, 'Largura: ' + $('.mapa__figure').width(), 'Altura: ' + $('.mapa__figure').height());
            $('.info__item.show').css({'top': positionY, 'left': positionX});
        });
    }
    mapa();

    function accordion () {
        $('.accordion').on('click', function () {
            $('.accordion').removeClass('accordion--open');
            $(this).addClass('accordion--open');
        });
    }

    accordion();
})