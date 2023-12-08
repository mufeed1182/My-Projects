import { Component, OnInit, SimpleChanges } from '@angular/core';
import { LoginService } from '../login.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  status="login";
  isNavbarVisible: boolean = true;
  routesToHideNavbar: string[] =['/admind','/userd'];

  constructor(private ls:LoginService,private router:Router){}
  ngDoCheck(): void {
    this.ls.fnPublish().subscribe((data)=>{
      this.status=<string>data;
    });
  }

  ngOnInit(): void {
    // Subscribe to route changes
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      // Check if the current route starts with any route in the array of routes to hide the navbar
      const currentRoute = this.router.url.split('?')[0]; // Remove query parameters
      this.isNavbarVisible = !this.routesToHideNavbar.some(routeToHide => currentRoute.startsWith(routeToHide));
    }
  });
  }

  
  ngOnChanges(changes: SimpleChanges):void
  {
    
  }


}
