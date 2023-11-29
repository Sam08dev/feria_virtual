import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(public router:Router){}

  public menus : any = [
    {option:"Registro"},
    {option:"Gestion de ferias vituales"},
    {option:"Creación de ferias virtuales"},
    {option:"Modificación de ferias virtuales"},

  ];

  ngOnInit(): void {

  }

  redirect(route:string){
    this.router.navigate([route]);
  }
}
