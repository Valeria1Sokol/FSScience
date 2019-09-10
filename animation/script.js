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
