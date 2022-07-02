import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-lister-client',
  templateUrl: './lister-client.component.html',
  styleUrls: ['./lister-client.component.css']
})
export class ListerClientComponent implements OnInit {
  public clients!: Client[];
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getClientList();
  }
  public getClientList(): void{
    this.clientService.getClientList().subscribe(
      (response: Client[]) => {
        this.clients = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
