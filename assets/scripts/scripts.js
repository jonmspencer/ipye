jQuery(document).ready(function($) {
	var Chrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
	var Safari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
	var deviceAgent = navigator.userAgent.toLowerCase();
	var iOS 		= deviceAgent.match(/(iphone|ipod|ipad)/);
	var iPad		= deviceAgent.match(/(ipad)/);
	var iPhone		= deviceAgent.match(/(iphone|ipod)/)
	var android 	= (navigator.platform.indexOf("android")>=0);
	var winHeight   = $(window).height();
	var docHeight   = $(document).height();
	(function($){ // START IT UP
		if(iOS || android) {
		    window.scrollTo(0, 1);
			$('html').addClass("Phone");

		} // END IF IS MOBILE

		// IF IS NOT MOVILE
		if(!iOS && !android) {

		} // END IF IS NOT iOS

		// BEGIN IPAD
		//if(iPad){} // END IPAD

    // BEGIN FUNCTIONS ----------------------------------------------------------------------------------------------
        
      // EQUAL HEIGHTS
      equalheight = function(container){
        var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
        $(container).each(function() {
       
          $el = $(this);
          $($el).height('auto')
          topPostion = $el.position().top;
         
          if (currentRowStart != topPostion) {
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
              rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
          } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
          }
          for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
          }
        });
      }
      
      
      // MODAL
      function openCurtain() {
        $('.curtain').fadeIn();
      }
      function closeCurtain() {
        $('.curtain').fadeOut();
      }
      function xClose() {
        $('a.x').click( function(){
          $(this).closest('.modal').fadeOut();
          closeCurtain();
        });
      } xClose();
    
      
      // SIGNUP FORM 
      $('a.signup').click(function(){
        if($('.curtain').is(":visible")) { 
          $('.modal').fadeOut();
        } else {
          openCurtain();
        }
        $('#signup').fadeIn();
      });
      
      // LOGIN FORM 
      $('a.login').click(function(){
        if($('.curtain').is(":visible")) { 
          $('.modal').fadeOut();
        } else {
          openCurtain();
        }
        $('#login').fadeIn();
      });

      
/*
      // CLOSE MOBILE MENU 
      function closeMenu() {
        $('.mobile-menu').fadeOut();
        $('button.x').removeClass('open');
      }
*/

    // END FUNCTIONS ---------------------------------------------------------------------

    // START WINDOW READY --------------------------------------------------------------------------------------------
    $(window).ready(function() {
      
           
/*
      // MOBILE MENU FUNCTIONALITY
      $('button.x').click(function() {
        var me = $(this);
        clearTimeout($(this).data('menuTime'));
        var menuTime = setTimeout(function() {
          me.toggleClass('open');
          $('.mobile-menu').fadeToggle(400).css({
            height: $(document).height()
          });
        }, 400);
        $(this).data('menuTime', menuTime);
      });
*/

		}); // END WINDOW READY ------------------------------------------------------------------------------------------

    // START WINDOW LOAD ---------------------------------------------------------------------------------------------
    $(window).load(function(){

      
			$(window).resize(function(){
  			
  			// PRIMARY MOBILE RESIZE
				if ($(window).width() > 1024) {
  				
  				// MAIN NAV RESET
          $('.main-nav').css({display:'', height:''});
          
          
        } else { // WINDOW UNDER 1024
          
          // MOBILE MENU RESET
          $('.mobile-menu').css({display:''});
          $('.lines-button').removeClass('open');
          
        } // END PRIMARY MOBILE RESIZE
        
				// SECONDARY MOBILE RESIZE
				// if($(window).width() > 800) {}
  				

				
		  }).trigger('resize');

		});
		// END WINDOW LOAD ------------------------------------------------------------------------------------------------
	})(jQuery);
}); // END DOCUMENT READY
