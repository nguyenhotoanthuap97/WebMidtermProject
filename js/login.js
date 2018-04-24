function ChangeToUser(username)
{
    localStorage.setItem('username', username);
    $("#tool-bar").prepend('<li id ="acount-tag"><a href="profile_user.html"><i class="fa fa-user"></i>Tài khoản: '+username+' </a></li>');
    $("#login-tag").remove();
    $("#tool-bar").append('<li id ="logout-tag"><a href="#" onclick = "ChangeToGuess()"><i class="fa fa-user"></i> Đăng xuất</a></li>');
}

function ChangeToGuess()
{
    $("#acount-tag").remove();
    $("#logout-tag").remove();
    $("#tool-bar").append('<li id = "login-tag"><a href="#" data-toggle="modal" data-target="#Login"><i class="fa fa-user"></i> Đăng nhập</a></li>');        
}

function ChangeToGuess_checkout()
{
	$(".woocommerce-info").show();
    $("#acount-tag").remove();
    $("#logout-tag").remove();
    $("#tool-bar").append('<li id = "login-tag"><a href="#" data-toggle="modal" data-target="#Login"><i class="fa fa-user"></i> Đăng nhập</a></li>');        

}
function ChangeToUser_checkout(username)
{
    localStorage.setItem('username', username);
    $(".woocommerce-info").hide();
    $("#tool-bar").prepend('<li id ="acount-tag"><a href="profile_user.html"><i class="fa fa-user"></i>Tài khoản: '+username+' </a></li>');
    $("#login-tag").remove();
    $("#tool-bar").append('<li id ="logout-tag"><a href="#" onclick = "ChangeToGuess_checkout()"><i class="fa fa-user"></i> Đăng xuất</a></li>');
}
