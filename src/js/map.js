var map;
var coord = {lat: 41.5868353, lng: -93.6249593};
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: coord,
        zoom: 10
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map,
    });
    marker.setMap(null);
    var contentString = '<div id="content">'+
          '<div id="siteNotice">'+
          '<p id="firstHeading" class="firstHeading">MAKS DIGITAL</p>'+
          '</div>'+
          '<div id="bodyContent">'+
          '<p><a href="tel:515 450 8442">515 450 8442</a></p>'+
          '<p><a href="mailto:info@maksdigital.com">info@maksdigital.com</a></p>'
          '</div>'+
          '</div>';
    
          infoBubble = new InfoBubble({
            maxWidth:211,
            maxHeight:165,
            minWidth:211,
            minHeight:165,
            map: map,
            content: contentString,
            position: coord,
            shadowStyle: 0,
            padding: 30,
            backgroundColor: '#f3f3f3',
            borderRadius: 3,
            arrowSize: 30,
            borderWidth: 1,
            borderColor: '#f3f3f3',
            disableAutoPan: true,
            hideCloseButton: true,
            arrowPosition: 30,
            backgroundClassName: 'transparent',
            arrowStyle: 2
      });
      
      infoBubble.open(map, marker);
}

