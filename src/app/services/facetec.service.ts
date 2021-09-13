import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FaceTecSDK } from "../../assets/core-sdk/FaceTecSDK.js/FaceTecSDK";
import { Observable, throwError, of } from 'rxjs';
import { KeysFace } from 'src/assets/KeysFace';

@Injectable({
  providedIn: 'root'
})
export class FacetecService {

  url:string = KeysFace.BaseURL;

  constructor(private http:HttpClient) { }

  getSessionFaceTec():Observable<any>{
    this.url = this.url+"/session-token";
    const headers = new HttpHeaders({'X-Device-Key':KeysFace.DeviceKeyIdentifier,'X-User-Agent':FaceTecSDK.createFaceTecAPIUserAgentString("")});
    return this.http.get<any> (this.url,{ headers: headers });
  }

  // initilizeScan(){
  //   this.url = this.url+"/liveness-3d";
  //   const headers = new HttpHeaders({'X-Device-Key':KeysFace.DeviceKeyIdentifier,'X-User-Agent':FaceTecSDK.createFaceTecAPIUserAgentString("")});
  //   return this.http.get<any> (this.url,{ headers: headers });
  // }

  //createFaceTecAPIUserAgentString!: (sessionID: string) => string;
}
