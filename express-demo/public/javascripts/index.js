$(function(){
    $("img").lazyload({
        threshold: 200,
        effect: "fadeIn"
    });
    // input
    $('input').focus(function(){
        $(this).parent().css({
            'border-color':' #3499DA',
            
        }).siblings().css({
            'border-color':'#e9ecee'
        })
    });
    $('input').blur(()=>{
        $('.login-label-item').css({
            'border-color': '#e9ecee'
        }) 
    });

// 登陆验证


})

function  validate(params) {
    if(!$("input[name='username']").val()){
        $("#login-tip").empty().text("用户名为空")
        return false;
    }
    if(!$("input[name='password']").val()){
        alert("密码为空")
        return false;
    }
}