/*!
 * jQuery Sticky Footer 2.0
 * Corey Snyder
 * http://tangerineindustries.com
 *
 * Released under the MIT license
 *
 * Copyright 2013 Corey Snyder.
 *
 * Date: Thu Jan 22 2013 13:34:00 GMT-0630 (Eastern Daylight Time)
 * Modification for jquery 1.9+ Tue May 7 2013
 * Modification for non-jquery, removed all, now classic JS Wed Jun 12 2013
 * Modification for Foundation 5 auto height issues
 * Modification for new DOM change event listener
 */
function mutationObjectCallback(){stickyFooter()}function getCSS(t,e){var o=document.getElementsByTagName(t)[0],n=null;return o.currentStyle?n=o.currentStyle[e]:window.getComputedStyle&&(n=document.defaultView.getComputedStyle(o,null).getPropertyValue(e)),n}function stickyFooter(){if(observer.disconnect(),document.body.setAttribute("style","height:auto"),null!=document.getElementsByTagName("footer")[0].getAttribute("style")&&document.getElementsByTagName("footer")[0].removeAttribute("style"),window.innerHeight!=document.body.offsetHeight){var t=window.innerHeight-document.body.offsetHeight,e=getCSS("footer","margin-top");1==isNaN(e)?(document.getElementsByTagName("footer")[0].setAttribute("style","margin-top:0px;"),e=0):e=parseInt(e),e+t>parseInt(getCSS("footer","margin-top"))&&document.getElementsByTagName("footer")[0].setAttribute("style","margin-top:"+(e+t)+"px;")}document.body.setAttribute("style","height:100%"),observer.observe(target,config)}window.onload=function(){stickyFooter(),observer.observe(target,config)};var target=document.body,observer=new MutationObserver(mutationObjectCallback),config={attributes:!0,childList:!0,characterData:!0};window.onresize=function(){stickyFooter()};