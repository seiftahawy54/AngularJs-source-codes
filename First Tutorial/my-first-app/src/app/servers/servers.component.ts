import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // To write the html code inline with main typescript component file
  // Templates have to be present
  template:
      `<app-server></app-server>
            Testing
        <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
