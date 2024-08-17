$(document).ready(function () {


 

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var elementOffset = $('.colabout2').offset().top;
        var distance = elementOffset - scrollTop;

        if (distance <= $(window).height()) {
            $(".colabout2").addClass("imagenlarga");
        } else {
            $(".colabout2").removeClass("imagenlarga");
        }
    });


    $(window).scroll(function() {
        var scrollTop2 = $(window).scrollTop();
        var elementOffset2 = $('.imgpregub').offset().top;
        var distance2 = elementOffset2 - scrollTop2;

        if (distance2 <= $(window).height()) {
            $(".imgpregub").addClass("imagenlarga");
        } else {
            $(".imgpregub").removeClass("imagenlarga");
        }
    });




   




    $(window).scroll(function() {
        // Agregar la clase .rojo al header si el scroll supera los 300px
        var scrollThreshold = 300; // Ajusta este valor según sea necesario
        if ($(window).scrollTop() >= scrollThreshold) {
            $("header").addClass("rojo");
            $(".contheader").addClass("sinpadingtop");
        } else {
            $("header").removeClass("rojo");
            $(".contheader").removeClass("sinpadingtop");
        }
    });


















    $(".resta1").hide();

    $(".mas1").click(function (e) { 
        e.preventDefault();
        $(".res1").slideToggle();
        $(".mas1").toggleClass("fondoazul");
        $(".resta1").toggle();
        $(".suma1").toggle();
    });

    $(".resta2").hide();
    $(".mas2").click(function (e) { 
        e.preventDefault();
        $(".res2").slideToggle();
        $(".mas2").toggleClass("fondoazul");
        $(".resta2").toggle();
        $(".suma2").toggle();
    });



    $(".resta3").hide();
    $(".mas3").click(function (e) { 
        e.preventDefault();
        $(".res3").slideToggle();
        $(".mas3").toggleClass("fondoazul");
        $(".resta3").toggle();
        $(".suma3").toggle();
    });























































    const $carouselTrack = $('.carousel-track');
    const $testimonials = $('.testimonial');
    const $indicators = $('.indicator');
    let currentIndex = 0;
    const testimonialCount = $testimonials.length;

    // Clonar el primer testimonio y agregarlo al final
    const $firstClone = $testimonials.first().clone();
    $carouselTrack.append($firstClone);

    function moveToNextTestimonial() {
        currentIndex++;
        const newTransformValue = -currentIndex * 100 + '%';
        $carouselTrack.css('transform', 'translateX(' + newTransformValue + ')');
        updateIndicators();

        // Si es el último testimonio (clon), saltar al primer testimonio sin transición
        if (currentIndex === testimonialCount) {
            setTimeout(function() {
                $carouselTrack.css('transition', 'none');
                currentIndex = 0;
                $carouselTrack.css('transform', 'translateX(0)');
                setTimeout(function() {
                    $carouselTrack.css('transition', 'transform 0.5s ease-in-out');
                }, 50);
            }, 500);
        }
    }

    function updateIndicators() {
        $indicators.removeClass('active');
        $indicators.eq(currentIndex % testimonialCount).addClass('active');
    }

    setInterval(moveToNextTestimonial, 3000);

    $indicators.on('click', function() {
        currentIndex = $(this).index();
        const newTransformValue = -currentIndex * 100 + '%';
        $carouselTrack.css('transform', 'translateX(' + newTransformValue + ')');
        updateIndicators();
    });



























$(".ICONO").click(function (e) { 
    e.preventDefault();
    $(".menuhorizontal").addClass("efectoabrir");
    
});

$(".menuhamburgesa").click(function (e) { 
    e.preventDefault();
    $(".menuhorizontal").addClass("efectoabrir");
    
});




$(".cerrar").click(function (e) { 
    e.preventDefault();
    $(".menuhorizontal").removeClass("efectoabrir");
});













});