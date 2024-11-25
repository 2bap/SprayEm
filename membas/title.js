(function titleScroller(text) {
    document.title = text;
    setTimeout(function () {
      titleScroller(text.substr(1) + text.substr(0, 1));
    }, 500);
  }("easy.rip.nigga "));
  window.oncontextmenu=function(){console.log("I don't try, I succeed... -Hades :D");return false;}
  
