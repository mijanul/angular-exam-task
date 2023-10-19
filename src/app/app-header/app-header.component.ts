import { Component } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent {
  path = 'https://bit.ly/angular-exam-questions';
  goToLink() {
    window.open(this.path, '_blank');
  }
}
