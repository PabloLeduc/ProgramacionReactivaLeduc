import { Component, OnDestroy } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { TraficoGeneralService } from 'src/app/Servicio/trafico-general.service';
@Component({
  selector: 'app-auto1',
  templateUrl: './auto1.component.html',
  styleUrls: ['./auto1.component.scss']
})
export class Auto1Component implements OnDestroy {
  LucesSuscripcion: Subscription;

  constructor(public TraficoGeneralService: TraficoGeneralService){
  this.LucesSuscripcion = this.TraficoGeneralService.Luces$.subscribe(console.log)
}
    ngOnDestroy(): void{
      this.LucesSuscripcion.unsubscribe()
    }

}
