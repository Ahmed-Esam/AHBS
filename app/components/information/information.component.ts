import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  constructor() { }
  public listItems = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'];
    public date: Date;
    public age: number;
    public size: string;
    public firstName = 'John';
    public lastName = 'Doe';


  ngOnInit(): void {
  }

}
