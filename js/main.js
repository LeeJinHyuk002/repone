$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    })

    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');

        $('.main_visual .slide_num span').text(c ? (c + 1) : 1);
        $('.main_visual .slide_num strong').text(s.slideCount);

        console.log(s.slideCount)

        $('.main_visual .menu li').eq(0).addClass('on');
        $('.main_visual .menu li').eq(c).addClass('on')
            .siblings().removeClass('on');
    });

    $('.main_slide').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        pauseOnHover: false,
        fade: true,
        arrows: false,
    });


    $('.portfolio_slide').slick({
        centerMode: true,
        variableWidth: true,
        dots: true,
    });


    $('.portfolio_slide').on('init afterChange', function (e, s, c) {
        $('.main_portfolio .itm').eq(c).addClass('on').siblings().removeClass('on')
    })


    $('.main_portfolio .tab_arrows .left').on('click', function () {
        $('.portfolio_slide').slick('slickPrev');
    });

    $('.main_portfolio .tab_arrows .right').on('click', function () {
        $('.portfolio_slide').slick('slickNext');
    });


    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    });

    $('.main_visual .menu li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index(); // 0,1,2
        $('.main_slide').slick('slickGoTo', idx);
    });



    $('.product_slide').slick({
        slidesToShow: 3,
        asNavFor: ".pic_slide",
        focusOnSelect: true,
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.product_slide2').slick({
        slidesToShow: 3,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.main_big_product .arrows .left').on('click', function () {
        $('.product_slide2').slick('slickPrev');
    });
    $('.main_big_product .arrows .right').on('click', function () {
        $('.product_slide2').slick('slickNext');
    });

    $('.pic_slide').slick({
        vertical: true,
        arrows: false,
        asNavFor: ".product_slide",
    });


    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600)
    });


    $(window).on('scroll', function () {
        //스크롤량을 구함.
        let sct = $(window).scrollTop();
        // console.log(sct);
        //sct > 1000 ? $('.to_top').fadeIn(1) : $('.to_top').fadeOut(0.1);

        sct > 1000 ? $('.to_top').addClass('on') : $('.to_top').removeClass('on');


    })
    $('.scr').on('click', function (e) {
        e.preventDefault();
        const st = $(this.hash).offset().top;
        console.log(st);
        $('html, body').animate({ scrollTop: st }, 600)
    });

    $('.history_menu li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.history_content li').eq(idx).addClass('on').siblings().removeClass('on');
    })

    $('#fl').on('change', function () {


        const lnk = $(this).val();
        console.log(lnk, '바뀌네')
        //vak() 있으때만
        //if (lnk) {
        // window.open(lnk);
        //}

        lnk && window.open(lnk);
    })

    $('.family_link2 span').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
    })

})