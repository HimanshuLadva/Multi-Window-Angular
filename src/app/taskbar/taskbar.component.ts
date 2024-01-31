import { Component } from '@angular/core';
import { DialogService } from '../dialog.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.css'],
})
export class TaskbarComponent {
  dialogs: any = [];
  constructor(private dialogService: DialogService) {}

  ngOnInit() {
    // this.dialogs = this.dialogService.dialogArr;
    this.dialogService.dialogObservable
      .pipe(filter((res) => res != null))
      .subscribe((res) => {
        this.dialogs = res;
      });
  }

  openDialog(page: string, data: any) {
      console.log('Taskbar', data);
      this.dialogService.openDialogInAdd(page, data);
  }

  close() {}
}
