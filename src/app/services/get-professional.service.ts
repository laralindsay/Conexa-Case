import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { People } from '../types/people.interface';

@Injectable({
  providedIn: 'root',
})
export class GetProfessionalService {
  readonly apiUrl =
    'https://sa-east-1.aws.data.mongodb-api.com/app/application-0-oifgrnt/endpoint/people';

  constructor(private httpClient: HttpClient) {}

  getProfessional() {
    return this.httpClient.get<People[]>(this.apiUrl);
  }
}
