import { Component } from '@angular/core';
import { TraficoGeneralService } from 'src/app/Servicio/trafico-general.service';

@Component({
  selector: 'app-auto2',
  templateUrl: './auto2.component.html',
  styleUrls: ['./auto2.component.scss']
})
export class Auto2Component {

  
  constructor(public TraficoGeneralService: TraficoGeneralService){
    this.TraficoGeneralService.Luces$.subscribe(console.log)
}
}
