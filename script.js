window.onload = function() {
    L.mapquest.key = '8eHVdbH0g04AgJiEvkKgZHLwJBDuGGWS';

    var map = L.mapquest.map('map', {
      center: [18.640991, -68.6114303],
      layers: L.mapquest.tileLayer('map'),
      zoom: 9
    });

    map.addControl(L.mapquest.control());
  }