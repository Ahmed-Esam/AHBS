import { Component, OnInit } from '@angular/core';
import { BreadCrumbItem } from '@progress/kendo-angular-navigation';
const defaultItems: BreadCrumbItem[] = [
  {
      text: 'Home',
      title: 'Home',
      icon: 'home'
  },
  {
      text: 'Products',
      title: 'Products'
  },
  {
      text: 'Computer peripherals',
      title: 'Computer peripherals'
  },
  {
      text: 'Keyboards',
      title: 'Keyboards'
  },
  {
      text: 'Gaming keyboards',
      title: 'Gaming keyboards'
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

  public onItemClick(item: BreadCrumbItem): void {
      const index = this.items.findIndex(e => e.text === item.text);
      this.items = this.items.slice(0, index + 1);
      console.log('HeaderComponent   ')
  }

  public refreshBreadCrumb(): void {
      this.items = [...defaultItems];
  }
  ngOnInit(): void {
  }

}
