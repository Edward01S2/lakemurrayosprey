$(document).ready(function(t){t(".stream-2").toggle(),t("#switchStream").click(function(){t(".stream-2").toggle(),t(this).text(function(s,i){console.log(i),"Show Live Cam 2"==i?(t(this).html('<svg style="height: 20px; color: white; fill: currentColor; padding-right: 4px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm5-9v2H5V9h10z"/></svg>Hide Live Cam 2'),t(this).removeClass("btn-primary"),t(this).addClass("btn-secondary")):(t(this).html('<svg style="height: 20px; color: white; fill: currentColor; padding-right: 4px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM7 6l8 4-8 4V6z"/></svg>Show Live Cam 2'),t(this).removeClass("btn-secondary"),t(this).addClass("btn-primary"))})})});
//# sourceMappingURL=site.js.map
