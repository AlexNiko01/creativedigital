;(function ($) {
    $(document).ready(function () {
        var $grid = $('.grid');
        if ($grid.length > 0) {
            $grid.isotope({
                itemSelector: '.grid__item',
                masonry: {
                    columnWidth: 100
                }
            });
            $('.grid-nav__link').click(function (e) {
                e.preventDefault();
                // console.log(this);
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({filter: filterValue});
            });
        }




        var sliderProject = $('.ba-slider-description');
        if (sliderProject.length > 0) {
            sliderProject.slick({
                dots: true,
                slidesToShow: 3,
                arrows: true,
                slidesToScroll: 1,
                autoplaySpeed: 2000,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            infinite: true,
                            dots: true
                        }
                    }
                ]
            });
        }

    });




    $(window).load(function () {
        if (typeof google !== 'undefined') {
            var mapDiv = $('.ba-map')[0];
            // console.log(google);
            var map = new google.maps.Map(mapDiv, {
                center: {lat: 52.1292594, lng: 106.9276662},
                zoom: 5
            });
            var marker = new google.maps.Marker({
                position: {lat: 52.1292594, lng: 106.9276662},
                map: map,
                // icon: 'img/marker.png'
            });
            var infowindow = new google.maps.InfoWindow({
                content: 'We are here!',
            });
            infowindow.open(map, marker);
        }

    });
})(jQuery);