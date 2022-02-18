import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  name: string
  constructor(private translate: TranslateService, private router: Router,) {

    this.name = localStorage.getItem('name')!;

    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang();
    var language = localStorage.getItem('lang') == 'FRENCH' ? 'fr' : 'en';
    translate.use(language);
  }

  ngOnInit(): void {

  }
  loggedOut() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('name');
    localStorage.removeItem('lang');
    this.router.navigate(['/sign-in']);

  }

}
