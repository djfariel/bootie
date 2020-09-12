var css = '.chat-message-list {background-image: url("https://cdn.discordapp.com/attachments/631040827124219904/754166036269498418/fdsa.png");background-repeat: no-repeat, no-repeat;background-position: right top;}',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

head.appendChild(style);

style.type = 'text/css';
if (style.styleSheet){
  // This is required for IE8 and below.
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}
