window.onload=function(){
var aInput=document.getElementsByTagName('input');
var oUser=aInput[0];
var oPsd=aInput[1];
var oPsd2=aInput[2];
var oEmail=aInput[3];
var oPhone=aInput[4];

var aVldt=document.getElementsByClassName('validation');
var oUser_vldt=aVldt[0];
var oPsd_vldt=aVldt[1];
var oPsd2_vldt=aVldt[2];
var oEmail_vldt=aVldt[3];
var oPhone_vldt=aVldt[4];
var oForm=document.getElementsByTagName('form')[0];
var oSub=document.getElementsByName('sub')[0];
//鼠标移入时
oUser.onfocus=function(){
	var oNormal=oUser_vldt.getElementsByClassName('normal')[0];
	var oFail=oUser_vldt.getElementsByClassName('fail')[0];
	var oSucc=oUser_vldt.getElementsByClassName('succ')[0];
	oNormal.style.display="block";
	oFail.style.display="none";
	oSucc.style.display="none";
	this.style.borderColor="#ccc";
}
oPsd.onfocus=function(){
	var oNormal=oPsd_vldt.getElementsByClassName('normal')[0];
    var oFail=oPsd_vldt.getElementsByClassName('fail')[0];
	var oSucc=oPsd_vldt.getElementsByClassName('succ')[0];	
	oNormal.style.display="block";
	oFail.style.display="none";
	oSucc.style.display="none";
	this.style.borderColor="#ccc";
}
oPsd2.onfocus=function(){
	var oNormal=oPsd2_vldt.getElementsByClassName('normal')[0];
    var oFail=oPsd2_vldt.getElementsByClassName('fail')[0];
	var oSucc=oPsd2_vldt.getElementsByClassName('succ')[0];	
	oNormal.style.display="block";
	oFail.style.display="none";
	oSucc.style.display="none";
	this.style.borderColor="#ccc";
}
oEmail.onfocus=function(){
	var oNormal=oEmail_vldt.getElementsByClassName('normal')[0];
    var oFail=oEmail_vldt.getElementsByClassName('fail')[0];
	var oSucc=oEmail_vldt.getElementsByClassName('succ')[0];	
	oNormal.style.display="block";
	oFail.style.display="none";
	oSucc.style.display="none";
	this.style.borderColor="#ccc";
}
oPhone.onfocus=function(){
	var oNormal=oPhone_vldt.getElementsByClassName('normal')[0];
    var oFail=oPhone_vldt.getElementsByClassName('fail')[0];
	var oSucc=oPhone_vldt.getElementsByClassName('succ')[0];
	oNormal.style.display="block";
	oFail.style.display="none";
	oSucc.style.display="none";
	this.style.borderColor="#ccc";
}

//鼠标移出时
//中文字符匹配方式 \u4e00-\u9fa5
//\x00-xff 所有的单字节字符
function getLength(str){
	return str.replace(/[^\x00-xff]/g,"xx").length;
}
//用户名
oUser.onblur=function(){
	var oNormal=oUser_vldt.getElementsByClassName('normal')[0];
	var oFail=oUser_vldt.getElementsByClassName('fail')[0];
	var oSucc=oUser_vldt.getElementsByClassName('succ')[0];
	

    if(this.value==""){
    oNormal.style.display='none';
    oSucc.style.display='none';
    oFail.style.display='block';
    oFail.innerHTML="名称不能为空";
    this.style.borderColor="red";  
    
    }
	else if(check_user()){
    oNormal.style.display='none';
    oSucc.style.display='none';
    oFail.style.display='block';
    oFail.innerHTML="用户名不合法";
    this.style.borderColor="red"; 
       
	}    
    else{
    oNormal.style.display='none';
    oSucc.style.display='block';
    oFail.style.display='none';
    this.style.borderColor="green";   	
    }
}

//密码
oPsd.onblur=function(){
	var oNormal=oPsd_vldt.getElementsByClassName('normal')[0];
	var oFail=oPsd_vldt.getElementsByClassName('fail')[0];
	var oSucc=oPsd_vldt.getElementsByClassName('succ')[0];
    
    if(this.value==""){
    oNormal.style.display='none';
    oSucc.style.display='none';
    oFail.style.display='block';
    oFail.innerHTML="密码不能为空";
    this.style.borderColor="red";
      
    }
	else if(check_psd()){
    oNormal.style.display='none';
    oSucc.style.display='none';
    oFail.style.display='block';
    oFail.innerHTML="密码不合法";
    this.style.borderColor="red";
      
	}    
    else{
    oNormal.style.display='none';
    oSucc.style.display='block';
    oFail.style.display='none';
    this.style.borderColor="green";   	
    }
}

//确认密码
oPsd2.onblur=function(){
	var oNormal=oPsd2_vldt.getElementsByClassName('normal')[0];
	var oFail=oPsd2_vldt.getElementsByClassName('fail')[0];
	var oSucc=oPsd2_vldt.getElementsByClassName('succ')[0];
    
    if(this.value==""){
    oNormal.style.display='none';
    oSucc.style.display='none';
    oFail.style.display='block';
    oFail.innerHTML="确认密码不能为空";
    this.style.borderColor="red"; 
     
    }
	else if(check_psd2()){
    oNormal.style.display='none';
    oSucc.style.display='none';
    oFail.style.display='block';
    oFail.innerHTML="确认密码不合法";
    this.style.borderColor="red";
        
	}    
    else{
    oNormal.style.display='none';
    oSucc.style.display='block';
    oFail.style.display='none';
    this.style.borderColor="green";   	
    }
}
//邮箱
oEmail.onblur=function(){
	var oNormal=oEmail_vldt.getElementsByClassName('normal')[0];
	var oFail=oEmail_vldt.getElementsByClassName('fail')[0];
	var oSucc=oEmail_vldt.getElementsByClassName('succ')[0];
    if(this.value==""){
    oNormal.style.display='none';
    oSucc.style.display='none';
    oFail.style.display='block';
    oFail.innerHTML="邮箱不能为空";
    this.style.borderColor="red"; 
     
    }
	else if(check_email()){
    oNormal.style.display='none';
    oSucc.style.display='none';
    oFail.style.display='block';
    oFail.innerHTML="邮箱不合法";
    this.style.borderColor="red";
       
	}    
    else{
    oNormal.style.display='none';
    oSucc.style.display='block';
    oFail.style.display='none';
    this.style.borderColor="green";   	
    }
}
//手机号码
oPhone.onblur=function(){
	var oNormal=oPhone_vldt.getElementsByClassName('normal')[0];
	var oFail=oPhone_vldt.getElementsByClassName('fail')[0];
	var oSucc=oPhone_vldt.getElementsByClassName('succ')[0];
    
    if(this.value==""){
    oNormal.style.display='none';
    oSucc.style.display='none';
    oFail.style.display='block';
    oFail.innerHTML="手机号码不能为空";
    this.style.borderColor="red";
    
    }
	else if(check_phone()){
    oNormal.style.display='none';
    oSucc.style.display='none';
    oFail.style.display='block';
    oFail.innerHTML="手机号码不合法";
    this.style.borderColor="red";
    
	}    
    else{
    oNormal.style.display='none';
    oSucc.style.display='block';
    oFail.style.display='none';
    this.style.borderColor="green";   	
    }
}

function check_user(){
    if(/[^\w\u4e00-\u9fa5]/g.test(oUser.value)||getLength(oUser.value)<4||getLength(oUser.value)>16) return true;
}
function check_psd(){
	if(getLength(oPsd.value)<6)  return true;
}
function check_psd2(){
    if(oPsd2.value!=oPsd.value||getLength(oPsd2.value)<6)  return true;
}
function check_email(){
	if(!/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(oEmail.value))  return true;
}
function check_phone(){
	if(!/^1\d{10}$/.test(oPhone.value)) return true;
}
oSub.onclick=function(){
    
	var flag=true;

	if(check_user()){
	flag=false;	
	oUser_vldt.getElementsByClassName('fail')[0].style.display='block';
    oUser_vldt.getElementsByClassName('fail')[0].innerHTML="用户名不合法";
    oUser.style.borderColor="red";
    if(oUser.value==''){ oUser_vldt.getElementsByClassName('fail')[0].innerHTML="用户名不能为空";}
	}

	if(check_psd()){
		flag=false;
	oPsd_vldt.getElementsByClassName('fail')[0].style.display='block';
    oPsd_vldt.getElementsByClassName('fail')[0].innerHTML="密码不合法";
    oPsd.style.borderColor="red";
    if(oPsd.value==''){ oPsd_vldt.getElementsByClassName('fail')[0].innerHTML="密码不能为空";}
	}		
	
	if(check_psd2()){
		flag=false;
	oPsd2_vldt.getElementsByClassName('fail')[0].style.display='block';
    oPsd2_vldt.getElementsByClassName('fail')[0].innerHTML="两次输入不一致，请重新输入";
    oPsd2.style.borderColor="red";
    if(oPsd2.value==''){ oPsd2_vldt.getElementsByClassName('fail')[0].innerHTML="确认密码不能为空";}
	}

	if(check_email()){
		flag=false;
	oEmail_vldt.getElementsByClassName('fail')[0].style.display='block';
    oEmail_vldt.getElementsByClassName('fail')[0].innerHTML="邮箱输入不合法";
    oEmail.style.borderColor="red";
    if(oEmail.value==''){ oEmail_vldt.getElementsByClassName('fail')[0].innerHTML="邮箱不能为空";}
	}		
    
 	if(check_phone()){
		flag=false;
	oPhone_vldt.getElementsByClassName('fail')[0].style.display='block';
    oPhone_vldt.getElementsByClassName('fail')[0].innerHTML="请输入11位手机号码";
    oPhone.style.borderColor="red";
    if(oPhone.value==''){ oPhone_vldt.getElementsByClassName('fail')[0].innerHTML="手机号码不能为空";}
	}   
	if(flag){
		return true;
	}else{
        alert('输入有误');
        return false;
	}

}

}


