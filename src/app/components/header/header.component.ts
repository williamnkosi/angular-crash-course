import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'angular-crash-course';
  constructor() {}

  ngOnInit() {}

  toggleAddTask() {
    console.log('Toggle');
  }
}
