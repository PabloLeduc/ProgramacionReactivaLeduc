import { Injectable } from '@angular/core';
import { Subject, interval, observable, BehaviorSubject, pipe, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraficoGeneralService {
  private Luces = new BehaviorSubject<string>('Verde')
  public Luces$ = this.Luces.asObservable()
  private UltimoValor: string = 'Verde'

  constructor() { 
    this.Luces.subscribe((valor) => (this.UltimoValor = valor))
      interval(4000).subscribe(() => this.UltimoValor === 'Verde' ? this.Luces.next('Amarillo') : this.Luces.next('Verde'))

    }
  }
