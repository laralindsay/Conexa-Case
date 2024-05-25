import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { GetProfessionalService } from 'src/app/services/get-professional.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { People } from 'src/app/types/people.interface';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss'],
  standalone: true,
  providers: [MatDatepickerModule],
  imports: [
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
    MatIconModule,
  ],
})
export class ProfessionalComponent implements OnInit {
  constructor(private professionalservice: GetProfessionalService) {}
  selected: Date | null | undefined;

  people$: any;
  dateSchedule$: any = [];
  dates:any = [];

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    this.professionalservice.getProfessional().subscribe((data: People[]) => {
      this.people$ = data;
      this.dateSchedule$ = data.forEach(res => {
        this.dates = res.avaliableDates;
      });
    });
  }
}
