import { Component, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EmployeeComponent } from './subcomponents/employee/employee.component';
import { StudentComponent } from './subcomponents/student/student.component';
import { VehicleComponent } from './subcomponents/vehicle/vehicle.component';
import { UserroleComponent } from './subcomponents/userrole/userrole.component';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private dialogSubject = new BehaviorSubject<any[]>(null);
  dialogObservable = this.dialogSubject.asObservable();

  // private dialogDataSubject = new BehaviorSubject<any>(null);
  // dialogDataObservable = this.dialogDataSubject.asObservable();
  dialogArr: any[] = [];

  constructor(private dialog: MatDialog) {}
  openDialogInAdd(page: string, data = null) {
    let component: any;

    console.log('dialog Service', data);
    if (data) {
      // this.dialogDataSubject.next(data);
      // this.IsInEditMode = true;
    }

    switch (page) {
      case 'employee':
        component = EmployeeComponent;
        break;
      case 'student':
        component = StudentComponent;
        break;
      case 'vehicle':
        component = VehicleComponent;
        break;
      case 'users':
        component = UserroleComponent;
    }
    const dialogRef = this.dialog.open(component, {
      width: '700px',
      height: '300.40px',
      disableClose: true,
      data: data || null,
    });

    if (this.dialogArr.findIndex((ele) => ele['page'] == page) == -1) {
      this.dialogArr.push({
        component: component,
        page: page,
      });
      this.dialogSubject.next(this.dialogArr);
    }

    dialogRef.afterClosed().subscribe(() => {});
  }

  close(dialogRef: any) {
    this.dialogArr.pop();
    this.dialogSubject.next(this.dialogArr);
    dialogRef.close();
    if (this.dialogArr.length == 0) {
      // this.dialogDataSubject.complete();
      this.dialogSubject.complete();
    }
  }

  minimize(dialogRef: any, data: any, page: string) {
    this.dialogArr = this.dialogArr.map((ele) => {
      if (ele['page'] === page) {
        ele['data'] = data;
      }
      return ele;
    });
    console.log('minimize', this.dialogArr, page);
    this.dialogSubject.next(this.dialogArr);
    dialogRef.close();
  }

  openDialogInEdit() {}
}
