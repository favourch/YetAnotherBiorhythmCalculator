/* share42.com | 10.11.2013 | (c) Dimox */
(function($){$(function(){$('div.share42init').each(function(idx){var el=$(this),u=el.attr('data-url'),t=el.attr('data-title'),i=el.attr('data-image'),d=el.attr('data-description'),f=el.attr('data-path'),z=el.attr("data-zero-counter"),m1=el.attr('data-top1'),m2=el.attr('data-top2')*1,m3=el.attr('data-margin');if(!u)u=location.href;if(!z)z=0;function dlcs_count(url){var shares;$.getJSON('http://feeds.delicious.com/v2/json/urlinfo/data?callback=?&url='+url,function(data){shares=data[0]?data[0].total_posts:0;if(shares>0||z==1)el.find('a[data-count="dlcs"]').after('<span class="share42-counter">'+shares+'</span>')})}dlcs_count(u);function fb_count(url){var shares;$.getJSON('http://graph.facebook.com/?callback=?&ids='+url,function(data){shares=data[url].shares||0;if(shares>0||z==1)el.find('a[data-count="fb"]').after('<span class="share42-counter">'+shares+'</span>')})}fb_count(u);function lnkd_count(url){var shares;$.getJSON('http://www.linkedin.com/countserv/count/share?callback=?&url='+url,function(data){shares=data.count;if(shares>0||z==1)el.find('a[data-count="lnkd"]').after('<span class="share42-counter">'+shares+'</span>')})}lnkd_count(u);function pin_count(url){var shares;$.getJSON('http://api.pinterest.com/v1/urls/count.json?callback=?&url='+url,function(data){shares=data.count;if(shares>0||z==1)el.find('a[data-count="pin"]').after('<span class="share42-counter">'+shares+'</span>')})}pin_count(u);function twi_count(url){var shares;$.getJSON('http://urls.api.twitter.com/1/urls/count.json?callback=?&url='+url,function(data){shares=data.count;if(shares>0||z==1)el.find('a[data-count="twi"]').after('<span class="share42-counter">'+shares+'</span>')})}twi_count(u);if(!f){function path(name){var sc=document.getElementsByTagName('script'),sr=new RegExp('^(.*/|)('+name+')([#?]|$)');for(var i=0,scL=sc.length;i<scL;i++){var m=String(sc[i].src).match(sr);if(m){if(m[1].match(/^((https?|file)\:\/{2,}|\w:[\/\\])/))return m[1];if(m[1].indexOf("/")==0)return m[1];b=document.getElementsByTagName('base');if(b[0]&&b[0].href)return b[0].href+m[1];else return document.location.pathname.match(/(.*[\/\\])/)[0]+m[1];}}return null;}f=path('share42.js');}if(!t)t=document.title;if(!d){var meta=$('meta[name="description"]').attr('content');if(meta!==undefined)d=meta;else d='';}if(!m1)m1=150;if(!m2)m2=20;if(!m3)m3=0;u=encodeURIComponent(u);t=encodeURIComponent(t);t=t.replace(/\'/g,'%27');i=encodeURIComponent(i);d=encodeURIComponent(d);d=d.replace(/\'/g,'%27');var fbQuery='u='+u;if(i!='null'&&i!='')fbQuery='s=100&p[url]='+u+'&p[title]='+t+'&p[summary]='+d+'&p[images][0]='+i;var s=new Array('"#" data-count="fb" onclick="window.open(\'http://www.facebook.com/sharer.php?'+fbQuery+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Share on Facebook"','"#" onclick="window.open(\'https://plus.google.com/share?url='+u+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Share on Google+"','"#" data-count="twi" onclick="window.open(\'https://twitter.com/intent/tweet?text='+t+'&url='+u+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Share on Twitter"','"#" data-count="lnkd" onclick="window.open(\'http://www.linkedin.com/shareArticle?mini=true&url='+u+'&title='+t+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=600, height=400, toolbar=0, status=0\');return false" title="Share on Linkedin"','"#" onclick="print();return false" title="Print"','"#" onclick="return up()" title="Back on top"','"#" onclick="window.open(\'http://www.blogger.com/blog_this.pyra?t&u='+u+'&n='+t+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="BlogThis!"','"#" data-count="dlcs" onclick="window.open(\'http://delicious.com/save?url='+u+'&title='+t+'&note='+d+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=710, height=660, toolbar=0, status=0\');return false" title="Save to Delicious"','"http://digg.com/submit?url='+u+'" title="Share on Digg"','"https://www.evernote.com/clip.action?url='+u+'&title='+t+'" title="Share on Evernote"','"#" onclick="window.open(\'http://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk='+u+'&title='+t+'&annotation='+d+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=500, toolbar=0, status=0\');return false" title="Save to Google Bookmarks"','"#" data-count="pin" onclick="window.open(\'http://pinterest.com/pin/create/button/?url='+u+'&media='+i+'&description='+t+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=600, height=300, toolbar=0, status=0\');return false" title="Pin It"','"http://reddit.com/submit?url='+u+'&title='+t+'" title="Share on Reddit"','"http://www.stumbleupon.com/submit?url='+u+'&title='+t+'" title="Share on StumbleUpon"','"http://technorati.com/faves?add='+u+'&title='+t+'" title="Share on Technorati"','"#" onclick="window.open(\'http://www.tumblr.com/share?v=3&u='+u+'&t='+t+'&s='+d+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=450, height=440, toolbar=0, status=0\');return false" title="Share on Tumblr"','"#" onclick="window.open(\'http://bookmarks.yahoo.com/toolbar/savebm?u='+u+'&t='+t+'&d='+d+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=400, toolbar=0, status=0\');return false" title="Save to Yahoo! Bookmarks"');var l='';var iNum=17;var iShow=6;var iPages=Math.ceil(iNum/iShow);for(j=0;j<s.length;j++){var s42s='';if((j+1)%iShow==0){s42s='</div><div class="s42s">';}l+='<span class="share42-item" style="display:block;white-space:no-wrap;margin:0 0 6px;height:32px;"><a rel="nofollow" style="display:inline-block;vertical-align:top;width:32px;height:32px;margin:0;padding:0;outline:none;background:url('+f+'icons.png) -'+32*j+'px 0 no-repeat" href='+s[j]+' target="_blank"></a></span>'+s42s;};el.html('<div id="share42" style="position:fixed;z-index:9999;margin-left:'+m3+'px"><div class="s42s">'+l+'</div></div><style>#share42 a.s42a.t{background-position: -'+32*17+'px 50% !important}</style>'+'<style>.share42-counter{display:inline-block;vertical-align:top;margin-left:9px;position:relative;background:#FFF;color:#666;} .share42-counter:before{content:"";position:absolute;top:0;left:-8px;width:8px;height:100%;} .share42-counter{padding:0 8px 0 4px;font:14px/32px Arial,sans-serif;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAgCAYAAADkK90uAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALVJREFUeNrs200KQiEUQGENnNesfbjA1hAEb1OO3rQ3FfxbgGBkXqI1aHAOXMTp/aaqnXNd0azeY44x25i7tbbrPmIv86q1qhijKqXI9QzIInnvVQjhBsgitdbUvu/hxCrWyBgjxxWQxQIEEAIEEAIEEAIEEAIEEAKEAAGEAAGEAAGEAAGEACFAACFA/jZ5KDeKgCxSSkmOjaekk5PH1jnnH8hF8x1harL7p/p+R3hYa18fAQYA49lEn38pVB4AAAAASUVORK5CYII=) 100% 0;} .share42-counter:before{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAgCAYAAAAv8DnQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALRJREFUeNrck8EJAyEQRZ1gBR4ExXtSVLaAVJQC0s56TgOi4MEKlImzSWDdiEmu+2EQ/U+dcRAQkW1lrT3V4VLjzDvmEQDuxhgmhGAfAO0kU0q5TA4dYKKdb/UAwTkfAo12CNRnRq11S1CzKOZ5Ru89bjU08ZtJ+ilJqCewEEIXALqGTLqGKlBKNcDS19cinYSreVvmuqK/k9wnkHLOQ+CWUhoCV+ccizGyUsqzWYPvPz0EGADHGK9qjbXCqgAAAABJRU5ErkJggg==)}</style>');var a='<a href="#" class="s42a" style="display:block;width:32px;height:10px;margin:-2px 0 4px;background:url('+f+'icons.png) -'+18*32+'px 50%;outline:none"></a>';var d='#share42 a.s42a';var l='#share42 div.s42s';$(l+':first').append(a);$(l+':not(:first)').css({display:'none'});if($(l).length>iPages)$(l+':last').remove();function ac(){$(d+':first-child').addClass('t');$(d+':last-child').addClass('b');};function r(){$(d).not(':visible').remove();};$('#share42').delegate('a.s42a:not(.t)','click',function(){var p=$(this).parent();r();p.animate({height:'hide'},300).next().not(':last-child').prepend(a).append(a);p.next(':last-child').prepend(a);ac();p.next().animate({height:'show'},300);return false;});$('#share42').delegate('a.s42a.t','click',function(){var p=$(this).parent();r();p.animate({height:'hide'},300).prev().not(':first-child').prepend(a).append(a);p.prev(':first-child').append(a);ac();p.prev().animate({height:'show'},300);return false;});var p=$('#share42');function m(){var top=$(window).scrollTop();if(top+m2<m1){p.css({top:m1-top});}else{p.css({top:m2});}}m();$(window).scroll(function(){m();})});})})(jQuery);function up(){var j=jQuery.noConflict();j('body,html').animate({scrollTop:0},500);return false;};