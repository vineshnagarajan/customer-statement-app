import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Issue } from '../models/issue.model';


@Injectable({
  providedIn: 'root'
})
export class FileParserService {
  parsedResult: Issue[] = [];

  constructor() { }

  getHeaderArray(csvRecordsArr: any): Observable<any> {

    return of(['firstName', 'surName', 'issueCount', 'dateOfBirth']);

  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any): Observable<Issue[]> {
    const dataArr = [];
    const records: Issue[] = [];
console.log('csv record array');
console.log(csvRecordsArray);
    for (let i = 1; i < csvRecordsArray.length; i++) {
      const data = csvRecordsArray[i].split(',');

      if (data.length === headerLength) {

        records.push(this.createIssue(data));
      }
    }
    return of(records);
  }

  createIssue(data): Issue {
    return {
      firstName: data[0].trim(),
      surName: data[1].trim(),
      issueCount: data[2].trim(),
      dateOfBirth: data[3].trim()
    };
  }

}
