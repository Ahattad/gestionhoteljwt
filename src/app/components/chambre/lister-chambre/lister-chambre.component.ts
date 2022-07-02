import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chambre } from 'src/app/models/chambre';
import { ChambreService } from 'src/app/services/chambre.service';

@Component({
  selector: 'app-lister-chambre',
  templateUrl: './lister-chambre.component.html',
  styleUrls: ['./lister-chambre.component.css']
})
export class ListerChambreComponent implements OnInit {

  public chambres!: Chambre[];
  constructor(private chambreService: ChambreService) { }

  ngOnInit(): void {
    this.getChambreList();
  }
  public getChambreList(): void{
    this.chambreService.getChambreList().subscribe(
      (response: Chambre[]) => {
        this.chambres = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
