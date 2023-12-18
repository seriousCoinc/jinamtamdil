function resize_image(width)
{
  if (window_width < 736){
    document.getElementById("gallery_wrapper").style.height = (window_width * 2.4) + "px";
  }
  else if (window_width < 1200){
    document.getElementById("gallery_wrapper").style.height = (820 - (960 - window_width) * 0.8) + "px";
  }
  else{
    document.getElementById("gallery_wrapper").style.height = (600 - (1200 - window_width) * 0.85) + "px";
  }
}

window_width = $(window).width();
resize_image(window_width)
window.addEventListener('resize', function(event) {
  console.log(window_width)
  window_width = $(window).width();
  resize_image(window_width)
}, true);
