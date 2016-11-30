$(document).ready(function(){
	var submit = $("button[type='submit']");
	submit.click(function(){
		var name = $("input[name='name']").val();
		var password = $("input[name='password']").val();
		if(name==''){
			alert('Vui lòng nhập tài khoản');
			return false;
		} 
		 if(password == ''){
            alert('Vui lòng nhập mật khẩu');
            return false;
        }
	})
});
