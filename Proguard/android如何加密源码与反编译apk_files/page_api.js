//忽略所有运行时错误
window.onerror=function(){return true;}


$(document).ready(function(){
	
	headerAd();
	
	try{
		$.ajax({url:"/ajax_api/pagevis.php?id="+id});
	
		$.ajax({url:"/"+pathName+"/top10.html", success:function(data){
			$("#top10").html(data);
		}});
		
		$(".main2 img").each(function(){
			var maxwidth = 780;  
			if ($(this).width() > maxwidth) {  
				$(this).width(maxwidth);  
			}
		});
		
		$("#comm_code_img").click(function(){
			changeImgCode();
		});
		
		$("#comm_submit").click(function(){
			var comm_user_val=$("#comm_user").val();
			var comm_text_val=$("#comm_text").val();
			var comm_code=$("#comm_code").val();
			if(comm_user_val==""){
				alert("请填写昵称");
				$("#comm_user").focus();
				return false;
			}
			if(comm_text_val==""){
				alert("请填写讨论内容");
				$("#comm_text").focus();
				return false;
			}
			if(comm_code==""){
				alert("请填写验证码");
				$("#comm_code").focus();
				return false;
			}
			var commSubmit=$("#comm_submit");
			commSubmit.attr("value","正在提交...");
			commSubmit.attr("disabled","true");
			
			$.post("/user/pub_comm.php",{id:id, comm_user:comm_user_val, comm_text:comm_text_val, comm_code:comm_code},function(result){
				//$("#comm_text").val(result);
				if(result=="success"){
					changeImgCode();
					$("#comm_user").val("");
					$("#comm_text").val("");
					$("#comm_code").val("");
					loadCommList();
					alert("评论发表成功！");
				}else if(result=="code_error"){
					alert("验证码错误！");
				}else if(result=="not_safe"){
					alert("评论发表失败！昵称或内容包含非法字符");
				}else if(result=="pars_error"){
					alert("评论发表失败！");
				}
				commSubmit.attr("value","发表评论");
				commSubmit.removeAttr("disabled");
			});
		});
		
		setCommUser();
		loadCommList();
		//menuAd1();
		contentAd1();
	}catch(err){
		//
	}

});

function changeImgCode(){
	var myDate = new Date();
	var curTime =myDate.toLocaleTimeString();
	$("#comm_code_img").attr("src","/user/imgcode.php?time="+curTime);
}

function loadCommList(){
	$.ajax({url:"/user/comm_list.php?id="+id, success:function(data){
		$("#comm_list").html(data);
	}});
}

function setCommUser(){
	var timeStamp = new Date().getTime();
	$("#comm_user").val("开发者" + timeStamp);
}

function menuAd1(){
	$.ajax({url:"/ajax_api/menu_ad1.html", success:function(data){
		$("#menu_ad1").html(data);
	}});
}

function contentAd1(){
	$.ajax({url:"/ajax_api/content_ad1.html", success:function(data){
		var content_ad1=$("#content_ad1");
		var adList=data.split("\n");
		var adCount=adList.length;
		if(adCount>0){
		  var rand=parseInt(Math.random()*((adCount-2)-0+1)+0);
		  
		  content_ad1.addClass("content_ad1");
		  content_ad1.html(adList[rand]);
		}
	}});
}

function headerAd(){
	$.ajax({url:"/ajax_api/header_ad.html", success:function(data){
		$("#header_ad").html(data);
	}});
}