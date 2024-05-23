import { Component, Input, OnInit } from '@angular/core';

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
  @Input() rating: number | any;

  constructor(private professionalservice: GetProfessionalService) {}

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  selected: Date | null | undefined;

  people$: any;

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    this.professionalservice.getProfessional().subscribe((data: People[]) => {
      this.people$ = data;
    });
  }

  get stars() {
    return Array(Math.floor(this.rating)).fill(0);
  }


}
