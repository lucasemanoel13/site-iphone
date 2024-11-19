$(document).ready(function () {
    $("#banners ul").bxSlider({
        auto: true,
        // slide vai passar automaticamente
        speed: 1000,
        // velocidade do slide
        // mode: 'fade'
        // o slide agora passa em "fade"
        // pager: false

        // biblioteca para slide das imagens
    });

    $('#fotos #galeria').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function (element) {
                return element.find('img');
            }
        }

    });
});
// comando para linkar a biblioteca no html