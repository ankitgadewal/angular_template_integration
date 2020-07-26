import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-newapi',
  templateUrl: './newapi.component.html',
  styleUrls: ['./newapi.component.css']
})
export class NewapiComponent implements OnInit {
  data = [];
  constructor(private singleclass:DataService) {
    this.singleclass.getData().subscribe(data=>{
      console.warn(data);
      this.data = data;
    })
  }

  ngOnInit(): void {
  }

}
