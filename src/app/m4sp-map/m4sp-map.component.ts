import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { JsapiServiceService } from 'src/services/jsapi-service.service';

@Component({
  selector: 'app-m4sp-map',
  templateUrl: './m4sp-map.component.html',
  styleUrls: ['./m4sp-map.component.scss']
})
export class M4spMapComponent implements OnInit {

  constructor( private jsapiService: JsapiServiceService) { }
  @ViewChild('mapRoot') mapRoot: ElementRef;
  ngOnInit() {
    this.jsapiService.createMap(this.mapRoot.nativeElement, {
      center: [-118, 34.5],
      zoom: 8,
      basemap: 'topo'
    })
  }
}
