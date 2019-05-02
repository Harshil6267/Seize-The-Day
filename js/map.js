
function initialize() {
      var locations = [
        [42.317432, -83.026772],
        [42.316432, -83.027772],
        [42.415432, -83.028792],
        [42.314432, -83.029772],
        [42.313432, -83.020672],
        [42.016432, -83.021772],
        [42.381432, -83.022702],
        [42.210432, -83.023772],
        [42.308432, -83.024172],
        [42.319432, -83.025772],
        [42.320432, -83.026873]
      ]

    //Map parametrs
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(42.317432, -83.026772)
        
    }

    //map
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

    //category
    var cook = 'img/icon/01.png';

    //positions
    var point1 = new google.maps.LatLng(32.3149, -83.0364);
    var marker , i;
    //markers
    for(i = 0; i<locations.length; i++)
        {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][0], locations[i][1]),
                map: map,
                category: cook,
                icon: cook,
                title: "point1"
            });
        }
  

    //information for
    function goToLink() {
        document.location.href = '3.html';
    }
    google.maps.event.addListener(marker, 'click', goToLink);

    




    
    //Map parametrs
    var mapOptions2 = {
        zoom: 14,
        center: new google.maps.LatLng(42.3149, -73.328),
        mapTypeId: google.maps.MapTypeId.ROADMAP,

        mapTypeControl: false,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.BOTTOM_CENTER
        },
        panControl: false,
        panControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        zoomControl: false,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        scaleControl: false,
        scaleControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT
        },
        streetViewControl: false,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        }
    }

    //map
    var map2 = new google.maps.Map(document.getElementById("map2"), mapOptions2);

    //category
    var cook2 = 'img/icon/01.png';
    var sport2 = 'img/icon/02.png';
    var game2 = 'img/icon/03.png';
    var eco2 = 'img/icon/04.png';
    var shop2 = 'img/icon/05.png';
    var study2 = 'img/icon/06.png';
    var drink2 = 'img/icon/07.png';
    var money2 = 'img/icon/08.png';
    var bus2 = 'img/icon/09.png';

    //positions
    var point122 = new google.maps.LatLng(42.3149,-83.0364);


    //markers

    var marker122 = new google.maps.Marker({
        position: point122,
        map: map2,
        category: cook2,
        icon: cook2,
        title: "point122"
    });



    //information for
    function goToLink() {
        document.location.href = '3.html';
    }
    google.maps.event.addListener(marker122, 'click', goToLink);




    //Map parametrs
    var mapOptions3 = {
        zoom: 14,
        center: new google.maps.LatLng(42.3149, -83.0364),
        mapTypeId: google.maps.MapTypeId.ROADMAP,

        mapTypeControl: false,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.BOTTOM_CENTER
        },
        panControl: false,
        panControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        zoomControl: false,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        scaleControl: false,
        scaleControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT
        },
        streetViewControl: false,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        }
    }

    //map
    var map3 = new google.maps.Map(document.getElementById("map3"), mapOptions3);

    //category
    var cook3 = 'img/icon/01.png';
    var sport3 = 'img/icon/02.png';
    var game3 = 'img/icon/03.png';
    var eco3 = 'img/icon/04.png';
    var shop3 = 'img/icon/05.png';
    var study3 = 'img/icon/06.png';
    var drink3 = 'img/icon/07.png';
    var money3 = 'img/icon/08.png';
    var bus3 = 'img/icon/09.png';

    //positions
    var point123 = new google.maps.LatLng(42.3149, -83.0364);


    //markers

    var marker122 = new google.maps.Marker({
        position: point123,
        map: map3,
        category: shop3,
        icon: shop3,
        title: "point123"
    });



    //information for
    function goToLink() {
        document.location.href = '3.html';
    }
    google.maps.event.addListener(marker123, 'click', goToLink);

}
