function updateMap(){
fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data);
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                //mark on the map
                cases = element.infected;
                if(cases>255){
                color="rgb(255,0,0)";
                }
                else{
                color=`rgb($(cases),0,0)`;
                }
                
                new mapboxgl.Marker()({
                    draggable: false,
                    color :color,
                }).setLngLat([longitude, latitude])
                  .addTo(map); // add the marker to the map
                  function onDragEnd() {
                    var lngLat = marker.getLngLat();
                    coordinates.style.display = 'block';
                  }
                     
                    marker.on('dragend', onDragEnd);
            });
        })
}
let interval = 2000;
setInterval( updateMap, interval); 