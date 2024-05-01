import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {

  constructor() { }

  getButtons = from([[
    {amount: '5', icon: '%', background: 'hsl(183, 100%, 15%)', color: 'hsl(0, 0%, 100%)'},
    {amount: '10', icon: '%', background: 'hsl(183, 100%, 15%)', color: 'hsl(0, 0%, 100%)'},
    {amount: '15', icon: '%', background: 'hsl(183, 100%, 15%)', color: 'hsl(0, 0%, 100%)'},
    {amount: '25', icon: '%', background: 'hsl(183, 100%, 15%)', color: 'hsl(0, 0%, 100%)'},
    {amount: '50', icon: '%', background: 'hsl(183, 100%, 15%)', color: 'hsl(0, 0%, 100%)'},
    {amount: 'Custom', icon: '%', background: 'hsl(185, 41%, 84%)', color: 'hsl(186, 14%, 43%)'},
  ]])
}
