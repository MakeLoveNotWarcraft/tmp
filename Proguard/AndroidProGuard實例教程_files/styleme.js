(function($){"use strict";var stylemeArticles=[],thisWindow=$(window,document),stickyBox=$(".styleme-stickybox"),stickyboxBody=stickyBox.find(".styleme-stickybox__body");$.ajaxSetup({cache:true});for(var i=0;i<pix.stylemeTags.length;i++){$.ajax({url:"https://emma.pixnet.cc/blog/articles",type:"get",dataType:"json",data:{user:"styleme",category_id:pix.stylemeTags[i].cat_id,thumb_size:100,per_page:4}}).done(extendArticles)}$.ajaxSetup({cache:false});thisWindow.load(function(){if(!pix.stylemeArticles){stylemeArticlesInit()}});function getArticleData(articles,num){var articleNum=Math.min(num,articles.length),newArticles=[];for(var i=0;i<articleNum;i++){var rand=Math.floor(Math.random()*(articles.length-1));newArticles.push(formatData(articles[rand]));articles.splice(rand,1)}return newArticles;function formatData(article){return{thumb:article.thumb,title:article.title,url:article.link,author:article.user.display_name||article.user.name,label:article.category}}}function insertArticles(){var bloggerData={username:pix.owner,articleId:$("body").data("article-id")},ulTmpl='<ul class="styleme-block-list">',liTmpl='<li class="styleme-block"><a href="{{ URL }}" target="_blank" data-label="{{ LABEL }}"><img class="styleme-block__image" src="{{ THUMB }}"><span class="styleme-block__text"><span class="styleme-block__title">{{ TITLE }}</span><span class="styleme-block__author">{{ AUTHOR }}</span></span></a></li>';for(var i=0;i<pix.stylemeArticles.length;i++){var article=pix.stylemeArticles[i],params={utm_campaign:"article_to_article",utm_source:"pixnet",utm_medium:"CTA_mobile_"+(i+1),utm_term:article.label,utm_content:bloggerData.username+"/"+bloggerData.articleId};ulTmpl+=liTmpl.replace("{{ URL }}",article.url+"?"+$.param(params)).replace("{{ LABEL }}",article.label).replace("{{ THUMB }}",article.thumb).replace("{{ TITLE }}",getCutString(article.title,30)).replace("{{ AUTHOR }}",article.author)}if(1===pix.stylemeArticles.length){stickyBox.addClass("single-block")}else{var pagination=$('<ul class="block-pagination-list">').append($(new Array(pix.stylemeArticles.length+1).join('<li class="block-pagination"/>')));pagination.find("li").eq(0).addClass("active");stickyboxBody.after(pagination)}stickyboxBody.append($(ulTmpl+="</ul>"))}function stickyboxInit(){if(!pix.stylemeArticles.length){return}var tags=function(){var arr=[];for(var i=0;i<pix.stylemeTags.length;i++){arr.push(pix.stylemeTags[i].oct_tag_name)}return arr.join(", ")}();insertArticles();stickyBox.addClass("show");stickyBox.find(".styleme-stickybox__close-btn").on("click",function(){stickyBox.removeClass("show")});if(1<pix.stylemeArticles.length){stylemeBoxScrollEvent(stickyboxBody,stickyboxBody.next())}ga("create","UA-65168598-11","auto","stylemeArticlesTracker");ga("stylemeArticlesTracker.set","contentGroup2",tags);ga("stylemeArticlesTracker.set","contentGroup3","sticky");ga("stylemeArticlesTracker.send","pageview");stickyboxBody.on("click","a",function(){ga("stylemeArticlesTracker.send","event","styleme related","click sticky",$(this).data("label"))})}function stylemeBoxScrollEvent(){var paginations=stickyBox.find(".block-pagination"),stickyboxScrollLeft=0,scrollStart=0,scrollStartNext=0,canStartScroll=true,scrolltoNth=function(n){scrollStartNext=n*310;canStartScroll=false;stickyboxBody.stop().animate({scrollLeft:scrollStartNext},300,"linear",function(){paginations.eq(stickyboxScrollLeft/310).removeClass("active");paginations.eq(n).addClass("active");stickyboxScrollLeft=scrollStartNext;canStartScroll=true})},getScrollTarget=function(scrollLeftNow,scrollStart){if(scrollStart<scrollLeftNow){return Math.ceil(scrollLeftNow/310)}return Math.floor(scrollLeftNow/310)};stickyboxBody.on("scrollstop",function(){scrollStartNext=stickyboxBody.scrollLeft();if(canStartScroll){var scrollLeftNow=getScrollTarget(scrollStartNext,scrollStart);if(scrollLeftNow===stickyboxScrollLeft/310){return}scrolltoNth(scrollLeftNow)}});stickyboxBody.on("scroll",function(){scrollStart=scrollStartNext});stickyBox.on("click",".block-pagination",function(){var idx=$(this).index(".block-pagination");if(canStartScroll){scrolltoNth(idx)}})}function extendArticles(data){if(!data.error){stylemeArticles=stylemeArticles.concat(data.articles);if(stylemeArticles.length===pix.stylemeTags.length*4){stylemeArticlesInit()}}}function stylemeArticlesInit(){pix.stylemeArticles=getArticleData(stylemeArticles,4);if(pix.replaceStylemeArticles){pix.replaceStylemeArticles()}if(!stickyBox.length){return}thisWindow.on("scroll.stylemeStickyBox",function(){if(1e3<thisWindow.scrollTop()){thisWindow.off("scroll.stylemeStickyBox");stickyboxInit()}})}function getCutString(str,maxLen){str=str.replace(/\n/g,"");if(computeStrLen(str)<=maxLen*2){return str}for(var i=maxLen;i<str.length;i++){var shortStr=str.substr(0,i);if(computeStrLen(shortStr)>maxLen*2){return str.substr(0,i-1)+"..."}}function computeStrLen(str){return encodeURIComponent(str).replace(/(%[A-F\d]{2}){3}/g,"UU").length}}})(jQuery);
