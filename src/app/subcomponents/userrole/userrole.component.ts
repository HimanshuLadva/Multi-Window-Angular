import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogService } from 'src/app/dialog.service';

@Component({
  selector: 'app-userrole',
  templateUrl: './userrole.component.html',
  styleUrls: [
    './userrole.component.css',
    './../employee/employee.component.css',
  ],
})
export class UserroleComponent {
  d: any = {};
  form: FormGroup;
  title: string = 'UserRole';

  constructor(
    private dialogRef: MatDialogRef<UserroleComponent>,
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
