import { Component } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent {
  path = '../../assets/questions/AngularExam/Sheet1.html';
  goToLink() {
    window.open(this.path, '_blank');
  }
}
