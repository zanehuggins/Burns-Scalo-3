// Get a reference to the <path>
var path = document.querySelector('#line3');
var path2 = document.querySelector('#line4');
var pathv2 = document.querySelector('#linev2');




// NEXT
var pathLength = path.getTotalLength();




// NEXT
path.style.strokeDasharray = pathLength + ' ' + pathLength;
path2.style.strokeDasharray = pathLength + ' ' + pathLength;
pathv2.style.strokeDasharray = pathLength + ' ' + pathLength;



// NEXT
path.style.strokeDashoffset = pathLength;
path2.style.strokeDashoffset = pathLength;
pathv2.style.strokeDashoffset = pathLength;



// NEXT
path.getBoundingClientRect();



// When the page scrolls...
window.addEventListener("scroll", function(e) {

  // NEXT
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  // NEXT
  var drawLength = pathLength * scrollPercentage * 3;


  // NEXT
  path.style.strokeDashoffset = pathLength - drawLength;
    path2.style.strokeDashoffset = pathLength - drawLength;
    pathv2.style.strokeDashoffset = pathLength - drawLength;


 // NEXT
  if (scrollPercentage >= 0.99) {
    path.style.strokeDasharray = "none";



  } else {
    path.style.strokeDasharray = pathLength + ' ' + pathLength;
      path2.style.strokeDasharray = pathLength + ' ' + pathLength;
        pathv2.style.strokeDasharray = pathLength + ' ' + pathLength;


  }

});
