/*! BitsyCode v1.0.1 | (c) 2016, Riaz Sabjee. | bitsycode.com/license, (do not remove this) */
(function(){function a(c){if(!(this instanceof a))return new a(c);0>bitsyCode.isType(c,!0).indexOf("string")&&(c=[c]);if(Array.isArray(c))this.nodes=c;else if(this.nodes=[],"string"==typeof c){c=document.querySelectorAll(c);for(var b=0;b<c.length;b++)this.nodes[b]=c[b]}}var b,d={_12hour:!1,all:!1,allowPadding:!0,any:!1,array:[],attachStyle:"",bgcolor:"",callback:function(){},classStyle:"",container:"",content:"",css3:!1,decimals:2,decimals_point:".",device:"",dimensions:30,direction:"",exact:!1,html:"",
thousands_sep:",",effects:"",forecolor:"",format:"",family:"",html5:!1,key:"",min:2,max:2,position:"",size:2,speed:2E4,thickness:10,UA:"",value:"",padWith:"0",width:0};$bc_utility={padZero:function(c){return 2>c.toString().length?"0"+c:c}};a.init=function(c){var b={};c=[d,c];for(var a=0;a<=c.length;a++)for(var f in c[a])b[f]=c[a][f];return b};a.error=function(c){"undefined"===typeof console&&(console={log:function(){}});console.log(c)};a.ready=function(c,b){/in/.test(document.readyState)?setTimeout("bitsyCode.ready("+
c+", "+b+")",9):c.call(this,b)};a.replace=function(c,a){bitsyCode.isType(a)&&(b=a);return c.replace(/\s/g,b)};a.trim=function(c){try{return c.replace(/^\s+|\s+$/g,"")}catch(b){}return c};a.dateCheck=function(c){"string"==bitsyCode.isType(c)&&(c=new Date(c));return c.getTime()===c.getTime()};a.smallCase=function(c){return String(c).toLowerCase()};a.upperCase=function(c){return String(c).toUpperCase()};a.isArray=function(c){return Array.isArray(c)};a.getMonthName=function(c){return"January February March April May June July August September October November December".split(" ")[c-
1]};a.getDayName=function(c){return"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")[c]};a.now=function(c){var b=this.init(c);c=Date.now();var a=new Date(0==b.value.length?c:b.value),d="";return(0==b.format.length?"%d-%M-%Y %H:%m:%s":b.format).replace(/%Y|%M{1,}|%MM{2,}|%d|%H|%m|%s|%p/gi,function(c){switch(c){case "%Y":return a.getUTCFullYear();case "%M":return $bc_utility.padZero(a.getMonth()+1);case "%MM":return bitsyCode.getMonthName(a.getMonth()+1);case "%D":return bitsyCode.getDayName(a.getDay());
case "%d":return $bc_utility.padZero(a.getDate());case "%H":return d="00"!=a.getHours()?b._12hour?a.getHours()-12:a.getHours():12,$bc_utility.padZero(d);case "%m":return $bc_utility.padZero(a.getMinutes());case "%s":return $bc_utility.padZero(a.getSeconds());case "%p":return 11<a.getHours()&&"00"!=a.getHours()?"pm":"am";default:bitsyCode.error("Unsupported date format code: "+c)}})};a.parseHTML=function(c,a){var b=document.implementation.createHTMLDocument();b.body.innerHTML=c;return a?bitsyCode.toArray(b.body.children):
b.body.children};a.parseJSON=function(c){return JSON.parse(c)};a.isType=function(c,a){return a?Object.prototype.toString.call(c).replace(/^\[object (.+)\]$/,"$1").toLowerCase():"undefined"!=typeof c&&0!=typeof c&&null!=c?!0:!1};a.pad=function(c,a){var b=this.init(a);0==b.direction.length&&(b.direction="left");for(;c.length<b.size;)c="left"==bitsyCode.smallCase(b.direction)?b.padWith+c:c+b.padWith;return c};a.toArray=function(c){var b=[];c.length=Object.keys(c).length;c=Array.prototype.slice.call(c);
for(var a=0;a<c.length;a++)bitsyCode.isType(c[a])&&b.push(c[a]);return b};a.size=function(c){var a=0;switch(bitsyCode.type(c)){case "object":a=Object.keys(c).length;break;case "string":a=bitsyCode.trim(c).length;break;case "array":a=c.length}return a};a.animation={};a.fn=a.prototype={hide:function(){for(var c=0;c<this.nodes.length;c++)this.nodes[c].style.display="none";return this},show:function(){for(var c=0;c<this.nodes.length;c++)this.nodes[c].style.display="";return this},remove:function(){for(var c=
0;c<this.nodes.length;c++)this.nodes[c].parentNode.removeChild(this.nodes[c]);return this},attr:function(c,a){for(var b=0;b<this.nodes.length;b++){if(bitsyCode.isType(c)&&!bitsyCode.isType(a))return this.nodes[b].getAttribute(c);this.nodes[b].setAttribute(c,a)}return this},addClass:function(c){for(var a=0;a<this.nodes.length;a++)this.nodes[a].classList?this.nodes[a].classList.add(c):this.nodes[a].className+=" "+c;return this},hasClass:function(c){return this.nodes[0].classList?this.nodes[0].classList.contains(c):
(new RegExp("(^| )"+c+"( |$)","gi")).test(this.nodes[0].className)},removeClass:function(c){for(var a=0;a<this.nodes.length;a++)this.nodes[a].classList?this.nodes[a].classList.remove(c):this.nodes[a].className=this.nodes[0].className.replace(new RegExp("(^|\\b)"+c.split(" ").join("|")+"(\\b|$)","gi")," ");return this},empty:function(){for(var c=0;c<this.nodes.length;c++)this.nodes[c].innerHTML="";return this},html:function(c){for(var a=0;a<this.nodes.length;a++)if(bitsyCode.isType(c))this.nodes[a].innerHTML=
c;else if(0<bitsyCode.trim(this.nodes[a].innerHTML))return this.nodes[a].innerHTML;return this},text:function(c){for(var a=0;a<this.nodes.length;a++)if(bitsyCode.isType(c))this.nodes[a].textContent=c;else if(0<bitsyCode.trim(this.nodes[a].textContent).length)return this.nodes[a].textContent},replaceWith:function(a){for(var b=0;b<this.nodes.length;b++)this.nodes[b].outerHTML=a;return this},offset:function(){var a=this.nodes[0].getBoundingClientRect();return{top:a.top+document.body.scrollTop,left:a.left+
document.body.scrollLeft}},outerHeight:function(a){if(a){a=this.nodes[0].offsetHeight;var b=getComputedStyle(this.nodes[0]);return a+=parseInt(b.marginTop)+parseInt(b.marginBottom)}return this.nodes[0].offsetHeight},outerWidth:function(a){if(a){a=this.nodes[0].offsetWidth;var b=getComputedStyle(this.nodes[0]);return a+=parseInt(b.marginLeft)+parseInt(b.marginRight)}return this.nodes[0].offsetWidth},position:function(){return{top:this.nodes[0].offsetTop,left:this.nodes[0].offsetLeft}},append:function(a){for(var b=
0;b<this.nodes.length;b++)if(RegExp("head","ig").test(this.nodes[b])){var d=document.createElement("div");d.innerHTML=a;document.head.appendChild(d)}else"string"==bitsyCode.isType(a,!0)?this.nodes[b].innerHTML=a+this.nodes[b].innerHTML:this.nodes[b].appendChild(a);return this},prepend:function(a){for(var b=0;b<this.nodes.length;b++)if(RegExp("head","ig").test(this.nodes[b])){var d=document.createElement("div");d.innerHTML=a;document.head.appendChild(d)}else"string"==bitsyCode.isType(a,!0)?this.nodes[b].innerHTML=
a+this.nodes[b].innerHTML:this.nodes[b].insertBefore(a,this.nodes[b].firstChild);return this},has:function(a){return null!==this.nodes[0].querySelector(a)},findAll:function(a){return Array.prototype.slice.call(this.nodes[0].querySelectorAll(a))},find:function(b){return new a(this.nodes[0].querySelector(b))},val:function(a){if(bitsyCode.isType(a)&&bitsyCode.isType(this.nodes[0]))this.nodes[0].value=a;else if(0<this.nodes.length&&bitsyCode.isType(this.nodes[0].value))return this.nodes[0].value;return this},
click:function(a,b){for(var d=bitsyCode.toArray(this.nodes),f=0;f<d.length;f++)d[f].addEventListener("click",function(){a.call(this,b)},!1);return this},blur:function(a,b){for(var d=bitsyCode.toArray(this.nodes),f=0;f<d.length;f++)d[f].addEventListener("blur",function(){a.call(this,b)},!1);return this},onfocus:function(a,b){for(var d=bitsyCode.toArray(this.nodes),f=0;f<d.length;f++)d[f].addEventListener("focus",function(){a.call(this,b)},!1);return this},scroll:function(a,b){for(var d=bitsyCode.toArray(this.nodes),
f=0;f<d.length;f++)d[f].addEventListener("scroll",function(){a.call(this,b)},!1);return this}};a.prototype.parent=function(){return new a(this.nodes[0].parentNode)};a.prototype.next=function(){return new a(this.nodes[0].nextElementSibling)};a.prototype.prev=function(){return new a(this.nodes[0].previousElementSibling)};a.prototype.first=function(){return new a(this.nodes[0].children[0])};a.prototype.last=function(){return new a(this.nodes[0].lastElementChild)};a.prototype.focus=function(){this.nodes[0].focus();
return new a(this.nodes[0])};window.bitsyCode=window.$bc=a})();(function(){bitsyCode.browser=function(){var a={};a.codeName=navigator.appCodeName;a.name=navigator.appName;a.version=navigator.appVersion;a.agent=navigator.userAgent;a.platform=navigator.platform;a.engine=navigator.product;a.cookies=navigator.cookieEnabled;a.language=navigator.language;a.javaEnable=navigator.javaEnabled();a.online=navigator.onLine;return a}})();
(function(){bitsyCode.browserfeature=function(a){var b={};b.animation=window.requestAnimationFrame?!0:!1;b.applicationCache=window.applicationCache?!0:!1;b.audio=document.createElement("audio").canPlayType?!0:!1;b.canvas=document.createElement("canvas").getContext?!0:!1;var d=document.createElement("canvas").getContext("2d");b.canvasText="function"==typeof d.fillText;b.classListAPI="undefined"!=typeof document.documentElement.classList?!0:!1;b.crossDomainRequests="withCredentials"in new XMLHttpRequest?
!0:!1;b.dragdrop="draggable"in document.createElement("span")?!0:!1;b.eventListener="function"==typeof document.addEventListener?!0:!1;b.formData=window.FormData?!0:!1;b.geoLocation=navigator.geolocation?!0:!1;b.historyAPI=window.history&&history.pushState?!0:!1;b.indexedDB=window.indexedDB?!0:!1;b.input_autofocus="autofocus"in document.createElement("input")?!0:!1;var d="search number range color tel url email date month week time datetime datetime-local".split(" "),c;for(c in d){var e=document.createElement("input");
e.setAttribute("type",d[c]);b["input_"+d[c]]="text"!==e.type?!0:!1}b.isContentEditable="isContentEditable"in document.createElement("span")?!0:!1;b.localStorage="localStorage"in window&&null!==window.localStorage;b.microdata=document.getItems?!0:!1;b.placeholder="placeholder"in document.createElement("input")?!0:!1;b.querySelectorAll="undefined"!=typeof document.querySelectorAll?!0:!1;b.serversent="undefined"!==typeof EventSource?!0:!1;b.tag_meter="value"in document.createElement("meter")?!0:!1;b.tag_output=
"value"in document.createElement("output")?!0:!1;b.tag_progress="value"in document.createElement("progress")?!0:!1;b.touch="ontouchstart"in document.documentElement?!0:!1;b.video=document.createElement("video").canPlayType?!0:!1;b.webGL=document.createElement("canvas").getContext("webgl")||document.createElement("canvas").getContext("experimental-webgl")?!0:!1;b.webSQL=window.openDatabase?!0:!1;b.webSockets=window.WebSocket?!0:!1;b.webWorker=window.Worker?!0:!1;if(bitsyCode.isType(a))try{return b[a]}catch(g){bitsyCode.error(a+
" is not found.")}else return b}})();
(function(){bitsyCode.animation.circles=function(d){d=$bc.mergeobjects([{bgcolor:"#FFFFFF",container:"",dimensions:30,max:10,speed:1E4},d]);bitsyCode.css(d.container+" { position: relative }",{inline:!0});bitsyCode("head").append('<style type="text/css">.bitsy_floating_circle { background-color:'+d.bgcolor+"; position:absolute; border-radius:50%; z-index:0 } </style>");for(var c=1;c<=d.max;c++){var e=Math.floor(8*Math.random())+1,g=Math.floor(Math.random()*d.dimensions)+5,f=b(d.container);bitsyCode(d.container).append('<div class="bitsy_floating_circle bitsy_floating_circle_'+
c+'"></div>');bitsyCode.css(".bitsy_floating_circle_"+c+" { opacity:0."+e+"; width:"+g+"px; height:"+g+"px; top:"+f[0]+"px; left: "+f[1]+"px }",{inline:!0})}a(d.container,d)};var a=function(d,c,e){for(var g=bitsyCode(".bitsy_floating_circle").nodes,f=1;f<=g.length;f++)d=b(c),jQuery(g[f]).animate({top:d[0],left:d[1]},e.speed,function(){a(g[f],c,e)})},b=function(a){a=document.querySelector(a);return[Math.floor(Math.random()*(a.offsetHeight-50)),Math.floor(Math.random()*(a.offsetWidth-50))]}})();
(function(){bitsyCode.css=function(b,d){d=bitsyCode.mergeobjects([{rel:"stylesheet",type:"text/css",media:"",crossorigin:"",hreflang:"",inline:!1},d]);var c=function(b,c){var d=document.getElementsByTagName("head")[0];if(c.inline){var e=document.createElement("style"),e=a(e,c);e.innerHTML=b;d.appendChild(e)}else{-1<bitsyCode.isType(b,!0).indexOf("string")&&(b=[b]);for(var k=0;k<b.length;k++)e=document.createElement("link"),e=a(e,c),e.href=b[k],d.appendChild(e)}},e=requestAnimationFrame||mozRequestAnimationFrame||
webkitRequestAnimationFrame||msRequestAnimationFrame;e?e(function(){c(b,d)}):window.addEventListener("load",function(){c(b,d)})};var a=function(a,d){0<bitsyCode.trim(d.rel).length&&(a.rel=d.rel);0<bitsyCode.trim(d.type).length&&(a.type=d.type);0<bitsyCode.trim(d.media).length&&(a.media=d.media);0<bitsyCode.trim(d.crossorigin).length&&(a.crossorigin=d.crossorigin);0<bitsyCode.trim(d.hreflang).length&&(a.hreflang=d.hreflang);return a}})();
(function(){bitsyCode.datescompare=function(a,b){if(0<a.length&&0<b.length){date1Match=a.indexOf("-");date2Match=b.indexOf("-");a=-1<date1Match?a.split("-"):a.split("/");b=-1<date2Match?b.split("-"):b.split("/");var d=bitsyCode.pad(a[2]),c=bitsyCode.pad(a[1]),e=a[0],g=bitsyCode.pad(b[2]),f=bitsyCode.pad(b[1]),l=b[0],h=new Date(e+"-"+c+"-"+d),k=new Date(l+"-"+f+"-"+g),m="";bitsyCode.dateCheck(h)&&bitsyCode.dateCheck(k)?(m={},m.less=h<k,m.greater=h>k,m.lessequal=+h<=+k,m.greaterequal=+h>=+k,m.equal=
+h===+k,m.daysdiff=Math.round((k-h)/864E5)):bitsyCode.dateCheck(h)?bitsyCode.error("bitsycode('datescompare') Invalid Date 2 entered: "+l+"-"+f+"-"+g):bitsyCode.error("bitsycode('datescompare') Invalid Date 1 entered: "+e+"-"+c+"-"+d)}return m}})();(function(){bitsyCode.email=function(a){return{value:a,valid:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)}}})();
(function(){bitsyCode.goUp=function(b){b=$bc.mergeobjects([{classStyle:"",content:"&#x21E1;",position:"bottom",speed:"fast"},b]);var d=bitsyCode.smallCase(b.position);bitsyCode("body").append('<div class="bitsyUp bitsyUp'+d+" "+b.classStyle+'"><button class="bitsy_goUp">'+b.content+"</button></div>");bitsyCode(bitsyCode("body").find(".bitsy_goUp")).click(a,b);window.onscroll=function(){100<document.body.scrollTop||100<document.documentElement.scrollTop?bitsyCode(".bitsyUp").addClass("bitsyUpfixed"):
bitsyCode(".bitsyUp").removeClass("bitsyUpfixed")}};var a=function(b){var d=null;0!=document.body.scrollTop||0!=document.documentElement.scrollTop?(d=-50,"slow"==String(b.speed).toLowerCase()&&(d=-10),window.scrollBy(0,d),d=setTimeout(function(){a(b)},10)):clearTimeout(d)}})();
(function(){bitsyCode.google=function(a,b){var d=$bc.mergeobjects([{effects:"",family:""},b]);switch(a){case "googlefonts":bitsyCode.googlefonts(d);break;case "googleanalytics":bitsyCode.googleanalytics(b)}};bitsyCode.googlefonts=function(a){var b="",d="",c=a.effects.split("|"),e=a.family.split("|");if(1<e.length)for(var g=0;g<e.length;g++)b+=this.replace(bitsyCode.trim(e[g]),"+"),g+1!=e.length&&(b+="|");else b=a.family;if(0<bitsyCode.trim(a.effects).length&&bitsyCode.isType(a.effects))for(d+="&effect=",
g=0;g<c.length;g++)d+=c[g],g+1!=c.length&&(d+="|");jQuery("head").append('<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family='+b+d+'" />');return this};bitsyCode.googleanalytics=function(a){a="var _gaq = _gaq || [];"+("  _gaq.push(['_setAccount', '"+a+"']);")+"  _gaq.push(['_trackPageview']);";a+="  (function() {";a+="    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;";a+="    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';";
a+="    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);";a+="  })();";bitsyCode("body").append('<script type="text/javascript">'+a+"\x3c/script>");return this}})();(function(){bitsyCode.hashtag=function(a){return bitsyCode.isType(a)?location.hash=a:location.hash}})();
(function(){bitsyCode.inarray=function(a,b){for(var d=$bc.mergeobjects([{any:!1,array:[],exact:!1},b]),c=d.array,e=!1,g=0,f=[],l=bitsyCode.smallCase(a),h=0;h<=c.length;h++)if("undefined"!=typeof c[h]&&0!=typeof c[h]){var k=bitsyCode.smallCase(bitsyCode.trim(c[h])),m={string:c[h],position:h+1};d.exact&&!d.any&&(l=a,k=bitsyCode.trim(c[h]));l!=k||d.any?d.any&&-1<k.indexOf(l)&&(f.push(m),e=!0,g++):(f.push(m),e=!0,g++)}return{found:e,count:g,matches:f}}})();
(function(a){a.fn.extend({bitsyCode:function(b,d){if(bitsyCode[b]&&!bitsyCode.fn[b])a.error('(Call Error): The method needs to be called WITHOUT selector eg. jQuery.bitsyCode("'+b+'", {}); ');else if(!bitsyCode[b]&&!bitsyCode.fn[b])a.error("Method: "+b+" does not exist on the BitsyCode framework");else if(bitsyCode.fn[b])bitsyCode(this.selector)[b](d)}});a.extend({bitsyCode:function(b,d){if(!bitsyCode[b]&&bitsyCode.fn[b])a.error('(Call Error): The method needs to be called WITH a selector eg. jQuery("YourElement").bitsyCode("'+
b+'", {}); ');else if(!bitsyCode[b]&&!bitsyCode.fn[b])a.error("Method: "+b+" does not exist on the BitsyCode framework");else if(bitsyCode[b])bitsyCode[b](d)}})})(jQuery);
(function(){bitsyCode.js=function(a,b){b=bitsyCode.mergeobjects([{async:!1,charset:"",defer:!1,type:"text/javascript",inline:!1},b]);var d=function(a,b){var c=document.getElementsByTagName("body")[0];if(b.inline){var d=document.createElement("script");sheet=e(d,b);d.innerHTML=a;c.appendChild(d)}else{-1<bitsyCode.isType(a,!0).indexOf("string")&&(a=[a]);for(var k=0;k<a.length;k++)d=document.createElement("script"),d=e(d,b),d.src=a[k],c.appendChild(d)}},c=requestAnimationFrame||mozRequestAnimationFrame||
webkitRequestAnimationFrame||msRequestAnimationFrame;c?c(function(){d(a,b)}):window.addEventListener("load",function(){d(a,b)});var e=function(a,b){b.async&&a.setAttribute("async","");0<bitsyCode.trim(b.charset).length&&a.setAttribute("charset",b.charset);b.defer&&a.setAttribute("defer","");a.type=b.type;return a}}})();
(function(){bitsyCode.jsondate=function(a,b){var d=$bc.mergeobjects([{format:"/"},b]).format,c=bitsyCode.smallCase(a),e=/date\(([^)]+)\)/,e=e.exec(c);e||(e=/([^)]+)/,e=e.exec(c));null!=e&&0!=typeof e?(c=new Date(parseFloat(e[1])),d=c.getMonth()+1+d+c.getDate()+d+c.getFullYear()):d="Invalid .NET JSON date.";return d}})();(function(){bitsyCode.mergeobjects=function(a){for(var b={},d=0;d<=a.length;d++)for(var c in a[d])b[c]=a[d][c];return b}})();
(function(){bitsyCode.mobilenumber=function(a){var b=bitsyCode.trim(a).search(/^(071|072|073|074|075|076|077|078|079|082|083|084|085|061|081|27)/i),d=a.search(/^(27)/i),b=0>b?!1:!0;10>bitsyCode.trim(a).length||-1<d&&11>bitsyCode.trim(a).length?b=!1:10<bitsyCode.trim(a).length&&(b=!1,-1<d&&(11==bitsyCode.trim(a).length?b=!0:11<bitsyCode.trim(a).length&&(b=!1)));return b}})();
(function(){bitsyCode.numberformat=function(a,b){var d=$bc.mergeobjects([{decimals:2,decimals_point:".",thousands_sep:","},b]),c=d.decimals,e=d.decimals_point,d=d.thousands_sep,g=a=a.replace(/(\.|,|\s)/gi,""),c=isNaN(c=Math.abs(c))?2:c,f=0>g?"-":"",l=parseInt(g=Math.abs(+g||0).toFixed(c))+"",h=3<(h=l.length)?h%3:0;return f+(h?l.substr(0,h)+d:"")+l.substr(h).replace(/(\d{3})(?=\d)/g,"$1"+d)+(c?e+Math.abs(g-l).toFixed(c).slice(2):"")}})();
(function(){bitsyCode.fn.placeholder=function(a){for(a=0;a<this.nodes.length;a++)bitsyCode(this.nodes[a]).attr("data-placeholder",this.nodes[a].value).addClass("bitsy_placeholder");bitsyCode(".bitsy_placeholder").click(function(){this.value==bitsyCode(this).attr("data-placeholder")&&(this.value="")});bitsyCode(".bitsy_placeholder").blur(function(){if(""==this.value||0==bitsyCode(this).val().length)this.value=bitsyCode(this).attr("data-placeholder")});return this}})();
(function(){bitsyCode.querystring=function(a){var b,d=decodeURIComponent(this.trim(window.location.search)).replace(/\s/g,"");if("object"==typeof a){if($bc.mergeobjects([{all:!1},a]).all)for(a=d.substring(d.indexOf("?")+1).split("&"),d=0,b={};d<a.length;d++)a[d]=a[d].split("="),b[a[d][0]]=decodeURIComponent(a[d][1])}else b=RegExp("[?&]"+a+"=([^&]*)").exec(d),null==b?b="Query string not found.":b=b[1];return b}})();
(function(){bitsyCode.fn.repetition=function(a){a=$bc.mergeobjects([{min:2},a]);for(var b=!1,d=[],c=0;c<this.nodes.length;c++)b=this.nodes[c].value.match(new RegExp("(.)\\1{"+a.min+",}")),d.push(null===b?!1:!0);2>this.nodes.length&&(d=d[0]);return d}})();
(function(){bitsyCode.scrolline=function(b){var d=$bc.mergeobjects([{allowPadding:!0,bgcolor:"#d9d9d9",forecolor:"green",position:"top",thickness:10},b]),c=b="",e=bitsyCode.smallCase(d.position),g=d.bgcolor,f=d.forecolor,l;l="html, body { height:100% }"+(".bitsy_scrolline { height:"+d.thickness+"px; width:100%; }\n");l+=".bitsy_scrolline_progress { height:100%; width:0px; }\n";switch(e){case "top":b=b+" .bitsy_scrolline { top:0; }\n"+l;c="padding-top";break;case "left":b+=" .bitsy_scrolline { top:0; left:0; width:"+
d.thickness+"px; height:100%; }\n";b+=" .bitsy_scrolline_progress { height:0; width:100%; }\n";c="padding-left";break;case "bottom":b+=" .bitsy_scrolline { left:0; bottom:0; }",b+=l,c="margin-bottom"}b+=" .bitsy_scrolline { position:fixed; background-color:"+g+"; z-index:9999 } ";b+=" .bitsy_scrolline_progress { display:block; background-color:"+f+"; } ";d.allowPadding&&(d.thickness="bottom"==e?d.thickness:2*parseInt(d.thickness),jQuery("body").css(c,d.thickness+"px"));d=document.createElement("style");
d.type="text/css";d.innerHTML=b;bitsyCode("head").append(d);bitsyCode("body").prepend('<div class="bitsy_scrolline"><span class="bitsy_scrolline_progress"></span></div>');jQuery(window).scroll(function(){a(e)})};var a=function(a){bitsyCode.ready(function(){var d=100*jQuery(window).scrollTop()/(jQuery(document).height()-jQuery(window).height());switch(a){case "top":case "bottom":jQuery(".bitsy_scrolline_progress").width(d+"%");break;case "left":jQuery(".bitsy_scrolline_progress").height(d+"%")}})}})();
(function(){bitsyCode.smartCheck=function(a){a=$bc.mergeobjects([{device:""},a]);a=bitsyCode.smallCase(a.device.trim());var b={},d=bitsyCode.smallCase(navigator.userAgent.trim());b.browser="";b.detected=!1;mobile="iphone;ipad;ipod;ios;android;blackberry;nokia;opera mini;windows mobile;windows phone;iemobile;webos;zune".split(";");for(var c=0;c<mobile.length;c++){var e=new RegExp(mobile[c],"ig");d.match(e)&&0==a.length?(b.browser=mobile[c],b.detected=!0):d.match(e)&&0<a.length&&(b.browser=mobile[a],
b.detected=!0)}return b}})();
(function(){bitsyCode.fn.sticky=function(a){a=$bc.mergeobjects([{attachStyle:""},a]);for(var b=0;b<this.nodes.length;b++){var d=bitsyCode(this.nodes[b]).nodes[b],c=bitsyCode(d).offset().top,e=bitsyCode.trim(a.attachStyle).replace(".","");bitsyCode(window).scroll(function(){(document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop)>=c?(bitsyCode(d).addClass("bitsy_sticky_fix"),0<e.length&&bitsyCode(d).addClass(e)):(bitsyCode(d).removeClass("bitsy_sticky_fix"),0<e.length&&
bitsyCode(d).removeClass(e))})}return this}})();
