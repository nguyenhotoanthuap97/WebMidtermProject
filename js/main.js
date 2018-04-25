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

function processSelectCountries(id) {
    const country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
		,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
		,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
		,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
		,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
		,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
		,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
		,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
		,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
		,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
		,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
		,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
		,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
		,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)"
        ,"Yemen","Zambia","Zimbabwe"];
    
    let select = $(id);
    for (country of  country_list) {
        var opt = document.createElement('option');
        opt.value = country;
        opt.text = country;
        select.append(opt);
    }
}

function selectCountries() {
    processSelectCountries('#billing_country');
    processSelectCountries('#shipping_country');
    processSelectCountries('#calc_shipping_country');
}

selectCountries();  