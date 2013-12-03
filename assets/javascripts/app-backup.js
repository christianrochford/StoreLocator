// Store locator with customisations
// - custom marker
// - custom info window (using Info Bubble)
// - custom info window content (+ store hours)

  var stylez = [
  {
    "featureType": "landscape",
    "stylers": [
      { "hue": "#ff1a00" },
      { "saturation": 6 },
      { "lightness": 59 }
    ]
  },{
    "featureType": "road.highway",
    "stylers": [
      { "hue": "#ff0022" },
      { "saturation": -51 },
      { "lightness": 55 }
    ]
  },{
    "featureType": "road.arterial",
    "stylers": [
      { "saturation": -100 },
      { "lightness": 61 }
    ]
  },{
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      { "hue": "#00ddff" },
      { "lightness": 13 },
      { "saturation": -48 }
    ]
  },{
    "elementType": "labels.text.fill",
    "stylers": [
      { "visibility": "on" },
      { "lightness": -4 },
      { "saturation": -1 }
    ]
  },{
    "elementType": "geometry.stroke",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "elementType": "labels.text.stroke",
    "stylers": [
      { "visibility": "on" }
    ]
  },{
    "elementType": "labels.text.stroke",
    "stylers": [
      { "saturation": 1 },
      { "lightness": -3 },
      { "visibility": "off" }
    ]
  },{
    "elementType": "labels.text.fill",
    "stylers": [
      { "saturation": -100 },
      { "gamma": 0.99 },
      { "lightness": 13 }
    ]
  },{
  },{
    "featureType": "poi.park",
    "stylers": [
      { "lightness": 13 },
      { "saturation": -16 }
    ]
  },{
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "elementType": "labels.text.fill",
    "stylers": [
      { "lightness": 9 },
      { "gamma": 1.2 }
    ]
  },{
  },{
    "featureType": "administrative"  },{
    "featureType": "road.arterial",
    "stylers": [
      { "hue": "#00ffa2" },
      { "lightness": 25 }
    ]
  },{
    "featureType": "road.arterial",
    "stylers": [
      { "lightness": 100 }
    ]
  },{
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      { "visibility": "on" }
    ]
  },{
  },{
  },{
  }
];

  var styledMap = new google.maps.StyledMapType(stylez, {name: "Styled Map"});

  var ICON = new google.maps.MarkerImage('../assets/images/map-tag.png', null, null, new google.maps.Point(14, 13));

  google.maps.event.addDomListener(window, 'load', function() {
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: new google.maps.LatLng(53.291489,-7.812138),
    zoom: 6,
    mapTypeId: 'map-style'
  });

    // Get close button and insert it into streetView
    // #button can be anyt dom element
    var closeButton = document.querySelector('#button'),
        controlPosition = google.maps.ControlPosition.RIGHT_TOP;

    // Assumes map has been initiated 
    var streetView = map.getStreetView();

    // Hide useless and tiny default close button
    streetView.setOptions({ enableCloseButton: false });

    // Add to street view
    streetView.controls[ controlPosition ].push( closeButton );

    // Listen for click event on custom button
    // Can also be $(document).on('click') if using jQuery
    google.maps.event.addDomListener(closeButton, 'click', function(){
        streetView.setVisible(false);
    });

  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  var panelDiv = document.getElementById('panel');

  var data = new MedicareDataSource;

  var view = new storeLocator.View(map, data, {
    geolocation: false,
  });

  view.createMarker = function(store) {
    var markerOptions = {
      position: store.getLocation(),
      icon: ICON,
      title: store.getDetails().title
    };
    return new google.maps.Marker(markerOptions);
  }

  var infoBubble = new InfoBubble;
  view.getInfoWindow = function(store) {
    if (!store) {
      return infoBubble;
    }

    var details = store.getDetails();

    var html = ['<div class="store"><div class="title">', details.title,
      '</div><div class="address">', details.address, '</div>',
      '</div>'].join('');

    infoBubble.setContent($(html)[0]);
    return infoBubble;
  };

  new storeLocator.Panel(panelDiv, {
    view: view
  });
});


