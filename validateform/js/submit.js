$(document).ready(function(){
	var submit = $("button[type='submit']");
	submit.click(function(){
		var name = $("input[name='name']").val().trim();
		var password = $("input[name='password']").val().trim();
		var phone = $("input[name='phone']").val();
		var face = $("input[name='facebook']").val();
		var k = true;
		if(name.match(/[a-z0-9_-]{3,16}/img)==null){
			$("input[name='name']").next('span').text('Vui lòng nhập tài khoản');
			k = false;
		} else{
			$("input[name='name']").next('span').text('');
		}

		 if(password.match(/[a-z0-9_-]{6,16}/img)==null){
            $("input[name='password']").next('span').text('Vui lòng nhập mật khẩu');
            k = false;
        }else{
        	$("input[name='password']").next('span').text('');
        }

        if(phone.match(/(\+\d{2,4})?\s?(\d{10})/img)==null){
        	$("input[name='phone']").next('span').text('Vui lòng nhập lại SDT');
			k = false;
        }else{
			$("input[name='phone']").next('span').text('');
		}

		if(face.match(/[a-z0-9._%+-]{1,63}@[a-z0-9-]{2,63}(.([a-z0-9-]{2,63})){1,3}/img)==null){
			$("input[name='facebook']").next('span').text('Vui lòng nhập lại Facebook')
			k = false;
		}else{
			$("input[name='facebook']").next('span').text('');
		}

        return k;
	})
});
