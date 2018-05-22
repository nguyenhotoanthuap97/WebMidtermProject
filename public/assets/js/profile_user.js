const provinces = ['An Giang',
'Bà Rịa - Vũng Tàu',
'Bắc Giang',
'Bắc Kạn',
'Bạc Liêu',
'Bắc Ninh',
'Bến Tre',
'Bình Định',
'Bình Dương',
'Bình Phước',
'Bình Thuận',
'Cà Mau',
'Cao Bằng',
'Cần Thơ',
'Đà Nẵng',
'Đắk Lắk',
'Đắk Nông',
'Điện Biên',
'Đồng Nai',
'Đồng Tháp',
'Gia Lai',
'Hà Giang',
'Hà Nam',
'Hà Nội',
'Hà Tĩnh',
'Hải Dương',
'Hải Phòng',
'Hậu Giang',
'Hòa Bình',
'HCM',
'Hưng Yên',
'Khánh Hòa',
'Kiên Giang',
'Kon Tum',
'Lai Châu',
'Lâm Đồng',
'Lạng Sơn',
'Lào Cai',
'Long An',
'Nam Định',
'Nghệ An',
'Ninh Bình',
'Ninh Thuận',
'Phú Thọ',
'Phú Yên',
'Quảng Bình',
'Quảng Nam',
'Quảng Ngãi',
'Quảng Ninh',
'Quảng Trị',
'Sóc Trăng',
'Sơn La',
'Tây Ninh',
'Thái Bình',
'Thái Nguyên',
'Thanh Hóa',
'Thừa Thiên Huế',
'Tiền Giang',
'Trà Vinh',
'Tuyên Quang',
'Vĩnh Long',
'Vĩnh Phúc',
'Yên Bái'];


function addProvinceIntoSelect(provinces) {
    let select = document.getElementById('sel_City_Address');
    if (select == null)
        return;
    var opt;
    for (province of provinces) {
        opt = document.createElement('option');
        opt.value = province;
        opt.text = province;
        select.append(opt);
    }
}

function checkEmail(val) {
    let expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (!expr.test(val)) {
        return false;
    }
    else {
        return true
    }
}

function display() {
    $("#login-tag").remove();
    $("#tool-bar").append('<li id ="logout-tag"><a href="index.html"><i class="fa fa-user"></i> Đăng xuất</a></li>');
    let name = localStorage.getItem('username');
    $('#txt_FullName').val(name);
}

function processButtonUpdate() {
    let email = $('#txt_Email');
    let error_email = $('#error_email');
    let map = new Map();

    $('#btn_Update').click(function() {
        if (checkEmail(email.val())){
            error_email.css('display', 'none');            
        }
        else {
            error_email.css('display','block');
        }
    });
}


function processButtonClear() {
    $('#btn_Clear').click(function() {
        $('#txt_FullName').val('');
        $('#txt_Date_Of_Birth').val('');
        $('#Gender_Male').prop('checked', true);
        $('#txt_Street_Address').val('');
        $('#txt_Ward_Address').val('');
        $('#txt_District_Address').val('');
        $('#sel_City_Address').select(0);
        $('#txt_Phone').val('');
        $('#txt_Email').val('');
    })
}

display();
addProvinceIntoSelect(provinces);
processButtonUpdate();
processButtonClear();