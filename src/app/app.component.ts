import { Component, OnInit } from "@angular/core";
import { EsriLoaderService } from "angular2-esri-loader";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  mapView: any;
  title = "app";

  constructor(private esriLoader: EsriLoaderService) {}

  ngOnInit() {
   return this.esriLoader
		.load({
        // use a specific version of the JSAPI
		url: "https://js.arcgis.com/4.4/"
		})
		.then(() => {
        // load the needed Map and MapView modules from the JSAPI

		});
  }
}
