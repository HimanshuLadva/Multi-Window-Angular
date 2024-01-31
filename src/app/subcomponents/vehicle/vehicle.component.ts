import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogService } from 'src/app/dialog.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: [
    './vehicle.component.css',
    './../employee/employee.component.css',
  ],
})
export class VehicleComponent {
  d: any = {};
  form: FormGroup;
  title: string = 'Vehicle';

  constructor(
    private dialogRef: MatDialogRef<VehicleComponent>,
    private fb: FormBuilder,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      Name: [''],
      Age: [''],
      College: [''],
      Enroll: [''],
      Branch: [''],
      Code: [''],
    });
  }

  submitForm() {
    this.d = this.form.value;
  }

  close() {
    this.dialogService.close(this.dialogRef);
  }

  minimize() {
    this.d = this.form.value;
    this.dialogService.minimize(
      this.dialogRef,
      this.d,
      this.title.toLocaleLowerCase()
    );
  }
}
