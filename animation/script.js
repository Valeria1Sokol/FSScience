$(".hamburger").click(function () {
    $(this).toggleClass("is-active");
    if ($(".menu").css("display") == "none") {
        $(".menu").css({
            "display": "flex"
        });
        $("body").css({
            "overflow": "hidden"
        });
    } else {
        $(".menu").css({
            "display": "none"
        });
        $("body").css({
            "overflow": "auto"
        });

    }
});

$(".menu-item-science").click(function () {
    $(this).find("i").toggleClass("fa-caret-down").toggleClass("fa-caret-up");
    $(".menu-science-subitems").fadeToggle();
});


$(".menu-item-science-mobile").click(function (e) {
    e.preventDefault();
    $(this).find("i").toggleClass("fa-angle-down").toggleClass("fa-angle-up");
    $(".menu-science-subitems-mobile").fadeToggle();
});


$(".dropdown-btn").on("click", function () {
    var dropdown = $(".dropdown-content");
    if ($(".mobile").css("display") == "none") {
        dropdown.fadeToggle();
    } else {
        if (dropdown.css("display") == "none") {
            dropdown.css({
                "display": "block"
            });
            dropdown.animate({
                "right": "0"
            }, 500);
        } else {
            dropdown.animate({
                "right": "-350px"
            }, 500, function () {
                dropdown.css({
                    "display": "none"
                });
            });
        }
    }


});


//slider
$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        infinite: true,
        speed: 1500
    });
});
//slider  prevent scroll
window.blockMenuHeaderScroll = false;
$(window).on('touchstart', function (e) {
    if ($(e.target).closest('.slider2').length == 1) {
        blockMenuHeaderScroll = true;
    }
});
$(window).on('touchend', function () {
    blockMenuHeaderScroll = false;
});
$(window).on('touchmove', function (e) {
    if (blockMenuHeaderScroll) {
        e.preventDefault();
    }
});
//
//function round1() {
//
//    $('.sec1Circle2').css({
//        'transform': 'rotate(58deg)',
//        left: '-0.6vw',
//        top: '-0.6vw',
//    })
//}
//
//function round2() {
//
//    $('.sec1Circle2').css({
//        'left': '-0.3vw',
//        top: '-1vw',
//        transform: 'rotate(89deg)'
//    })
//}
//
//function round3() {
//
//    $('.sec1Circle2').css({
//        'transform': 'rotate(118deg)',
//        left: '0.3vw',
//        top: '-1.1vw',
//    })
//}
//
//function round4() {
//
//    $('.sec1Circle2').css({
//        'transform': 'rotate(147deg)',
//        left: '1vw',
//        top: '-0.8vw',
//    })
//}
//
//function round5() {
//
//    $('.sec1Circle2').css({
//        'transform': 'rotate(178deg)',
//        left: '1.3vw',
//        top: '-0.5vw'
//    })
//}
//
//function round6() {
//
//    $('.sec1Circle2').css({
//        'transform': 'rotate(207deg)',
//        left: '1.3vw',
//        top: '0.2vw',
//    })
//}
//
//function round7() {
//
//    $('.sec1Circle2').css({
//        'transform': 'rotate(237deg)',
//        left: '1.1vw',
//        top: '0.7vw',
//    })
//}
//
//function round8() {
//
//    $('.sec1Circle2').css({
//        'transform': 'rotate(268deg)',
//        left: '0.7vw',
//        top: '1vw',
//    })
//}
//
//function round9() {
//
//    $('.sec1Circle2').css({
//        'transform': 'rotate(298deg)',
//        left: '0.2vw',
//        top: '1.2vw',
//    })
//}
//
//function round10() {
//
//    $('.sec1Circle2').css({
//        'transform': 'rotate(359deg)',
//        left: '-0.7vw',
//        top: '0.5vw',
//    })
//}
//
//function www()
//{
//    setTimeout(round1, 1000);
//    setTimeout(round2, 3000);
//    setTimeout(round3, 5000);
//    setTimeout(round4, 7000);
//    setTimeout(round5, 9000);
//    setTimeout(round6, 11000);
//    setTimeout(round7, 13000);
//    setTimeout(round8, 15000);
//    setTimeout(round9, 17000);
//    setTimeout(round10, 19000); 
//}


