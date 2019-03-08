import { Injectable } from '@angular/core';

import { loadModules, loadCss } from 'esri-loader';

import Map = require("esri/map");

// connect to esri cdn
// loadCss('https://js.arcgis.com/3.27/esri/css/esri.css');

// const options = {
//   url: 'https://js.arcgis.com/3.27/'
// };


// connect to local esri source.
loadCss("esri/css/esri.css")
//loadCss("esri/themes/calcite/dijit/calcite.css")
//loadCss("esri/themes/calcite/esri/esri.css")
const options = {
  url: "/dojo/dojo.js"
}
@Injectable({
  providedIn: 'root'
})
export class JsapiServiceService {

  constructor() { }

  async createMap(node: HTMLElement, properties: any): Promise<Map> {
    const [Map] = await loadModules([
      'esri/map'
    ], options);
    return new Map(node, properties);
  }
}
