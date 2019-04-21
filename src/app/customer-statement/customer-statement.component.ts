import { Component, OnInit, ViewChild } from '@angular/core';
import { PapaParseService } from 'ngx-papaparse';
import { MatSort, MatTableDataSource } from '@angular/material';
import { FileParserService } from '../shared/services/file-parser.service';

@Component({
  selector: 'app-front-end-assignment',
  templateUrl: './customer-statement.component.html',
  styleUrls: ['./customer-statement.component.css']
})
export class CustomerStatementComponent implements OnInit {
  title = 'Reports';
  displayLog = '';
  myDataArray = new MatTableDataSource<any>();
  displayedColumns = [];
  @ViewChild(MatSort) sort: MatSort;

  constructor(private papa: PapaParseService, private fileParserService: FileParserService) { }
  public changeListener(files: FileList) {
    let csvData: any;
    console.log(files);
    if (files && files.length > 0) {
      const file: File = files.item(0);
      console.log(file.name);
      if (!file.name.includes('csv')) {
        alert('Please Select Valid CSV file ');
      }
      const reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        csvData = reader.result;
        const csvRecordsArray = csvData.toString().split(/\r\n|\n/);
        let headersRow: any;
        console.log(csvData);
        this.fileParserService
          .getHeaderArray(csvRecordsArray).subscribe(headers => {
            console.log('headers', headers);
            headersRow = headers;

          });

        this.fileParserService.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length)
          .subscribe(result => {
            console.log('headers', result);
            this.myDataArray = new MatTableDataSource(result);
            this.myDataArray.sort = this.sort;
            this.displayedColumns = headersRow;
          });
      };
      reader.onerror = function () {
        alert('Unable to read ' + files.item(0));
      };
    } else {
      alert('Please import valid .csv file.');
    }
  }

  ngOnInit() {
  }

}
