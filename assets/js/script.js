$(document).ready(function () {

    function heightHeader () {
        $(window).on('resize', function () {
            $('.header__blue').css('height', $('.header__blue figure svg').height());
        })
        $('.header__blue').css('height', $('.header__blue figure svg').height());
    }
    heightHeader();

    function headerMenu () {
        $('.header__icon').on('click', function () {
            $('.header__mobile').toggleClass('header__mobile--open');
        })
    }
    headerMenu();
    
    function mapa (){
        $('.mapa__figure path').on('click', function() {
            let municipio = $(this).data('name');
            $('.info__item').removeClass('show');
            $('.info__item[data-name="'+municipio+'"]').addClass('show');
            if($(window).width() > 1024 ) {
                let positionY = $(this).position().top - $(this).parents().position().top;
                let positionX = $(this).offset().left - $(this).parents().position().left;
                $('.info__item.show').css({'top': positionY, 'left': positionX});
            }
        });
    }
    mapa();

    function accordion () {
        $('.informacoes__select select').on('change', function() {
            let bairro = $('.informacoes__select select option:selected').val();
            let itemBairro = $('.accordion').data('bairro');
            console.log('Bairro: '+bairro+' Item: '+itemBairro);

            if(bairro == 'Todos') {
                $('.accordion').css('display', 'flex');
            }else if(bairro == itemBairro) {
                console.log('Bairro: '+bairro+' Item: '+itemBairro);
                $('.accordion').hide();
                $('.accordion[data-bairro="'+bairro+'"]').css('display', 'flex');
            }
        })

        $('.accordion').on('click', function () {
            $('.accordion').removeClass('accordion--open');
            $(this).addClass('accordion--open');
            let porcentagem = $(this).find('.single-chart span').text().replace('%', '');
            console.log(porcentagem);
            $(this).find('.single-chart .circle').attr('stroke-dasharray', porcentagem+', 100')
        });
    }

    accordion();

    function filtro () {
        $('.selecione__filtro span').on('click', function () {
            let obra = $('.selecione__obra select option:selected').val()
            let municipio = $('.selecione__municipio select option:selected').val().replaceAll(' ', '-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

            window.location.href =  '/municipios/'+municipio+'/'+obra+'.html';
            console.log('/municipios/'+municipio+'/'+obra+'.html');
        })
    }

    filtro();
})