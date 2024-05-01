import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recherchee-dmi',
  templateUrl: './recherchee-dmi.component.html',
  styleUrls: ['./recherchee-dmi.component.scss']
})
export class RechercheeDmiComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }


  goTo(text :any){
    const url = text
    this.router.navigateByUrl(url)
  }

}
