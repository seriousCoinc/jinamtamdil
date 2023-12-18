var len_list = [7, 9, 4, 7, 7];
window_width = $(window).width();

var dir = 'image/';
if (window_width < 960){
  dir += 'cover_short/'
}
else {
  dir += 'cover_long/'
}

var randidx1 = Math.floor(Math.random() * 5);
var randidx2 = Math.floor(Math.random() * len_list[randidx1]);
var name = "url(" + dir + "g"+randidx1 + "_" + randidx2 + ".png)";
console.log(name)
document.getElementById("home").style.backgroundImage = name;
