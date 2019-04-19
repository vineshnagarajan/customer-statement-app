import { Component , OnInit , ViewChild } from '@angular/core';
import { PapaParseService } from 'ngx-papaparse';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-front-end-assignment',
  templateUrl: './front-end-assignment.component.html',
  styleUrls: ['./front-end-assignment.component.css']
})
export class FrontEndAssignmentComponent implements OnInit {
  title = 'Reports';
  displayLog = '';
  myDataArray = new MatTableDataSource<any>();
  displayedColumns = [];
  @ViewChild(MatSort) sort: MatSort;

  constructor(private papa: PapaParseService) { }
  public changeListener(files: FileList) {
    console.log(files);
    if (files && files.length > 0) {
      const file: File = files.item(0);
      console.log(file.name);
      console.log(file.size);
      console.log(file.type);
      const reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        const csv: string = reader.result;
        console.log(csv);
      };
      this.papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          console.log('Parsed: ', results);
          console.log('JSON: ', JSON.stringify(results.data));
          console.log('Column names: ', results.meta.fields);
          this.displayLog = JSON.stringify(results.data);
          this.myDataArray = new MatTableDataSource(results.data);
          this.displayedColumns = results.meta.fields;
          this.myDataArray.sort = this.sort;
        }
      });
        }
  }

  ngOnInit() {
  }

}
