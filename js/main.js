//Product list
var products = [{
        name: "Dell Vostro 1",
        image: "./img/Dell1.jpg",
        price: 569,
        orginprice: 599,
        brand: "Dell",
        class: "Business"
    },
    {
        name: "Dell Vostro 2",
        image: "./img/Dell2.jpg",
        price: 599,
        orginprice: 609,
        brand: "Dell",
        class: "Business"
    },
    {
        name: "Dell Vostro 3",
        image: "./img/Dell3.jpg",
        price: 769,
        orginprice: 819,
        brand: "Dell",
        class: "Business"
    },
    {
        name: "Dell Vostro 4",
        image: "./img/Dell4.jpg",
        price: 669,
        orginprice: 699,
        brand: "Dell",
        class: "Business"
    },
    {
        name: "Dell Vostro 5",
        image: "./img/Dell5.jpg",
        price: 669,
        orginprice: 699,
        brand: "Dell",
        class: "Business"
    },
    {
        name: "Dell Inspiron 6",
        image: "./img/Dell6.jpg",
        price: 899,
        orginprice: 919,
        brand: "Dell",
        class: "Business"
    },
    {
        name: "Dell XPS 7",
        image: "./img/Dell7.jpg",
        price: 1099,
        orginprice: 1199,
        brand: "Dell",
        class: "Business"
    },
    {
        name: "Dell Workstation 8",
        image: "./img/Dell8.jpg",
        price: 1199,
        orginprice: 1269,
        brand: "Dell",
        class: "Workstation"
    },
    {
        name: "Dell Alienware 9",
        image: "./img/Dell9.jpg",
        price: 2069,
        orginprice: 2099,
        brand: "Dell",
        class: "Gaming"
    },
    {
        name: "Dell Alienware 10",
        image: "./img/Dell10.jpg",
        price: 1899,
        orginprice: 1929,
        brand: "Dell",
        class: "Gaming"
    },
    {
        name: "Acer V1",
        image: "./img/Acer1.jpg",
        price: 679,
        orginprice: 699,
        brand: "Acer",
        class: "Business"
    },
    {
        name: "Acer V2",
        image: "./img/Acer2.jpg",
        price: 679,
        orginprice: 699,
        brand: "Acer",
        class: "Business"
    },
    {
        name: "Acer V3",
        image: "./img/Acer3.jpg",
        price: 779,
        orginprice: 899,
        brand: "Acer",
        class: "Business"
    },
    {
        name: "Acer E4",
        image: "./img/Acer4.jpg",
        price: 579,
        orginprice: 599,
        brand: "Acer",
        class: "Business"
    },
    {
        name: "Acer E5",
        image: "./img/Acer5.jpg",
        price: 449,
        orginprice: 459,
        brand: "Acer",
        class: "Business"
    },
    {
        name: "Acer E6",
        image: "./img/Acer6.jpg",
        price: 399,
        orginprice: 459,
        brand: "Acer",
        class: "Business"
    },
    {
        name: "Acer Workstation 7",
        image: "./img/Acer7.jpg",
        price: 1799,
        orginprice: 1859,
        brand: "Acer",
        class: "Workstation"
    },
    {
        name: "Acer Predator 8",
        image: "./img/Acer8.jpg",
        price: 1999,
        orginprice: 2019,
        brand: "Acer",
        class: "Gaming"
    },
    {
        name: "Acer Predator 9",
        image: "./img/Acer9.jpg",
        price: 1799,
        orginprice: 1859,
        brand: "Acer",
        class: "Gaming"
    },
    {
        name: "Acer Predator 10",
        image: "./img/Acer10.jpg",
        price: 2099,
        orginprice: 2159,
        brand: "Acer",
        class: "Gaming"
    },
    {
        name: "Asus X1",
        image: "./img/Asus1.jpg",
        price: 459,
        orginprice: 469,
        brand: "Asus",
        class: "Business"
    },
    {
        name: "Asus X2",
        image: "./img/Asus2.jpg",
        price: 469,
        orginprice: 479,
        brand: "Asus",
        class: "Business"
    },
    {
        name: "Asus X3",
        image: "./img/Asus3.jpg",
        price: 559,
        orginprice: 569,
        brand: "Asus",
        class: "Business"
    },
    {
        name: "Asus Vivobook 4",
        image: "./img/Asus4.jpg",
        price: 759,
        orginprice: 769,
        brand: "Asus",
        class: "Business"
    },
    {
        name: "Asus Vivobook 5",
        image: "./img/Asus5.jpg",
        price: 769,
        orginprice: 779,
        brand: "Asus",
        class: "Business"
    },
    {
        name: "Asus Vivobook 6",
        image: "./img/Asus6.jpg",
        price: 789,
        orginprice: 799,
        brand: "Asus",
        class: "Business"
    },
    {
        name: "Asus ROG 7",
        image: "./img/Asus7.jpg",
        price: 1299,
        orginprice: 1359,
        brand: "Asus",
        class: "Gaming"
    },
    {
        name: "Asus ROG 8",
        image: "./img/Asus8.jpg",
        price: 1599,
        orginprice: 1659,
        brand: "Asus",
        class: "Gaming"
    },
    {
        name: "Asus ROG 9",
        image: "./img/Asus9.jpg",
        price: 1799,
        orginprice: 1859,
        brand: "Asus",
        class: "Gaming"
    },
    {
        name: "Asus ROG 10",
        image: "./img/Asus10.jpg",
        price: 2099,
        orginprice: 2159,
        brand: "Asus",
        class: "Gaming"
    },
    {
        name: "HP Pavilion 1",
        image: "./img/Hp1.jpg",
        price: 599,
        orginprice: 659,
        brand: "HP",
        class: "Business"
    },
    {
        name: "HP Pavilion 2",
        image: "./img/Hp2.jpg",
        price: 659,
        orginprice: 699,
        brand: "HP",
        class: "Business"
    },
    {
        name: "HP Pavilion 3",
        image: "./img/Hp3.jpg",
        price: 569,
        orginprice: 599,
        brand: "HP",
        class: "Business"
    },
    {
        name: "HP Pavilion 4",
        image: "./img/Hp4.jpg",
        price: 699,
        orginprice: 739,
        brand: "HP",
        class: "Business"
    },
    {
        name: "HP Pavilion 5",
        image: "./img/Hp5.jpg",
        price: 669,
        orginprice: 689,
        brand: "HP",
        class: "Business"
    },
    {
        name: "HP Envy 6",
        image: "./img/Hp6.jpg",
        price: 789,
        orginprice: 799,
        brand: "HP",
        class: "Business"
    },
    {
        name: "HP Envy 7",
        image: "./img/Hp7.jpg",
        price: 899,
        orginprice: 929,
        brand: "HP",
        class: "Business"
    },
    {
        name: "HP Envy 8",
        image: "./img/Hp8.jpg",
        price: 999,
        orginprice: 1069,
        brand: "HP",
        class: "Business"
    },
    {
        name: "HP Workstation 9",
        image: "./img/Hp9.jpg",
        price: 1899,
        orginprice: 1999,
        brand: "HP",
        class: "Workstation"
    },
    {
        name: "HP OMEN X10",
        image: "./img/Hp10.jpg",
        price: 2049,
        orginprice: 2199,
        brand: "HP",
        class: "Gaming"
    },
    {
        name: "MSI GT1",
        image: "./img/MSI1.jpg",
        price: 2049,
        orginprice: 2199,
        brand: "MSI",
        class: "Gaming"
    },
    {
        name: "MSI GT2",
        image: "./img/MSI2.jpg",
        price: 1949,
        orginprice: 1999,
        brand: "MSI",
        class: "Gaming"
    },
    {
        name: "MSI GX3",
        image: "./img/MSI3.jpg",
        price: 2149,
        orginprice: 2199,
        brand: "MSI",
        class: "Gaming"
    },
    {
        name: "MSI GX4",
        image: "./img/MSI4.jpg",
        price: 1899,
        orginprice: 1999,
        brand: "MSI",
        class: "Gaming"
    },
    {
        name: "MSI GE5",
        image: "./img/MSI5.jpg",
        price: 2149,
        orginprice: 2199,
        brand: "MSI",
        class: "Gaming"
    },
    {
        name: "MSI GE6",
        image: "./img/MSI6.jpg",
        price: 2249,
        orginprice: 2299,
        brand: "MSI",
        class: "Gaming"
    },
    {
        name: "MSI GE7",
        image: "./img/MSI7.jpg",
        price: 2299,
        orginprice: 2329,
        brand: "MSI",
        class: "Gaming"
    },
    {
        name: "MSI GL8",
        image: "./img/MSI8.jpg",
        price: 2349,
        orginprice: 2399,
        brand: "MSI",
        class: "Gaming"
    },
    {
        name: "MSI GF9",
        image: "./img/MSI9.jpg",
        price: 2049,
        orginprice: 2099,
        brand: "MSI",
        class: "Gaming"
    },
    {
        name: "MSI GV10",
        image: "./img/MSI10.jpg",
        price: 2259,
        orginprice: 2299,
        brand: "MSI",
        class: "Gaming"
    },
    {
        name: "Macbook Air 1",
        image: "./img/Mac1.jpg",
        price: 1249,
        orginprice: 1299,
        brand: "Apple",
        class: "Business"
    },
    {
        name: "Macbook Air 2",
        image: "./img/Mac2.jpg",
        price: 1399,
        orginprice: 1429,
        brand: "Apple",
        class: "Business"
    },
    {
        name: "Macbook Pro 3",
        image: "./img/Mac3.jpg",
        price: 1549,
        orginprice: 1599,
        brand: "Apple",
        class: "Business"
    },
    {
        name: "Macbook Pro 4",
        image: "./img/Mac4.jpg",
        price: 1599,
        orginprice: 1629,
        brand: "Apple",
        class: "Business"
    },
    {
        name: "Macbook Pro 5",
        image: "./img/Mac5.jpg",
        price: 1449,
        orginprice: 1499,
        brand: "Apple",
        class: "Business"
    },
]

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
    $('#search-input').keypress(function (k) {
        if (k.which === 13) {
            var val = $('#search-input').val();
            window.location.replace("./shop.html#search-result");
        }
    })

    //search btn press
    $('.click').bind('click', function (event) {
        var val = $('#search-input').val();
        window.location.replace("./shop.html#search-result");
    })

    //brand filter click
    $('.brand').bind('click', function (event) {
        var type = $(this).text();
        alert("Bạn lọc theo hãng " + type);
    })

    //class filter click
    $('.classify').bind('click', function (event) {
        var type = $(this).text();
        alert("Bạn lọc theo chủng loại " + type);
    })

    //Price slider
    if (document.getElementById("slider-range") != null) {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 3000,
            values: [100, 1500],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));
    }

    //Load products
    var nP = products.length;
    for (var i = 0; i < nP; i++) {
        var innerTxt = "";
        var link = "";
        if (i % 2 ===  0) {
            link = "./single-product.html";
        }
        else {
            link = "./second-product.html";
        }
        innerTxt = $(".product-list").html() + "<div class='col-md-3 col-sm-6'><div class='single-shop-product'><div class='product-upper'><img src='" + products[i].image + "' alt='" + products[i].name + "' title='" + products[i].name + "' class='product-img'/></div><h2><a href='" + link + "' class='product-link'>" + products[i].name + "</a></h2><div class='product-carousel-price'><del>$" + products[i].orginprice + ".00</del><ins>$" + products[i].price + ".00</ins></div><div class='product-option-shop'><a class='add_to_cart_button' data-quantity='1' data-product_sku='' data-product_id='70' rel='nofollow' href='./cart.html'>Add to cart</a></div></div></div>";
        $(".product-list").html(innerTxt);
    }
});

function otherAddress() {
    if ($(".input-checkbox").is(":checked"))
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
