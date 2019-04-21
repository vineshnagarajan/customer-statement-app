import { TestBed, inject } from '@angular/core/testing';

import { FileParserService } from './file-parser.service';

import { Issue } from '../models/issue.model';


describe('CustomerStatementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileParserService]
    });
  });

  it('should be created', inject([FileParserService], (service: FileParserService) => {
    expect(service).toBeTruthy();
  }));

  it('should parse a csv string to an Issue Object', () => {
    const service: FileParserService = TestBed.get(FileParserService);
    let issues: Issue[] = [];
    service.getDataRecordsArrayFromCSVFile([
      '"First name","Sur name","Issue count","Date of birth"',
      '"Theo","Jansen",5,"1978-01-02T00:00:00"',
      '"Fiona","de Vries",7,"1950-11-12T00:00:00"'
    ], 4).subscribe(result => {
      console.log('headers', result);
      issues = (result);
    });
    const expectedArray: Issue[] = [
      {
        firstName: 'Theo',
        surName: 'Jansen',
        issueCount: 5,
        dateOfBirth: new Date('1978-01-02T00:00:00'),
      },

      {
        firstName: 'Fiona',
        surName: 'de Vries',
        issueCount: 7,
        dateOfBirth: new Date('1950-11-12T00:00:00'),
      }];
    expect(issues.length).toEqual(expectedArray.length);
  });
});
