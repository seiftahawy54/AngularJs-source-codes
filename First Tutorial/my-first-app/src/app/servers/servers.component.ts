import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', To choose any type we want
  // selector: '.app-servers',
  selector: 'app-servers',
  // To write the html code inline with main typescript component file
  // Templates have to be present
  /*template:
      `<app-server></app-server>
        <app-server></app-server>`,
  */

  templateUrl: './servers.component.html',
  // To write the html code inline with main typescript component file
  styleUrls: ['./servers.component.css']
  /*
  styles: [`
    h2 {
      color: dodgerblue;
    }
  `]
  */
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(): void {
    // this.serverCreationStatus = 'Server was created';
    this.serverCreationStatus = 'Server was created! name is: ' + this.serverName;
  }

  onUpdateServerName(event: any): void {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
