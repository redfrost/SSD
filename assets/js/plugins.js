/* jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/ */
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});


/* Smooth Scroll - v1.4.10 - https://github.com/kswedberg/jquery-smooth-scroll */
(function(l){function t(l){return l.replace(/(:|\.)/g,"\\$1")}var e="1.4.10",o={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"easeInOutCubic",speed:800,autoCoefficent:2},r=function(t){var e=[],o=!1,r=t.dir&&"left"==t.dir?"scrollLeft":"scrollTop";return this.each(function(){if(this!=document&&this!=window){var t=l(this);t[r]()>0?e.push(this):(t[r](1),o=t[r]()>0,o&&e.push(this),t[r](0))}}),e.length||this.each(function(){"BODY"===this.nodeName&&(e=[this])}),"first"===t.el&&e.length>1&&(e=[e[0]]),e};l.fn.extend({scrollable:function(l){var t=r.call(this,{dir:l});return this.pushStack(t)},firstScrollable:function(l){var t=r.call(this,{el:"first",dir:l});return this.pushStack(t)},smoothScroll:function(e){e=e||{};var o=l.extend({},l.fn.smoothScroll.defaults,e),r=l.smoothScroll.filterPath(location.pathname);return this.unbind("click.smoothscroll").bind("click.smoothscroll",function(e){var n=this,s=l(this),c=o.exclude,i=o.excludeWithin,a=0,f=0,h=!0,u={},d=location.hostname===n.hostname||!n.hostname,m=o.scrollTarget||(l.smoothScroll.filterPath(n.pathname)||r)===r,p=t(n.hash);if(o.scrollTarget||d&&m&&p){for(;h&&c.length>a;)s.is(t(c[a++]))&&(h=!1);for(;h&&i.length>f;)s.closest(i[f++]).length&&(h=!1)}else h=!1;h&&(e.preventDefault(),l.extend(u,o,{scrollTarget:o.scrollTarget||p,link:n}),l.smoothScroll(u))}),this}}),l.smoothScroll=function(t,e){var o,r,n,s,c=0,i="offset",a="scrollTop",f={},h={};"number"==typeof t?(o=l.fn.smoothScroll.defaults,n=t):(o=l.extend({},l.fn.smoothScroll.defaults,t||{}),o.scrollElement&&(i="position","static"==o.scrollElement.css("position")&&o.scrollElement.css("position","relative"))),o=l.extend({link:null},o),a="left"==o.direction?"scrollLeft":a,o.scrollElement?(r=o.scrollElement,c=r[a]()):r=l("html, body").firstScrollable(),o.beforeScroll.call(r,o),n="number"==typeof t?t:e||l(o.scrollTarget)[i]()&&l(o.scrollTarget)[i]()[o.direction]||0,f[a]=n+c+o.offset,s=o.speed,"auto"===s&&(s=f[a]||r.scrollTop(),s/=o.autoCoefficent),h={duration:s,easing:o.easing,complete:function(){o.afterScroll.call(o.link,o)}},o.step&&(h.step=o.step),r.length?r.stop().animate(f,h):o.afterScroll.call(o.link,o)},l.smoothScroll.version=e,l.smoothScroll.filterPath=function(l){return l.replace(/^\//,"").replace(/(index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},l.fn.smoothScroll.defaults=o})(jQuery);





/* Text and/or Image Crawler Script v1.53 (c)2009-2012 John Davenport Scheuer
   as first seen in http://www.dynamicdrive.com/forums/
   username: jscheuer1 - This Notice Must Remain for Legal Use
   updated: 4/2011 for random order option, more (see below)
   */

/* Update 4/2011 to v1.5 - Adds optional random property. Set it to true to use.
   Fixes browser crash from empty crawlers, ad and image blocking software/routines.
   Fixes behavior in some IE of breaking script if an image is missing.
   Adds alt attributes to images without them to aid in diagnosis of missing/corrupt
   images. This may be disabled with the new optional noAddedAlt property set to true.
   Internal workings enhanced for greater speed of execution, less memory usage.
   */

/* Update 11/2011 - Detect and randomize td elements within a single table with a single tr */

// updated 7/2012 to 1.51 for optional integration with 3rd party initializing scripts -
// ref: http://www.dynamicdrive.com/forums/showthread.php?p=278161#post278161
// updated 8/2012 to 1.52 for greater compatibility with IE in Quirks Mode

/* Update 10/2012 to v1.53 - Adds optional persist property to have the crawler remember its
   position and direction page to page and on page reload. To enable it in the marqueeInit set
   persist: true,
   */

///////////////// No Need to Edit - Configuration is Done in the On Page marqueeInit call(s) /////////////////


function marqueeInit(config){
 if(!document.createElement) return;
 marqueeInit.ar.push(config);
 marqueeInit.run(config.uniqueid);
}

(function(){

 if(!document.createElement) return;
 
 if(typeof opera === 'undefined'){window.opera = false;}

 marqueeInit.ar = [];

 document.write('<style type="text/css">.marquee{white-space:nowrap;overflow:hidden;visibility:hidden;}' +
 '#marq_kill_marg_bord{border:none!important;margin:0!important;}<\/style>');
 var c = 0, tTRE = [/^\s*$/, /^\s*/, /\s*$/, /[^\/]+$/],
 req1 = {'position': 'relative', 'overflow': 'hidden'}, defaultconfig = {
  style: { //default style object for marquee containers without configured style
	'margin': '0 auto'
  },
  direction: 'left',
  inc: 2, //default speed - pixel increment for each iteration of a marquee's movement
  mouse: 'pause' //default mouseover behavior ('pause' 'cursor driven' or false)
 }, dash, ie = false, oldie = 0, ie5 = false, iever = 0;
 
 /*@cc_on @*/
 /*@if(@_jscript_version >= 5)
 ie = true;
 try{document.documentMode = 2000}catch(e){};
 iever = Math.min(document.documentMode, navigator.appVersion.replace(/^.*MSIE (\d+\.\d+).*$/, '$1'));
 if(iever < 6)
  oldie = 1;
 if(iever < 5.5){
  Array.prototype.push = function(el){this[this.length] = el;};
  ie5 = true;
  dash = /(-(.))/;
  String.prototype.encamel = function(s, m){
   s = this;
   while((m = dash.exec(s)))
    s = s.replace(m[1], m[2].toUpperCase());
   return s;
  };
 }
 @end @*/

 if(!ie5){
  dash = /-(.)/g;
  function toHump(a, b){return b.toUpperCase();};
  String.prototype.encamel = function(){return this.replace(dash, toHump);};
 }

 if(ie && iever < 8){
  marqueeInit.table = [];
  window.attachEvent('onload', function(){
   marqueeInit.OK = true;
   var i = -1, limit = marqueeInit.table.length;
   while(++i < limit)
   marqueeInit.run(marqueeInit.table[i]);
  });
 }
 
 function intable(el){
  while((el = el.parentNode))
   if(el.tagName && el.tagName.toLowerCase() === 'table')
    return true;
   return false;
 };

 marqueeInit.run = function(id){
   if(ie && !marqueeInit.OK && iever < 8 && intable(document.getElementById(id))){
    marqueeInit.table.push(id);
    return;
   }
   if(!document.getElementById(id))
    setTimeout(function(){marqueeInit.run(id);}, 300);
   else
    new Marq(c++, document.getElementById(id));
 }

 function trimTags(tag){
  var r = [], i = 0, e;
  while((e = tag.firstChild) && e.nodeType === 3 && tTRE[0].test(e.nodeValue))
   tag.removeChild(e);
  while((e = tag.lastChild) && e.nodeType === 3 && tTRE[0].test(e.nodeValue))
   tag.removeChild(e);
  if((e = tag.firstChild) && e.nodeType === 3)
   e.nodeValue = e.nodeValue.replace(tTRE[1], '');
  if((e = tag.lastChild) && e.nodeType === 3)
   e.nodeValue = e.nodeValue.replace(tTRE[2], '');
  while((e = tag.firstChild))
   r[i++] = tag.removeChild(e);
  return r;
 }

 function randthem(tag){
  var els = oldie? tag.all : tag.getElementsByTagName('*'), i = els.length, childels = [];
  while (--i > -1){
   if(els[i].parentNode === tag){
    childels.push(els[i]);
   }
  }
  childels.sort(function(){return 0.5 - Math.random();});
  i = childels.length;
  while (--i > -1){
   tag.appendChild(childels[i]);
  }
 }

 function Marq(c, tag){
  var p, u, s, a, ims, ic, i, marqContent, cObj = this;
  this.mq = marqueeInit.ar[c];
  if(this.mq.random){
   if(tag.getElementsByTagName && tag.getElementsByTagName('tr').length === 1 && tag.childNodes.length === 1){
    randthem(tag.getElementsByTagName('tr')[0]);
   } else {
   randthem(tag);
   }
  }
  for (p in defaultconfig)
   if((this.mq.hasOwnProperty && !this.mq.hasOwnProperty(p)) || (!this.mq.hasOwnProperty && !this.mq[p]))
    this.mq[p] = defaultconfig[p];
  this.mq.direction = this.mq.persist && this.cookie.get(this.mq.uniqueid)? this.cookie.get(this.mq.uniqueid).split(':')[2] : this.mq.direction;
  this.mq.style.width = !this.mq.style.width || isNaN(parseInt(this.mq.style.width))? '100%' : this.mq.style.width;
  if(!tag.getElementsByTagName('img')[0])
   this.mq.style.height = !this.mq.style.height || isNaN(parseInt(this.mq.style.height))? tag.offsetHeight + 3 + 'px' : this.mq.style.height;
  else
   this.mq.style.height = !this.mq.style.height || isNaN(parseInt(this.mq.style.height))? 'auto' : this.mq.style.height;
  u = this.mq.style.width.split(/\d/);
  this.cw = this.mq.style.width? [parseInt(this.mq.style.width), u[u.length - 1]] : ['a'];
  marqContent = trimTags(tag);
  tag.className = tag.id = '';
  tag.removeAttribute('class', 0);
  tag.removeAttribute('id', 0);
  if(ie)
   tag.removeAttribute('className', 0);
  tag.appendChild(tag.cloneNode(false));
  tag.className = ['marquee', c].join('');
  tag.style.overflow = 'hidden';
  this.c = tag.firstChild;
  this.c.appendChild(this.c.cloneNode(false));
  this.c.style.visibility = 'hidden';
  a = [[req1, this.c.style], [this.mq.style, this.c.style]];
  for (i = a.length - 1; i > -1; --i)
   for (p in a[i][0])
    if((a[i][0].hasOwnProperty && a[i][0].hasOwnProperty(p)) || (!a[i][0].hasOwnProperty))
     a[i][1][p.encamel()] = a[i][0][p];
  this.m = this.c.firstChild;
  if(this.mq.mouse === 'pause'){
   this.c.onmouseover = function(){cObj.mq.stopped = true;};
   this.c.onmouseout = function(){cObj.mq.stopped = false;};
  }
  this.m.style.position = 'absolute';
  this.m.style.left = '-10000000px';
  this.m.style.whiteSpace = 'nowrap';
  if(ie5) this.c.firstChild.appendChild((this.m = document.createElement('nobr')));
  if(!this.mq.noAddedSpace)
   this.m.appendChild(document.createTextNode('\xa0'));
  for(i = 0; marqContent[i]; ++i)
   this.m.appendChild(marqContent[i]);
  if(ie5) this.m = this.c.firstChild;
  ims = this.m.getElementsByTagName('img');
  if(ims.length){
   for(ic = 0, i = 0; i < ims.length; ++i){
    ims[i].style.display = 'inline';
    if(!ims[i].alt && !this.mq.noAddedAlt){
     ims[i].alt = (tTRE[3].exec(ims[i].src)) || ('Image #' + [i + 1]);
     if(!ims[i].title){ims[i].title = '';}
    }
    ims[i].style.display = 'inline';
    ims[i].style.verticalAlign = ims[i].style.verticalAlign || 'top';
    if(typeof ims[i].complete === 'boolean' && ims[i].complete)
     ic++;
    else {
     ims[i].onload = ims[i].onerror = function(){
       if(++ic === ims.length)
        cObj.setup(c);
      };
    }
     if(ic === ims.length)
      this.setup(c);
   }
  }
   else this.setup(c)
 }

  Marq.prototype.setup = function(c){
  if(this.mq.setup) return;
  this.mq.setup = this;
  var s, w, cObj = this, exit = 10000;
  if(this.c.style.height === 'auto')
   this.c.style.height = this.m.offsetHeight + 4 + 'px';
  this.c.appendChild(this.m.cloneNode(true));
  this.m = [this.m, this.m.nextSibling];
  if(typeof this.mq.initcontent === 'function'){
   this.mq.initcontent.apply(this.mq, [this.m]);
  }
  if(this.mq.mouse === 'cursor driven'){
   this.r = this.mq.neutral || 16;
   this.sinc = this.mq.inc;
   this.c.onmousemove = function(e){cObj.mq.stopped = false; cObj.directspeed(e)};
   if(this.mq.moveatleast){
    this.mq.inc = this.mq.moveatleast;
    if(this.mq.savedirection){
     if(this.mq.savedirection === 'reverse'){
      this.c.onmouseout = function(e){
       if(cObj.contains(e)) return;
       cObj.mq.inc = cObj.mq.moveatleast;
       cObj.mq.direction = cObj.mq.direction === 'right'? 'left' : 'right';};     
     } else {
      this.mq.savedirection = this.mq.direction;
      this.c.onmouseout = function(e){
       if(cObj.contains(e)) return;
       cObj.mq.inc = cObj.mq.moveatleast;
       cObj.mq.direction = cObj.mq.savedirection;};     
    }
    } else
     this.c.onmouseout = function(e){if(!cObj.contains(e)) cObj.mq.inc = cObj.mq.moveatleast;};
   }
   else
    this.c.onmouseout = function(e){if(!cObj.contains(e)) cObj.slowdeath();};
  }
  this.w = this.m[0].offsetWidth;
  this.m[0].style.left = this.mq.persist && this.cookie.get(this.mq.uniqueid)? this.cookie.get(this.mq.uniqueid).split(':')[0] : 0;
  this.c.id = 'marq_kill_marg_bord';
  this.m[0].style.top = this.m[1].style.top = Math.floor((this.c.offsetHeight - this.m[0].offsetHeight) / 2 - oldie) + 'px';
  this.c.id = '';
  this.c.removeAttribute('id', 0);
  this.m[1].style.left = this.mq.persist && this.cookie.get(this.mq.uniqueid)? this.cookie.get(this.mq.uniqueid).split(':')[1] : this.w + 'px';
  s = this.mq.moveatleast? Math.max(this.mq.moveatleast, this.sinc) : (this.sinc || this.mq.inc);
  while(this.c.offsetWidth > this.w - s && --exit){
   w = isNaN(this.cw[0])? this.w - s : --this.cw[0];
   if(w < 1 || this.w < Math.max(1, s)){break;}
   this.c.style.width = isNaN(this.cw[0])? this.w - s + 'px' : --this.cw[0] + this.cw[1];
  }
  this.c.style.visibility = 'visible';
  this.runit();
  }
  
 Marq.prototype.slowdeath = function(){
  var cObj = this;
  if(this.mq.inc){
   this.mq.inc -= 1;
   this.timer = setTimeout(function(){cObj.slowdeath();}, 100);
  }
 }

 Marq.prototype.runit = function(){
  var cObj = this, d = this.mq.direction === 'right'? 1 : -1;
  if(this.mq.stopped || this.mq.stopMarquee){
   setTimeout(function(){cObj.runit();}, 300);
   return;
  }
  if(this.mq.mouse != 'cursor driven')
   this.mq.inc = Math.max(1, this.mq.inc);
  if(d * parseInt(this.m[0].style.left) >= this.w)
   this.m[0].style.left = parseInt(this.m[1].style.left) - d * this.w + 'px';
  if(d * parseInt(this.m[1].style.left) >= this.w)
   this.m[1].style.left = parseInt(this.m[0].style.left) - d * this.w + 'px';
  this.m[0].style.left = parseInt(this.m[0].style.left) + d * this.mq.inc + 'px';
  this.m[1].style.left = parseInt(this.m[1].style.left) + d * this.mq.inc + 'px';
  if(window.opera && this.mq.persist){
   this.cookie.set(this.mq.uniqueid, this.m[0].style.left + ':' + this.m[1].style.left + ':' + this.mq.direction);
  }
  setTimeout(function(){cObj.runit();}, 30 + (this.mq.addDelay || 0));
 }

 Marq.prototype.cookie = {
  set: function(n, v, d){ // cook.set takes (name, value, optional_persist_days) - defaults to session if no days specified
   if(d){var dt = new Date(); 
    dt.setDate(dt.getDate() + d);
   d = '; expires=' + dt.toGMTString();}
   document.cookie = n + '=' + escape(v) + (d || '') + '; path=/';
  },
  get: function(n){ // cook.get takes (name)
   var c = document.cookie.match('(^|;)\x20*' + n + '=([^;]*)');
   return c? unescape(c[2]) : null;
  },
  kill: function(n){ // cook.kill takes (name)
   cook.set(n, '', -1);
  },
  killall: function(){ // cook.killall takes no parameters
   var cookies = document.cookie.split(';'), i = cookies.length - 1;
   for (i; i > -1; --i){
    cook.kill(cookies[i].split('=')[0]);
   }
  }
 };

 Marq.prototype.directspeed = function(e){
  e = e || window.event;
  if(this.timer) clearTimeout(this.timer);
  var c = this.c, w = c.offsetWidth, l = c.offsetLeft, mp = (typeof e.pageX === 'number'?
   e.pageX : e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft) - l,
  lb = (w - this.r) / 2, rb = (w + this.r) / 2;
  while((c = c.offsetParent)) mp -= c.offsetLeft;
  this.mq.direction = mp > rb? 'left' : 'right';
  this.mq.inc = Math.round((mp > rb? (mp - rb) : mp < lb? (lb - mp) : 0) / lb * this.sinc);
 }

 Marq.prototype.contains = function(e){
  if(e && e.relatedTarget){var c = e.relatedTarget; if(c === this.c) return true;
   while ((c = c.parentNode)) if(c === this.c) return true;}
  return false;
 }

 function resize(){
  for(var s, w, m, i = 0; i < marqueeInit.ar.length; ++i){
   if(marqueeInit.ar[i] && marqueeInit.ar[i].setup){
    m = marqueeInit.ar[i].setup;
    s = m.mq.moveatleast? Math.max(m.mq.moveatleast, m.sinc) : (m.sinc || m.mq.inc);
    m.c.style.width = m.mq.style.width;
    m.cw[0] = m.cw.length > 1? parseInt(m.mq.style.width) : 'a';
    while(m.c.offsetWidth > m.w - s){
     w = isNaN(m.cw[0])? m.w - s : --m.cw[0];
     if(w < 1){break;}
     m.c.style.width = isNaN(m.cw[0])? m.w - s + 'px' : --m.cw[0] + m.cw[1];
    }
   }
  }
 }

 function unload(){
  for(var m, i = 0; i < marqueeInit.ar.length; ++i){
   if(marqueeInit.ar[i] && marqueeInit.ar[i].persist && marqueeInit.ar[i].setup){
    m = marqueeInit.ar[i].setup;
    m.cookie.set(m.mq.uniqueid, m.m[0].style.left + ':' + m.m[1].style.left + ':' + m.mq.direction);
   }
  }
 }

 if (window.addEventListener){
  window.addEventListener('resize', resize, false);
  window.addEventListener('unload', unload, false);
 }
 else if (window.attachEvent){
  window.attachEvent('onresize', resize);
  window.attachEvent('onunload', unload);
 }

})();