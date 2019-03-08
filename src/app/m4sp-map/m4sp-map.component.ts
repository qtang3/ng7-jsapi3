import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import Map from 'esri/map';

@Component({
  selector: 'app-m4sp-map',
  templateUrl: './m4sp-map.component.html',
  styleUrls: ['./m4sp-map.component.scss']
})
export class M4spMapComponent implements OnInit {

  constructor() { }
  @ViewChild('mapRoot') mapRoot: ElementRef;
  ngOnInit() {
    const map = new Map(this.mapRoot.nativeElement, {
      center: [-118, 34.5],
      zoom: 8,
      basemap: 'topo'
    });
  }
}
