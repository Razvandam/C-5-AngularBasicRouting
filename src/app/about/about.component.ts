import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  navigateToHome() {
    // this.router.navigate(['home']);
    // this.router.navigateByUrl('home');
    this.router.navigate(['../home'], { relativeTo: this.activatedRoute });
  }
}
