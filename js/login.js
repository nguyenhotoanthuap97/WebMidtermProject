function ChangeToUser(username)
{
    $("#tool-bar").prepend('<li id ="acount-tag"><a href="#"><i class="fa fa-user"></i>Tài khoản: '+username+' </a></li>');
    $("#login-tag").remove();
    $("#tool-bar").append('<li id ="logout-tag"><a href="#" onclick = "ChangeToGuess()"><i class="fa fa-user"></i> Đăng xuất</a></li>');
}

function ChangeToGuess()
{
    $("#acount-tag").remove();
    $("#logout-tag").remove();
    $("#tool-bar").append('<li id = "login-tag"><a href="#" data-toggle="modal" data-target="#Login"><i class="fa fa-user"></i> Đăng nhập</a></li>');        
}