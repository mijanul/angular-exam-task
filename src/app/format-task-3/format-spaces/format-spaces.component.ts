import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-format-spaces',
  templateUrl: './format-spaces.component.html',
  styleUrls: ['./format-spaces.component.scss'],
})
export class FormatSpacesComponent {
  byteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.byteForm = this.fb.group({
      bytes: '',
      type: 'mb',
    });
  }

  onSubmit() {
    // No need to calculate in the component, the pipe will handle the conversion
  }
}
