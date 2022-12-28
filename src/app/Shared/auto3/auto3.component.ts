import { Component } from '@angular/core';
import { TraficoGeneralService } from 'src/app/Servicio/trafico-general.service';

@Component({
  selector: 'app-auto3',
  templateUrl: './auto3.component.html',
  styleUrls: ['./auto3.component.scss']
})
export class Auto3Component {

  constructor(public TraficoGeneralService: TraficoGeneralService){
    this.TraficoGeneralService.Luces$.subscribe(console.log)
}
}