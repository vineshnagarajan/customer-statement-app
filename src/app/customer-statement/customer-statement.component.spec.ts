import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerStatementComponent } from './customer-statement.component';

import {MatSort, MatTableDataSource} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule } from '@angular/material';

import { PapaParseModule } from 'ngx-papaparse';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


describe('CustomerStatementComponent', () => {
  let component: CustomerStatementComponent;
  let fixture: ComponentFixture<CustomerStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerStatementComponent ],
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
    fixture = TestBed.createComponent(CustomerStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
