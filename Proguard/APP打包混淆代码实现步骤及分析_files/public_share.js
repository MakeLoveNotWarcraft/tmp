// <![CDATA[
	$(document).ready(function() {
		var surl = window.location.href,
		summary = document.title, 
		stitle = '', 
		pics = '',
		encode = encodeURIComponent, 
		shareList = {
			qzone : {
				title : "分享到QQ空间",
				cls : 'ico_qz',
				method : function(evt) {
					buff = [], ps = {
						url : surl,
						desc : '',
						summary : summary,
						title : stitle,
						pics : pics
					};
					for (var k in ps) {
						buff.push(k + '=' + encode(ps[k] || ''));
					}
					var n = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?' + buff.join('&') + '';
					$(".bds_qzone").attr("href", n);
				}
			},
			weibo : {
				title : "分享到腾讯微博",
				cls : 'ico_qt',
				method : function(evt) {
					var w = "http://v.t.qq.com/share/share.php", q = ["?site=",
							encode(surl), "&title=", encode(summary), "&pic=",
							encode(pics), "&url=", encode(surl)].join(""), p = [w,
							q].join("");
					$(".bds_tqq").attr("href", p);
				}
			},
			sina : {
				title : "分享到新浪微博",
				cls : 'ico_st',
				method : function() {
					var w = "http://v.t.sina.com.cn/share/share.php", q = ["?url=",
							encode(surl), "&title=", encode(summary), "&source=",
							"&sourceUrl=", surl, "&content=utf-8", "&pic=",
							encode(pics)].join(""), p = [w, q].join("");
					$(".bds_tsina").attr("href", p);
				}
			},
			weixin : {
				title : "分享到微信朋友圈",
				cls : 'ico_wx',
				method : function() {
					sharewx(encode(summary), encode(surl), encode(pics), "");
				}
			}
		};
		var p, o = [];
		for (p in shareList) {
			if (shareList.hasOwnProperty(p)) {
				o.push('<a href="#' + p + '" type="' + p + '" class="sprite '
						+ shareList[p].cls + '" title="' + shareList[p].title
						+ '">' + "</a>")
			}
		}
		$(".bdsharebuttonbox a").bind("click", function(evt) {
					type = $(this).attr('type');
					shareList[type].method();
				});
		var _oMaskEl = "";
		var _oErweimaMaskEl = "";
		function popup(a) {
			var b = "", title = "扫描二维码分享到微信";
			if (c = document.getElementById("zy_weixin_w")) {
				c = document.getElementById("zy_weixin_w");
			} else {
				var c = document.createElement("div");
				isIe6 = /msie|MSIE 6/.test(navigator.userAgent);
				if (!isIe6) {
					c.style.zIndex = "101120000000";
				}
				c.style.position = "absolute";
				if (isIe6) {
					c.style.left = "550px";
					c.style.top = parseInt(document.documentElement.scrollTop)
							+ 200 + "px";
					c.style.zIndex = "1000000";
				}
				c.id = "zy_weixin_w";
			}
			if (a) {
				b = a;
				// title = "在微信上关注我们";
			}
			c.innerHTML = '<div class="zy_weixin_erweimaMask" id="zy_weixin_weixin_share_mask_cancel_" style="z-index:10000; "></div>		<div class="zy_weixin_containerPanel" style="z-index:10020; margin:0;padding:0;width:220px;_width:251px;height:248px;position:fixed;left: 41%;top:30%;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;border-top:1px solid #868686;border-bottom:1px solid #212121;box-shadow:0px 1px 3px #313131;background-color:#4F5051;">		<div class="zy_weixin_contentTitle" style="font-size:14px;height:27px;background-color:#6B6B6B;border-style:solid;border-width:1px;border-color:#6E6E6E #727272 #313233 #757575;box-shadow:0px 1px 0px #454647;-webkit-border-top-left-radius:5px;-webkit-border-top-right-radius:5px;-moz-border-radius-topleft:5px;-moz-border-radius-topright:5px;border-top-left-radius:5px;border-top-right-radius:5px;"><div class="left" style="float:left; margin-left:30px;_margin-left:15px;margin-top:2px;_margin-top:4px;color:#fff; font-weight:bold;">'
					+ title
					+ '</div><span class="right closeIcon" style="margin-top:2px;margin-right:10px;float:right;width:12px;display:block;"><a style="display:block;width:24px;height:24px;background:url(http://dl4.zywa.com.cn/images/share_close.png) no-repeat center;" href="javascript:zy_cancel()" id="_weixin_share_mask_"></a></span><div class="clr" style="clear:both;overflow: hidden;"></div></div>		<div class="zy_weixin_content" id="zy_weixin_content" style="width:180px;_width:211px;height:180px;padding:20px;overflow:visibile;background:none;text-align:center;background:none;"><img style="width:178px; height:178px;padding:0;" src="'
					+ a.src + '" id="zy_weixin_share_img_" /></div></div>';
			document.body.appendChild(c);
			_oMaskEl = document.getElementById("zy_weixin_share_mask_");
			_oErweimaMaskEl = document
					.getElementById("zy_weixin_weixin_share_mask_cancel_");
		}
	
		function sharewx(a, b, c, d) {
			_s = loadJs("http://s.jiathis.com/qrcode.php?url=" + b + "&r="
					+ Math.random());
			popup(_s);
			return false;
		}
		function loadJs(a) {
			try {
				var x = document.createElement("SCRIPT");
				x.type = "text/javascript";
				x.src = a;
				x.charset = "utf-8";
				document.getElementsByTagName("head")[0].appendChild(x);
				return x;
	
			} catch (e) {
			}
		}
	});
	
	function zy_cancel() {
		_oDlgEl = document.getElementById("zy_weixin_w");
		document.body.removeChild(_oDlgEl);
		_oDlgEl = _oDivEl = _oMaskEl = _oErweimaMaskEl = null;
	}
// ]]>