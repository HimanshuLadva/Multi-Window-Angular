import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css'],
})
export class Section1Component {
  currentPage: string;

  constructor(
    private route: ActivatedRoute,
    private dialogSer: DialogService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((res) => {
      this.currentPage = res['pageName'];
    });
  }

  openDialogInAdd() {
    this.dialogSer.openDialogInAdd(this.currentPage);
  }
  
  openDialogInEdit() {}
}
