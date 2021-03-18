var map = new ol.Map({
 target: 'map',
 layers: [
   new ol.layer.Tile({
     source: new ol.source.OSM(),
     opacity: 1
   }),
   new ol.layer.Vector({
     source: new ol.source.Vector({
       url: 'geo-search-results-json' + window.location.search,
       format: new ol.format.GeoJSON()
     })
   })
 ],
 view: new ol.View({
   center: ol.proj.fromLonLat([2.34, 48.85]),
   zoom: 12,
   maxZoom: 20,
 })
});


document.getElementById('bout').addEventListener('click', event => {
  var formulaire = document.getElementById('formulaire');
  formulaire.longitude.value = ol.proj.toLonLat(map.getView().getCenter())[0];
  formulaire.latitude.value = ol.proj.toLonLat(map.getView().getCenter())[1];
});



document.getElementById('che').addEventListener('click',event => {
  if (document.getElementById('che').checked==true){
    map.on('pointermove', function (e) {
        if (e.dragging) {
            formulaire.longitude.value = ol.proj.toLonLat(map.getView().getCenter())[0];
            formulaire.latitude.value = ol.proj.toLonLat(map.getView().getCenter())[1];
        }
    });
  }else{
    formulaire.longitude.value =2.34;
    formulaire.latitude.value= 48.85;
  }
});
