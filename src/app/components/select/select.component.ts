import { Component, InputSignal, ModelSignal, Signal, WritableSignal, inject, input, model, signal } from '@angular/core';
import { SelectButtonComponent } from '../select-button/select-button.component';
import { Button } from '../../models/calculator.types';
import { ButtonService } from '../../services/button.service';
import { EMPTY, catchError, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [SelectButtonComponent],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  buttonService = inject(ButtonService);
  label: InputSignal<string> = input('');
  icon: InputSignal<string> = input('');
  selectedAmount: ModelSignal<string> = model('');
  buttons = toSignal(this.buttonService.getButtons
    .pipe(
      map((number => number)),
      catchError((error: any) => {
        console.log(error);
        return EMPTY;
    }))
    , {initialValue: []})

  onSelectedAmount(amount: any) {
    console.log(amount());
    //this.selectedAmount.set(amount());
  }
}
