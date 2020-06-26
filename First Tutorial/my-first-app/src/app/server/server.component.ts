// Server components' decorators
import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})


export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  getServerStatus(): string {
    return this.serverStatus;
  }

  getColor(): string {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }

}
