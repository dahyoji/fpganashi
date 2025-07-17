
$(function () {

    let tl = gsap.timeline();

    tl.from({}, {})
    tl.from('.main_story .title h2', { x: 200, opacity: 0 })
    tl.from('.main_story .title p', { x: 200, opacity: 0 })




    $('#full_wrap').fullpage({
        fixedElements: '#header , .side_lnk , .to_top, .footer',
        paddingTop: '80px',
        anchors: ['visual', 'foryou', 'story', 'content', 'banner', 'sns',
        ],
        css3: false,
        responsiveWidth: 768,

        afterLoad: function (o, d, dr) {
            if (d !== 1) {
                $('.to_top').addClass('on')
            }



            $('.side_lnk li').removeClass('on');
            $('.side_lnk li').eq(d - 1).addClass('on');

        },

        onLeave: function (o, d, dr) {
            if (d == 3) {
                tl.restart();
            } else {
                tl.pause();
            }
            if (d == 1) {
                $('.to_top').removeClass('on')
            } else {
                $('.to_top').addClass('on')
            }

        },


    });

    $('#header .menu_btn').on('click', function () {
        $(this).toggleClass('on');
        $('#header .side_lnk').toggleClass('on');
    })

    $('#header .side_lnk ul>li>a').on('click', function () {
        $('#header .menu_btn').removeClass('on');
        $('#header .side_lnk').removeClass('on');
    })
    $('#header .side_lnk').on('wheel', function (e) {
        e.stopPropagation();

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

        });

        const main_sns_slide = new Swiper('.main_sns_slide', {
            loop: true,
            slidesPerView: 1.5,
            spaceBetween: 30,
            breakpoints: {

                769: {
                    slidesPerView: 3.5,
                    spaceBetween: 30,
                },
                1025: {
                    slidesPerView: 3.5,
                    spaceBetween: 30,
                },
            },
        });

        // if (sw) {
        //     main_sns_slide.autoplay.start();
        //     $(this).addClass('on');
        // } else {
        //     main_sns_slide.autoplay.start();
        //     $(this).removeClass('on');
        // }
        // sw = !sw;
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

    $('.banner_movie').YTPlayer({
        videoURL: 'https://youtu.be/xehv68hHblw',
        containment: '.main_banner',
        showControls: false,
        autoPlay: true,
        playOnlyIfVisible: true,
    });


    // let sw = true;

    // $(function () {
    //     $('.to_top').on('click', function () {
    //         $('html, body').animate({ scrollTop: 0 })
    //     });

    //     $(window).on('scroll', function () {
    //         //스크롤 된 양을 구함.
    //         let sct = $(window).scrollTop();
    //         console.log(sct)

    //         if (sct > 400) {
    //             $('.to_top').addClass('on')
    //         } else {
    //             $('.to_top').removeClass('on')
    //         }
    //     });

    // });

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
