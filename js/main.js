jQuery(document).ready(function ($) {

    // jQuery sticky Menu

    $(".mainmenu-area").sticky({
        topSpacing: 0
    });


    $('.product-carousel').owlCarousel({
        loop: true,
        nav: true,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        }
    });

    $('.related-products-carousel').owlCarousel({
        loop: true,
        nav: true,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });

    $('.brand-list').owlCarousel({
        loop: true,
        nav: true,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    });


    // Bootstrap Mobile Menu fix
    $(".navbar-nav li a").click(function () {
        $(".navbar-collapse").removeClass('in');
    });

    // jQuery Scroll effect
    $('.navbar-nav li a, .scroll-to-up').bind('click', function (event) {
        var $anchor = $(this);
        var headerH = $('.header-area').outerHeight();
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    });

    // Bootstrap ScrollPSY
    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 95
    })

    //search type choosing
    $('.content-drop').bind('click', function (event) {
        var selected = $(this).text();
        $('.dropdown-text').text(selected);
        $('#search-input').attr('placeholder', "Tên " + selected + "...");
    }); 

    //hide other address
    $(".shipping_address").hide(); 

    //search Enter
    $('#search-input').keypress(function(k) {
        if (k.which === 13) {
            var val = $('#search-input').val();
            window.location.replace("./shop.html#search-result");
        }
    })

    //search btn press
    $('.click').bind('click', function(event) {
        var val = $('#search-input').val();
        window.location.replace("./shop.html#search-result");
    })

    //brand filter click
    $('.brand').bind('click', function(event) {
        var type = $(this).text();
        alert("Bạn lọc theo hãng " + type);
    })

    //class filter click
    $('.classify').bind('click', function(event) {
        var type = $(this).text();
        alert("Bạn lọc theo chủng loại " + type);
    })

    //Price slider
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 2000,
        values: [100, 1500],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));
});

function otherAddress()
{
    if($(".input-checkbox").is(":checked"))
        $(".shipping_address").show();
    else
        $(".shipping_address").hide();        
} 