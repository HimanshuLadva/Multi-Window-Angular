import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/dialog.service';

export interface FormInterface {
  Name: string;
  Age: string;
  College: string;
  Branch: string;
  Code: string;
  Enroll: string;
}
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeComponent {
  d: FormInterface = {
    Name: '',
    Age: '',
    College: '',
    Enroll: '',
    Code: '',
    Branch: '',
  };
  title: string = 'Employee';
  formData$: Observable<any>;

  constructor(
    private dialogRef: MatDialogRef<EmployeeComponent>,
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
