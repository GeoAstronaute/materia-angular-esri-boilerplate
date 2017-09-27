import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material";

import { EsriLoaderService } from "angular2-esri-loader";

import { AppComponent } from "./app.component";
import { MapTestComponent } from "./components/map-test/map-test.component";

@NgModule({
  declarations: [AppComponent, MapTestComponent],
  imports: [BrowserModule, FlexLayoutModule, MatButtonModule],
  providers: [EsriLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule {}
