import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-master-page',
  templateUrl: './main-master-page.component.html',
  styleUrls: ['./main-master-page.component.css'],
})
export class MainMasterPageComponent {
  constructor(private router: Router) {}
}
