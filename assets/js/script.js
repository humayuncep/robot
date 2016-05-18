$(document).ready(function(){

    // Partner slider
        $('#partner-slider').owlCarousel({
            loop:true,
            margin:10,
            autoplay: true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        }) // end of #partner-slider




    // Turn off Google Map zooming
        $('.map_canvas').addClass('scrolloff'); // set the pointer events to none on doc ready
        $('#map').on('click', function () {
            $('.map_canvas').removeClass('scrolloff'); // set the pointer events true on click
        });
        // you want to disable pointer events when the mouse leave the canvas area;
        $(".map_canvas").mouseleave(function () {
            $('.map_canvas').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
        }); //end of Turn off Google Map zooming

    // Team box height
        var h = $('.team-img-detail').height();
        h = h/2;
        var top = $('.team-box').height();
        top = (top/2)-h;
        $(".team-img-detail").css("top", top);
        // end of Team box height



}); // end of $(document).ready(function()