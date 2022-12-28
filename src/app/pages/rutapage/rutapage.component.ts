import { Component, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { BuscadorService } from 'src/app/Servicio/buscador.service';


@Component({
  selector: 'app-rutapage',
  templateUrl: './rutapage.component.html',
  styleUrls: ['./rutapage.component.scss']
})
export class RutapageComponent {
public BuscaControl = new FormControl(' ')
public form = new FormGroup({
  Busca: this.BuscaControl,
});
constructor(private buscadorservice: BuscadorService){
  this.buscadorservice.BuscaPeticion('naruto').subscribe(console.log)  

  this.BuscaControl.valueChanges.pipe(debounceTime(2000)).subscribe((value) => {
    value && this.buscadorservice.BuscaPeticion(value).subscribe(console.log);
  })
}
}
