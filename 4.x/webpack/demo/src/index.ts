import "./config";
import ArcGISMap from "esri/Map";
import MapView from "esri/views/MapView";

/**
 * Initialize application
 */
const map = new ArcGISMap({
  basemap: "gray-vector"
});

const view = new MapView({
  map,
  container: "app",
  extent: {
    spatialReference: {
      wkid: 4326
    },
    xmax: -120,
    xmin: -150,
    ymax: 50,
    ymin: 25
  }
});

import Graphic from 'esri/Graphic';
import SimpleLineSymbol from 'esri/symbols/SimpleLineSymbol';
import Polyline from 'esri/geometry/Polyline';

view.when((f: any) => {
  const polyline: any = new Polyline({
    spatialReference: {wkid: 4326},
      paths: [[
        [-111.30, 52.68],
        [-98, 49.5],
        [-93.94, 29.89]
      ]]
  });
  const polylineSymbol = new SimpleLineSymbol({
    color: [226, 119, 40],
    width: 4
  });

  const polylineGraphic = new Graphic({
    geometry: polyline,
    symbol: polylineSymbol,
  });
  
  view.graphics.add(polylineGraphic);
})
