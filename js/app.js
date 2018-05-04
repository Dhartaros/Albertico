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
		if ($('.navbar').hasClass('nav-blanco')) { return; }
		$('.navbar').toggleClass('nav-blanco');
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
		if ($('.navbar').hasClass('nav-morado')) { return; }
		$('.navbar').toggleClass('nav-morado');
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
		if ($('.navbar').hasClass('nav-amarillo')) { return; }
		$('.navbar').toggleClass('nav-amarillo');
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
		if ($('.navbar').hasClass('nav-naranja')) { return; }
		$('.navbar').toggleClass('nav-naranja');
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
		if ($('.navbar').hasClass('nav-azul')) { return; }
		$('.navbar').toggleClass('nav-azul');
	}
});