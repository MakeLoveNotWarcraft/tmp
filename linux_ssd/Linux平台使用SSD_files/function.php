function ubburl(oT, oN){
	txt=prompt('輸入網址','http://');
	if(txt!=null && txt!='' && txt!='http://'){
		if(oT.selectionStart!=oT.selectionEnd){
			oT.value=oT.value.substring(0, oT.selectionStart)+'[url='+txt+']'+oT.value.substring(oT.selectionStart, oT.selectionEnd)+'[/url]'+oT.value.substring(oT.selectionEnd, oT.value.length);
		}else{
			oT.value+='[url]'+txt+'[/url]';
		}
	}
}

function ubbblockquote(oT, oN){
	if(oT.selectionStart==oT.selectionEnd){
		txt=prompt('要引用的文字.','');
		if(txt!=null && txt!='')oT.value+='[blockquote]'+txt+'[/blockquote]';
	}else{
		oT.value=oT.value.substring(0, oT.selectionStart)+'[blockquote]'+oT.value.substring(oT.selectionStart, oT.selectionEnd)+'[/blockquote]'+oT.value.substring(oT.selectionEnd, oT.value.length);
	}
}

function ubbimg(oT){
	txt=prompt('輸入圖片網址','http://');
	if(txt!=null && txt!='' && txt!='http://'){
		txt1=prompt('圖片的替代文字','');
		txt2=prompt('指定圖片位置(網頁左left,右邊right,中間mid)','left');
		oT.value+='[img'+(txt1!=''?' alt='+txt1:'')+(txt2!=''?' align='+txt2:'')+']'+txt+'[/img]';
	}
}

function ubbemail(oT){
	txt=prompt('電子郵件帳號.','');
	if(txt!=null && txt!='')oT.value+='[email]'+txt+'[/email]';
}

function ubbcaption(oT, oN){
	if(oT.selectionStart==oT.selectionEnd){
		txt1=prompt('固定文字與標題','');
		if(txt1!=null && txt1!=''){
			txt2=prompt('標題說明:','');
			if(txt2!=null && txt2!='')oT.value+='[caption='+txt2+']'+txt1+'[/caption]';
		}
	}else{
		txt2=prompt('標題說明:','');
		if(txt2!=null && txt2!='')oT.value=oT.value.substring(0, oT.selectionStart)+'[caption='+txt2+']'+oT.value.substring(oT.selectionStart, oT.selectionEnd)+'[/caption]'+oT.value.substring(oT.selectionEnd, oT.value.length);
	}
}

function ubbbold(oT, oN){
	if(oT.selectionStart==oT.selectionEnd){
		txt=prompt('要用粗體的文字','');
		if(txt!=null && txt!='')oT.value+='[b]'+txt+'[/b]';
	}else{
		oT.value=oT.value.substring(0, oT.selectionStart)+'[b]'+oT.value.substring(oT.selectionStart, oT.selectionEnd)+'[/b]'+oT.value.substring(oT.selectionEnd, oT.value.length);
	}
}

function ubbitalic(oT, oN){
	if(oT.selectionStart==oT.selectionEnd){
		txt=prompt('要斜體化的文字.','');
		if(txt!=null && txt!='')oT.value+='[i]'+txt+'[/i]';
	}else{
		oT.value=oT.value.substring(0, oT.selectionStart)+'[i]'+oT.value.substring(oT.selectionStart, oT.selectionEnd)+'[/i]'+oT.value.substring(oT.selectionEnd, oT.value.length);
	}
}

function ubbunderline(oT, oN){
	if(oT.selectionStart==oT.selectionEnd){
		txt=prompt('要用底線的文字.','');
		if(txt!=null && txt!='')oT.value+='[u]'+txt+'[/u]';
	}else{
		oT.value=oT.value.substring(0, oT.selectionStart)+'[u]'+oT.value.substring(oT.selectionStart, oT.selectionEnd)+'[/u]'+oT.value.substring(oT.selectionEnd, oT.value.length);
	}
}

function ubbstrike(oT, oN){
	if(oT.selectionStart==oT.selectionEnd){
		txt=prompt('顯示文字刪除線','');
		if(txt!=null && txt!='')oT.value+='[s]'+txt+'[/s]';
	}else{
		oT.value=oT.value.substring(0, oT.selectionStart)+'[s]'+oT.value.substring(oT.selectionStart, oT.selectionEnd)+'[/s]'+oT.value.substring(oT.selectionEnd, oT.value.length);
	}
}

function ubbcolor(oT, oN, oColorse){
	if(oT.selectionStart==oT.selectionEnd){
		txt=prompt('文字','');
		if(txt!=null && txt!='')oT.value+='[color=#'+oColorse.value+']'+txt+'[/color]';
	}else{
		oT.value=oT.value.substring(0, oT.selectionStart)+'[color=#'+oColorse.value+']'+oT.value.substring(oT.selectionStart, oT.selectionEnd)+'[/color]'+oT.value.substring(oT.selectionEnd, oT.value.length);
	}
}