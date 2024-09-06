import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
}

@Component({
  selector: 'app-login',
  templateUrl: 'logion.page.html',
  styleUrls: ['login.page.scss'],
})
export class HomePage {
  nombre: string = '';

  
}