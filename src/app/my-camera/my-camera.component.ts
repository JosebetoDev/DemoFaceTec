import { Component, OnInit } from '@angular/core';
import { AngularSampleApp } from 'src/assets/angular-sample-controller';
import { LivenessCheckProcessor } from 'src/assets/processors/LivenessCheckProcessor';
import { FacetecService } from '../services/facetec.service';

@Component({
  selector: 'app-my-camera',
  templateUrl: './my-camera.component.html',
  styleUrls: ['./my-camera.component.css']
})
export class MyCameraComponent implements OnInit {

  sessionFaceTec:any;
  latestProcesor:any;

  constructor(private faceTecService:FacetecService) { }

  ngOnInit(): void {
  }

  startCredentials(){
    this.faceTecService.getSessionFaceTec().subscribe(resp=>{
      console.log(resp);
      this.sessionFaceTec = resp;
    });
  }

  inicializarScan(){
    if(this.sessionFaceTec?.success){
      this.latestProcesor = new LivenessCheckProcessor(this.sessionFaceTec.sessionToken as string, AngularSampleApp as any);
    }
    console.log(this.latestProcesor)
  }

}
