import { Component, OnInit } from "@angular/core";
import { EsriLoaderService } from "angular2-esri-loader";

@Component({
  selector: "map-map-test",
  templateUrl: "./map-test.component.html",
  styleUrls: ["./map-test.component.scss"]
})
export class MapTestComponent implements OnInit {
  mapView: any;

  constructor(private esriLoader: EsriLoaderService) {}

  ngOnInit() {
	this.esriLoader
		.loadModules(["esri/Map", "esri/views/MapView"])
		.then(([Map, MapView]) => {
		const mapProperties = {
			basemap: "hybrid"
		};

		const map = new Map(mapProperties);

		const mapViewProperties = {
          // create the map view at the DOM element in this component
			container: "mapView",
          // supply additional options
			center: [-12.287, -37.114],
			zoom: 12,
			map: map // property shorthand for object literal
		};

		this.mapView = new MapView(mapViewProperties);
		});
  }
}
