var mod_pagespeed_$P445XSPoR="WPGroHo=jQuery.extend({my_hash:'',data:{},renderers:{},syncProfileData:function(hash,id){if(!WPGroHo.data[hash]){WPGroHo.data[hash]={};jQuery('div.grofile-hash-map-'+hash+' span').each(function(){WPGroHo.data[hash][this.className]=jQuery(this).text();});}WPGroHo.appendProfileData(WPGroHo.data[hash],hash,id);},appendProfileData:function(data,hash,id){for(var key in data){if(jQuery.isFunction(WPGroHo.renderers[key])){return WPGroHo.renderers[key](data[key],hash,id,key);}jQuery('#'+id).find('h4').after(jQuery('<p class=\"grav-extra '+key+'\" />').html(data[key]));}}},WPGroHo);jQuery(document).ready(function(){if('undefined'===typeof Gravatar){return;}Gravatar.profile_cb=function(h,d){WPGroHo.syncProfileData(h,d);};Gravatar.my_hash=WPGroHo.my_hash;Gravatar.init('body','#wpadminbar');});";var mod_pagespeed_KSKQGAwRrI="jQuery(function(a){\"use strict\";function b(a){var b=a.parent(),c=a.outerHeight(!0),d=b.height();b.toggleClass(\"expand\"),b.hasClass(\"expand\")?setTimeout(function(){b.addClass(\"transition\").css(\"height\",c)},10):setTimeout(function(){b.css(\"height\",d),setTimeout(function(){b.addClass(\"transition\").css(\"height\",0)},10)},10),b.one(\"transitionEnd webkitTransitionEnd transitionend oTransitionEnd msTransitionEnd\",function(){b.hasClass(\"open\")&&b.removeClass(\"transition\").css(\"height\",\"auto\")})}a(\".toggle-search\").click(function(){a(\".toggle-search\").toggleClass(\"active\"),a(\".search-expand\").fadeToggle(250),setTimeout(function(){a(\".search-expand input\").focus()},300)}),a(\"a#back-to-top\").click(function(){return a(\"html, body\").animate({scrollTop:0},\"slow\"),!1}),function(){var b=a(\".alx-tabs-nav\"),c=b.children(\"li\");a(\".alx-tabs-container\");b.each(function(){var b=a(this);b.next().children(\".alx-tab\").stop(!0,!0).hide().siblings(b.find(\"a\").attr(\"href\")).show(),b.children(\"li\").first().addClass(\"active\").stop(!0,!0).show()}),c.on(\"click\",function(b){var c=a(this);c.siblings().removeClass(\"active\").end().addClass(\"active\"),c.parent().next().children(\".alx-tab\").stop(!0,!0).hide().siblings(c.find(\"a\").attr(\"href\")).fadeIn(),b.preventDefault()}).children(window.location.hash?'a[href=\"'+window.location.hash+'\"]':\"a:first\").trigger(\"click\")}(),a(\".comment-tabs li\").click(function(){a(\".comment-tabs li\").removeClass(\"active\"),a(this).addClass(\"active\"),a(\".comment-tab\").hide();var b=a(this).find(\"a\").attr(\"href\");return a(b).fadeIn(),!1}),a(\"table tr:odd\").addClass(\"alt\"),a(\"body\").addClass(\"s1-collapse\"),a(\"body\").addClass(\"s2-collapse\"),a(\".s1 .sidebar-toggle\").click(function(){a(\"body\").toggleClass(\"s1-collapse\").toggleClass(\"s1-expand\"),a(\"body\").is(\".s2-expand\")&&a(\"body\").toggleClass(\"s2-expand\").toggleClass(\"s2-collapse\")}),a(\".s2 .sidebar-toggle\").click(function(){a(\"body\").toggleClass(\"s2-collapse\").toggleClass(\"s2-expand\"),a(\"body\").is(\".s1-expand\")&&a(\"body\").toggleClass(\"s1-expand\").toggleClass(\"s1-collapse\")}),a(\".nav ul.sub-menu\").hide(),a(\".nav li\").hover(function(){a(this).children(\"ul.sub-menu\").slideDown(\"fast\")},function(){a(this).children(\"ul.sub-menu\").hide()}),a(\".nav-toggle\").on(\"click\",function(){b(a(\".nav-wrap .nav\",a(this).parent()))})});";var mod_pagespeed_UNGWuvO7x4="var addComment={moveForm:function(a,b,c,d){var e,f,g,h,i=this,j=i.I(a),k=i.I(c),l=i.I(\"cancel-comment-reply-link\"),m=i.I(\"comment_parent\"),n=i.I(\"comment_post_ID\"),o=k.getElementsByTagName(\"form\")[0];if(j&&k&&l&&m&&o){i.respondId=c,d=d||!1,i.I(\"wp-temp-form-div\")||(e=document.createElement(\"div\"),e.id=\"wp-temp-form-div\",e.style.display=\"none\",k.parentNode.insertBefore(e,k)),j.parentNode.insertBefore(k,j.nextSibling),n&&d&&(n.value=d),m.value=b,l.style.display=\"\",l.onclick=function(){var a=addComment,b=a.I(\"wp-temp-form-div\"),c=a.I(a.respondId);if(b&&c)return a.I(\"comment_parent\").value=\"0\",b.parentNode.insertBefore(c,b),b.parentNode.removeChild(b),this.style.display=\"none\",this.onclick=null,!1};try{for(var p=0;p<o.elements.length;p++)if(f=o.elements[p],h=!1,\"getComputedStyle\"in window?g=window.getComputedStyle(f):document.documentElement.currentStyle&&(g=f.currentStyle),(f.offsetWidth<=0&&f.offsetHeight<=0||\"hidden\"===g.visibility)&&(h=!0),\"hidden\"!==f.type&&!f.disabled&&!h){f.focus();break}}catch(q){}return!1}},I:function(a){return document.getElementById(a)}};";