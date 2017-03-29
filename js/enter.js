$(function () {
    $("#uname").blur(function () {
        var v1=$(this).val();
        if(v1==""||v1==null){
            $(this).focus();
            $("#ts").text("用户名不可为空");
        }
        else{
            $("#ts").text("");
        }
    });
    $("#pwd").blur(function () {
        var v1=$(this).val();
        if(v1==""||v1==null){
            $(this).focus();
            $("#ts").text("密码不可为空");
        }
        else{
            $("#ts").text("");
        }
    });
    $(".sub").click(function () {
        var v1=$("#uname").val();
        var v2=$("#pwd").val();
        var v3=$(":radio[name='m']:checked").val();
        if(v3=="用户名"){
            $.ajax({
                type:"GET",
                url:"enter.php",
                data:"username="+v1+"&password="+v2,
                success: function (msg) {
                    alert(msg);
                }
            });
        }
        else if(v3=="手机"){
            $.ajax({
                type:"GET",
                url:"enter_p.php",
                data:"phone="+v1+"&password="+v2,
                success: function (msg) {
                    alert(msg);
                }
            });
        }

    });
});