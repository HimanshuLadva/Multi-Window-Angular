import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/dialog.service';
import { FormInterface } from '../employee/employee.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface StudentInterface {
  Name: string;
  Age: string;
  College: string;
  Branch: string;
  Code: string;
  Enroll: string;
}
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: [
    './student.component.css',
    './../employee/employee.component.css',
  ],
})
export class StudentComponent {
  d: FormInterface = {
    Name: '',
    Age: '',
    College: '',
    Enroll: '',
    Code: '',
    Branch: '',
  };
  title: string = 'Student';
  formData$: Observable<any>;

  constructor(
    private dialogRef: MatDialogRef<StudentComponent>,
    private fb: FormBuilder,
    private dialogService: DialogService,
    @Inject(MAT_DIALOG_DATA) public data: FormInterface
  ) {}
  form: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      Name: ['', Validators.required],
      Age: ['', Validators.required],
      College: ['', Validators.required],
      Enroll: ['', Validators.required],
      Branch: ['', Validators.required],
      Code: ['', Validators.required],
    });
    if (this.data) {
      this.loadForm();
    }
  }

  loadForm() {
    this.form.patchValue(this.data);
  }

  submitForm() {
    this.d = this.form.value;
    this.form.reset();
  }

  close() {
    this.dialogService.close(this.dialogRef);
  }

  minimize() {
    this.d = this.form.value;
    this.form.reset();
    this.dialogService.minimize(
      this.dialogRef,
      this.d,
      this.title.toLocaleLowerCase()
    );
  }
}
