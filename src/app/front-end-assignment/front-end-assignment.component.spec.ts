import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEndAssignmentComponent } from './front-end-assignment.component';

import {MatSort, MatTableDataSource} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule } from '@angular/material';

import { PapaParseModule } from 'ngx-papaparse';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


describe('FrontEndAssignmentComponent', () => {
  let component: FrontEndAssignmentComponent;
  let fixture: ComponentFixture<FrontEndAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontEndAssignmentComponent ],
      imports: [
        BrowserModule, NgbModule.forRoot() , MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        PapaParseModule,
        BrowserAnimationsModule
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontEndAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
