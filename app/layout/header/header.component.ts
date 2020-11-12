import { Component, OnInit } from '@angular/core';
import { BreadCrumbItem } from '@progress/kendo-angular-navigation';
const defaultItems: BreadCrumbItem[] = [
  {
      icon: 'home',
  },
  {
      text: 'Products',
      title: 'Products',
  },
  {
      text: 'Computer peripherals',
      title: 'Computer peripherals',
  },
  {
      text: 'Keyboards',
      title: 'Keyboards',
  },
  {
      text: 'Gaming keyboards',
      title: 'Gaming keyboards',
  }
];
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

  constructor() { }
  public listItems: Array<string> = ['En', 'Ar'];

  public items: BreadCrumbItem[] = [...defaultItems];





  ngOnInit(): void {
  }

}
