$(document).scroll(function(){
         // grab the scroll amount and the window height
          var scrollAmount = $(window).scrollTop();
          var documentHeight = $(document).height();

          // calculate the percentage the user has scrolled down the page
          var scrollPercent = (scrollAmount / documentHeight) * 100;

          $(".line").css({
             height: scrollPercent + 'px'
          });

          // do something when a user gets 50% of the way down my page
      });
