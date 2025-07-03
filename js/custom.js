
$(function () {

    let tl = gsap.timeline();

    tl.from({}, {})
    tl.from('#main_visual .slg h2', { y: 140, opacity: 0 })
    tl.from('#main_visual .slg p', { y: 140, opacity: 0 })
    tl.from('#main_visual .slg .lnk', { y: 140, opacity: 0 })

    $('#full_wrap').fullpage({
        fixedElements: '#header , .side_lnk , .to_top',
        paddingTop: '80px',
        anchors: ['visual', 'foryou', 'story', 'banner', 'promotion', 'story', 'event', 'customer'
        ],
        css3: false,

        afterLoad: function (o, d, dr) {
            if (d !== 1) {
                $('.to_top').addClass('on')
            }

            $('.side_lnk li').removeClass('on');
            $('.side_lnk li').eq(d - 1).addClass('on');

        },

        onLeave: function (o, d, dr) {
            if (d == 1) {
                tl.restart();
            }
            if (d == 1) {
                $('.to_top').addClass('on')
            } else {
                $('.to_top').removeClass('on')
            }
            if (d == 2 || d == 4 || d == 6 || d == 7 || d == 8) {
                $('#header').addClass('on')
            } else {
                $('#header').removeClass('on')
            }
        },
    });


    $(function () {
        const main_visual_slide = new Swiper('.main_visual_slide', {
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
        });

        const MIS = new Swiper('.main_story_slide', {
            loop: true,
            effect: 'fade',
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },

            navigation: {
                nextEl: '.main_story .next',
                prevEl: '.main_story .prev',
            },
        });
    });


    $(function () {
        $('.main_content .tab_menu button').on('click', function () {
            let idx = $(this).index(); // 클릭한 것의 번호를 가져와서 저장함
            console.log(idx);

            $('.main_content .tab_menu button').removeClass('on');
            $(this).addClass('on');

            $('.main_content .tab_content .con').removeClass('on');
            $('.main_content .tab_content .con').eq(idx).addClass('on');
        });
    });

    $(function () {
        $('.to_top').on('click', function () {
            $('html, body').animate({ scrollTop: 0 })
        });

        $(window).on('scroll', function () {
            //스크롤 된 양을 구함.
            let sct = $(window).scrollTop();
            console.log(sct)

            if (sct > 400) {
                $('.to_top').addClass('on')
            } else {
                $('.to_top').removeClass('on')
            }
        });

    });

    $(function () {

        $('.mbtn').on('click', function () {
            $('.gnb').toggleClass('on')
        });

        $('.gnb>ul>li>a').on('click', function (e) {
            if ($('.gnb').hasClass('on') && $(this).next().is('ul')) {
                e.preventDefault();
                $('.gnb>ul>li ul').stop().slideUp();
                $(this).next().stop().slideToggle();
            }
        });

        $(window).on('resize', function () {
            let ww = $(window).width();
            if (ww > 768) {
                $('.gnb').removeClass('on');
                $('.gnb>ul>li ul').removeAttr('style');
            }
        })
    })
});
