import { Injectable } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { EMPTY, catchError, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {

  constructor() { }

  getButtons = from([[
    {amount: 5, icon: '%'},
    {amount: 10, icon: '%'},
    {amount: 15, icon: '%'},
    {amount: 25, icon: '%'},
    {amount: 50, icon: '%'},
  ]])
}
