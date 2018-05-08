var seccion1 = 0,
	seccion2 = 0,
	seccion3 = 0,
	seccion4 = 0;

seccion1 = $('#acerca').offset().top - 2;
seccion2 = $('#logros').offset().top - 2;
seccion3 = $('#redes').offset().top - 2;
seccion4 = $('#contacto').offset().top - 2;

$(document).scroll(function() {
	var scrollPos = $(document).scrollTop();
	if (scrollPos < seccion1) {
		if ($('.navbar').hasClass('nav-morado')) {
			$('.navbar').removeClass('nav-morado');
		}
		if ($('.navbar').hasClass('nav-amarillo')) {
			$('.navbar').removeClass('nav-amarillo');
		}
		if ($('.navbar').hasClass('nav-naranja')) {
			$('.navbar').removeClass('nav-naranja');
		}
		if ($('.navbar').hasClass('nav-azul')) {
			$('.navbar').removeClass('nav-azul');
		}
		if ($('.navbar-toggler-icon').hasClass('blanco')) {
			$('.navbar-toggler-icon').removeClass('blanco');
		}
		if ($('.navbar').hasClass('nav-blanco')) { return; }
		$('.navbar').toggleClass('nav-blanco');
		if ($('.navbar-toggler-icon').hasClass('negro')) { return; }
		$('.navbar-toggler-icon').toggleClass('negro');
	}
	else if (scrollPos >= seccion1 && scrollPos < seccion2) {
		if ($('.navbar').hasClass('nav-blanco')) {
			$('.navbar').removeClass('nav-blanco');
		}
		if ($('.navbar').hasClass('nav-amarillo')) {
			$('.navbar').removeClass('nav-amarillo');
		}
		if ($('.navbar').hasClass('nav-naranja')) {
			$('.navbar').removeClass('nav-naranja');
		}
		if ($('.navbar').hasClass('nav-azul')) {
			$('.navbar').removeClass('nav-azul');
		}
		if ($('.navbar-toggler-icon').hasClass('negro')) {
			$('.navbar-toggler-icon').removeClass('negro');
		}
		if ($('.navbar').hasClass('nav-morado')) { return; }
		$('.navbar').toggleClass('nav-morado');
		if ($('.navbar-toggler-icon').hasClass('blanco')) { return; }
		$('.navbar-toggler-icon').toggleClass('blanco');
	} else if (scrollPos >= seccion2 && scrollPos < seccion3) {
		if ($('.navbar').hasClass('nav-blanco')) {
			$('.navbar').removeClass('nav-blanco');
		}
		if ($('.navbar').hasClass('nav-morado')) {
			$('.navbar').removeClass('nav-morado');
		}
		if ($('.navbar').hasClass('nav-naranja')) {
			$('.navbar').removeClass('nav-naranja');
		}
		if ($('.navbar').hasClass('nav-azul')) {
			$('.navbar').removeClass('nav-azul');
		}
		if ($('.navbar-toggler-icon').hasClass('blanco')) {
			$('.navbar-toggler-icon').removeClass('blanco');
		}
		if ($('.navbar').hasClass('nav-amarillo')) { return; }
		$('.navbar').toggleClass('nav-amarillo');
		if ($('.navbar-toggler-icon').hasClass('negro')) { return; }
		$('.navbar-toggler-icon').toggleClass('negro');
	} else if (scrollPos >= seccion3 && scrollPos < seccion4) {
		if ($('.navbar').hasClass('nav-blanco')) {
			$('.navbar').removeClass('nav-blanco');
		}
		if ($('.navbar').hasClass('nav-morado')) {
			$('.navbar').removeClass('nav-morado');
		}
		if ($('.navbar').hasClass('nav-amarillo')) {
			$('.navbar').removeClass('nav-amarillo');
		}
		if ($('.navbar').hasClass('nav-azul')) {
			$('.navbar').removeClass('nav-azul');
		}
		if ($('.navbar-toggler-icon').hasClass('negro')) {
			$('.navbar-toggler-icon').removeClass('negro');
		}
		if ($('.navbar').hasClass('nav-naranja')) { return; }
		$('.navbar').toggleClass('nav-naranja');
		if ($('.navbar-toggler-icon').hasClass('blanco')) { return; }
		$('.navbar-toggler-icon').toggleClass('blanco');
	} else if (scrollPos >= seccion4) {
		if ($('.navbar').hasClass('nav-blanco')) {
			$('.navbar').removeClass('nav-blanco');
		}
		if ($('.navbar').hasClass('nav-morado')) {
			$('.navbar').removeClass('nav-morado');
		}
		if ($('.navbar').hasClass('nav-amarillo')) {
			$('.navbar').removeClass('nav-amarillo');
		}
		if ($('.navbar').hasClass('nav-naranja')) {
			$('.navbar').removeClass('nav-naranja');
		}
		if ($('.navbar-toggler-icon').hasClass('negro')) {
			$('.navbar-toggler-icon').removeClass('negro');
		}
		if ($('.navbar').hasClass('nav-azul')) { return; }
		$('.navbar').toggleClass('nav-azul');
		if ($('.navbar-toggler-icon').hasClass('blanco')) { return; }
		$('.navbar-toggler-icon').toggleClass('blanco');
	}
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});