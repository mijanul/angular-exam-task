import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  alertTitle: string = 'Parent Alert Title';
  alertDescription: string = 'This is a parent alert description.';
  alertType: string = 'info';

  showChild = false;

  handleClose() {
    this.showChild = false;
  }

  closeAlert() {
    this.showChild = false;
  }
}
