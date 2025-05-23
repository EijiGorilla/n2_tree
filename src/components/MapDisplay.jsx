import { useEffect, useState } from "react";
import "../index.css";
import "../App.css";
import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-legend";
import "@arcgis/map-components/components/arcgis-basemap-gallery";
import "@arcgis/map-components/components/arcgis-layer-list";
import {
  chainageLayer,
  prowLayer,
  stationLayer,
  treeCuttingLayer,
  treeCompensationLayer,
  treeConservationLayer,
} from "../layers";

function MapDisplay() {
  const [mapView, setMapView] = useState();
  const arcgisMap = document.querySelector("arcgis-map");
  // zoomToLayer(prowLayer, arcgisScene);

  useEffect(() => {
    if (mapView) {
      arcgisMap.map.add(chainageLayer);
      arcgisMap.map.add(treeCuttingLayer);
      arcgisMap.map.add(treeCompensationLayer);
      arcgisMap.map.add(treeConservationLayer);
      arcgisMap.map.add(prowLayer);
      arcgisMap.map.add(stationLayer);
    }
  });

  return (
    <arcgis-map
      // item-id="5ba14f5a7db34710897da0ce2d46d55f"
      basemap="dark-gray-vector"
      zoom="10"
      center="120.5793, 15.18"
      onarcgisViewReadyChange={(event) => {
        setMapView(event.target);
      }}
    >
      {/* <arcgis-zoom position="top-right"></arcgis-zoom> */}
    </arcgis-map>
  );
}

export default MapDisplay;
