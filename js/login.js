$(function () {
    $("#pwd").attr("disabled","disabled");
    $("#success").hide();
    $("#name").blur(function () {
        var v1=$(this).val();
        if(v1==""||v1==null){
            $("#name+span").text("");
            $(this).focus();
            $("#ts").text("用户名不可为空");
        }
        else{
            $("#name+span").text("");
            $("#ts").text("");
        }
    });
    $("#password").blur(function () {
        var v1=$(this).val();
        if(v1==""||v1==null){
            $("#password+span").text("");
            $(this).focus();
            $("#ts").text("密码不可为空");
        }
        else{
            $("#password+span").text("");
            $("#pwd").removeAttr("disabled","disabled");
            $("#ts").text("");
        }
    });
    $("#pwd").blur(function () {
        var v1=$(this).val();
        if(v1==""||v1==null){
            $("#pwd+span").text("");
            $(this).focus();
            $("#ts").text("密码不可为空");
        }
        else if(v1!=$("#password").val()){
            $("#pwd+span").text("");
            $(this).focus();
            $("#ts").text("上下不匹配");
        }
        else{
            $("#pwd+span").text("");
            $("#ts").text("");
        }
    });
    $("#phone").blur(function () {
        var v1=$(this).val();
        if(v1==""||v1==null){
            $("#phone+span").text("");
            $(this).focus();
            $("#ts").text("联系方式不可为空");
        }
        else if(v1.length!=11||isNaN(v1)==true){
            $("#phone+span").text("");
            $(this).focus();
            $("#ts").text("请填写正确格式");
        }
        else{
            $("#phone+span").text("");
            $("#ts").text("");
        }
    });
    $("#but").click(function () {
        var v1=$("#name").val();
        var v2=$("#password").val();
        var v3=$(":radio[name='r1']:checked").val();
        var v4=$(":radio[name='l1']:checked").val();
        var v5=$("#phone").val();
        alert(v1+v2+v3+v4+v5);
        $.ajax({
            type:"GET",
            url:"login.php",
            data:"name="+v1+"&pwd="+v2+"&sex="+v3+"&lx="+v4+"&phone="+v5,
            success: function (msg) {
                if(msg==1){
                    $("#ts").text("注册成功");
                }
                else{
                    alert(msg)
                }
            }
        });
    });
});