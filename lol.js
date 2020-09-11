var css = '.chat-message-list {background-image: url("https://cdn.discordapp.com/attachments/668546440020361228/754088080880959608/asdf.png");background-repeat: no-repeat, no-repeat;background-position: left top;background-size: 200px 200px;}',
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
