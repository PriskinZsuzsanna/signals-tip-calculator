import { Component, InputSignal, ModelSignal, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { output } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  label: InputSignal<string> = input('');
  icon: InputSignal<string> = input('');
  value: ModelSignal<number> = model(0);
  onValueChange = output<ModelSignal<number>>();

  setValue(event:Event) {
    this.value.set(Number((event.target as HTMLInputElement).value));
    //this.onValueChange.emit(this.value);
  }
}
