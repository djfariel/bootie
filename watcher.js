var css = '.chat-message-list {background-image: url("https://cdn.discordapp.com/attachments/704786380240191628/755448187065467081/the_watcher.png");background-repeat: no-repeat, no-repeat;background-position: right bottom;}',
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
