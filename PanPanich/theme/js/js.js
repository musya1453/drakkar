(function ($) {

    $(window).bind('scroll', function (e) {
        var scrolled = $(window).scrollTop();
        console.log(scrolled);

        //var block1 = $('.block-item');
        var item1 = $('.item-1'),
            item2 = $('.item-2'),
            item3 = $('.item-3'),
            item4 = $('.item-4'),
            item5 = $('.item-5'),
            item6 = $('.item-6'),
            img1 = $('.img-1'),
            img2 = $('.img-2'),
            img3 = $('.img-3'),
            img4 = $('.img-4'),
            img5 = $('.img-5'),
            img6 = $('.img-6'),
            block5item1 = $('.block5 .item1'),
            block5item2 = $('.block5 .item2'),
            block5item3 = $('.block5 .item3'),
            block5item4 = $('.block5 .item4'),
            block5item5 = $('.block5 .item5'),
            block5item6 = $('.block5 .item6'),
            hblock2 = $('.block2 h2'),
            titleblock3 = $('.block-3 .title-bottom'),
            block3text = $('.block-3 .text'),
            block5slider=$('.block5 .slider'),
            slider = $('.block2 .slider');


        if (scrolled > 100) {
            item1.css('transform', 'scale(1)')

            setTimeout(function () {
                item2.css('transform', 'scale(1)')
            }, 150)
            setTimeout(function () {
                item3.css('transform', 'scale(1)')
            }, 300)
            setTimeout(function () {
                item4.css('transform', 'scale(1)')
            }, 450)
            setTimeout(function () {
                item5.css('transform', 'scale(1)')
            }, 600)
            setTimeout(function () {
                item6.css('transform', 'scale(1)')
            }, 750)
        }

        if (scrolled > 3200) {
            block5item1.css('transform', 'scale(1)')

            setTimeout(function () {
                block5item4.css('transform', 'scale(1)')
            }, 150)
            setTimeout(function () {
                block5item2.css('transform', 'scale(1)')
            }, 300)
            setTimeout(function () {
                block5item5.css('transform', 'scale(1)')
            }, 450)
            setTimeout(function () {
                block5item3.css('transform', 'scale(1)')
            }, 600)
            setTimeout(function () {
                block5item6.css('transform', 'scale(1)')
            }, 750)
        }

        if(scrolled > 3000){
            block5slider.css('left','0');
        }

        if (scrolled > 800) {
            hblock2.css('top', '0')
            slider.css('left', 0)
        }

        if (scrolled > 1500) {
            block3text.css('top', '0');

        }

        if (scrolled > 1700) {
            titleblock3.css('bottom', '0');

        }

        if (scrolled > 2000) {
            img1.css({
                transform:'scale(1)',
                transform:'rotate(360deg)',
                 opacity:'1'
            });


            setTimeout(function () {
                img2.css({
                    transform:'scale(1)',
                    transform:'rotate(360deg)',
                    opacity:'1'
                });
            }, 150)
            setTimeout(function () {
                img3.css({
                    transform:'scale(1)',
                    transform:'rotate(360deg)',
                    opacity:'1'
                });
            }, 300)
            setTimeout(function () {
                img4.css({
                    transform:'scale(1)',
                    transform:'rotate(360deg)',
                    opacity:'1'
                });
            }, 450)
            setTimeout(function () {
                img5.css({
                    transform:'scale(1)',
                    transform:'rotate(360deg)',
                    opacity:'1'
                });
            }, 600)
            setTimeout(function () {
                img6.css({
                    transform:'scale(1)',
                    transform:'rotate(360deg)',
                    opacity:'1'
                });
            }, 750)
        }
    });

    $(window).load(function () {
        $('.header .flexslider').flexslider({
            animation: "slide",
            prevText: "",
            nextText: ""
            //controlNav: true

        });
    });

    $(window).load(function () {
        $('.flexslider').flexslider({
            animation: "slide",
            controlNav: false,
            prevText: "",
            nextText: ""

        });
    });


})(jQuery);

