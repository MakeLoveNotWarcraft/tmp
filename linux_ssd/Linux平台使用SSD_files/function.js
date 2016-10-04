function findObj(n, d){
	var p,i,x;
	if(!d)d=document;
	if((p=n.indexOf("?"))>0 && parent.frames.length){
		d=parent.frames[n.substring(p+1)].document;
		n=n.substring(0,p);
	}
	if(!(x=d[n]) && d.all)x=d.all[n];
	for(i=0; !x && i<d.forms.length; i++)x=d.forms[i][n];
	for(i=0; !x && d.layers && i<d.layers.length; i++)x=findObj(n,d.layers[i].document);
	if(!x && d.getElementById)x=d.getElementById(n);
	return x;
}

function UBBCode(c){
	c=c.replace(/</ig,'&lt;');
	c=c.replace(/>/ig,'&gt;');
	c=c.replace(/\n/ig,'<br/>');
	c=c.replace(/\r/ig,'');
	c=c.replace(/(\[i\])(.*?)(\[\/i\])/ig,'<i>$2</i>');
	c=c.replace(/(\[u\])(.*?)(\[\/u\])/ig,'<u>$2</u>');
	c=c.replace(/(\[b\])(.*?)(\[\/b\])/ig,'<b>$2</b>');
	c=c.replace(/(\[s\])(.*?)(\[\/s\])/ig,'<s>$2</s>');
	c=c.replace(/\[color=(.*?)\](.*?)\[\/color\]/ig,'<span style="color:$1;">$2</span>');
	c=c.replace(/\[size=(.*?)\](.*?)\[\/size\]/ig,'<span style="font-size:$1em;">$2</span>');
	c=c.replace(/\[caption=(.*?)\](.*?)\[\/caption\]/ig,'<span style="border-bottom:1px dotted #999;cursor:help;" title="$1">$2</span>');
	c=c.replace(/(\[blockquote\])(.*?)(\[\/blockquote\])/ig,'<blockquote>$2</blockquote>');
	c=c.replace(/\[url\]http(s?):\/\/(.*?)\[\/url\]/ig,'<a href="http$1://$2" target="_blank">$2</a>');
	c=c.replace(/\[url=http(s?):\/\/(.*?)\](.*?)\[\/url\]/ig,'<a href="http$1://$2" target="_blank">$3</a>');
	c=c.replace(/\[url\]www.(.*?)\[\/url\]/ig,'<a href="http://www.$1" target="_blank">$1</a>');
	c=c.replace(/\[url=www.(.*?)\](.*?)\[\/url\]/ig,'<a href="http://www.$1" target="_blank">$2</a>');
	c=c.replace(/\[img\](.+?)\[\/img\]/ig,'<img src="$1" alt="" border="0"/>');
	c=c.replace(/\[img( alt=(.*?)?)( align=(.*?)?)\](.+?)\[\/img\]/ig,'<img src="$5" alt="$2" align="$4" border="0"/>');
	c=c.replace(/\[img( alt=(.*?)?)\](.+?)\[\/img\]/ig,'<img src="$3" alt="$2" border="0"/>');
	c=c.replace(/\[img( align=(.*?)?)\](.+?)\[\/img\]/ig,'<img src="$3" alt="" align="$2" border="0"/>');
	c=c.replace(/\[img( align=(.*?)?)( alt=(.*?)?)\](.+?)\[\/img\]/ig,'<img src="$5" alt="$4" align="$2" border="0"/>');
	c=c.replace(/\[email\](\w+\@(\w+\.){1,4}\w+?)\[\/email\]/ig,'<a href="mailto:$1">$1</a>');
	c=c.replace(/\[em01\]/ig,'<img src="content/image/em01.gif" alt="" border="0" />');
	c=c.replace(/\[em02\]/ig,'<img src="content/image/em02.gif" alt="" border="0" />');
	c=c.replace(/\[em03\]/ig,'<img src="content/image/em03.gif" alt="" border="0" />');
	c=c.replace(/\[em04\]/ig,'<img src="content/image/em04.gif" alt="" border="0" />');
	c=c.replace(/\[em05\]/ig,'<img src="content/image/em05.gif" alt="" border="0" />');
	c=c.replace(/\[em06\]/ig,'<img src="content/image/em06.gif" alt="" border="0" />');
	c=c.replace(/\[em07\]/ig,'<img src="content/image/em07.gif" alt="" border="0" />');
	c=c.replace(/\[em08\]/ig,'<img src="content/image/em08.gif" alt="" border="0" />');
	c=c.replace(/\[em09\]/ig,'<img src="content/image/em09.gif" alt="" border="0" />');
	c=c.replace(/\[em10\]/ig,'<img src="content/image/em10.gif" alt="" border="0" />');
	c=c.replace(/\[em11\]/ig,'<img src="content/image/em11.gif" alt="" border="0" />');
	c=c.replace(/\[em12\]/ig,'<img src="content/image/em12.gif" alt="" border="0" />');
	return(c);
}

function checkAll(form){
	for(i=0;i<form.elements.length;i++){
		if(form.elements[i].type=="checkbox"){
			if(form.elements[i].checked==true){
				form.elements[i].checked=false;
			}else{
				form.elements[i].checked=true;
			}
		}
	}
}

function checkAl(form){
	for(i=0;i<form.elements.length;i++){
		if(form.elements[i].type=="checkbox")form.elements[i].checked=true;
	}
}

function copycode(obj){
	var rng=document.body.createTextRange();
	rng.moveToElementText(obj);
	rng.scrollIntoView();
	rng.select();
	rng.execCommand('Copy');
	rng.collapse(false);
}

var rem, tdiv;
function getP(u, p, v){
	url=u+'?'+p+'&d='+Math.random();
	if(v)tdiv=v;
	if(window.ActiveXObject){
		rem=new ActiveXObject("Microsoft.XMLHTTP");
	}else if(window.XMLHttpRequest){
		rem=new XMLHttpRequest();
	}
	if(rem){
		if(v)rem.onreadystatechange=pChange;
		rem.open("GET", url, true);
		rem.send(null);
	}
}

function pChange(){
	if(rem.readyState==4){
		if(rem.status==200){
			findObj(tdiv).style.display='';
			findObj(tdiv).innerHTML=rem.responseText;
		}
	}
}