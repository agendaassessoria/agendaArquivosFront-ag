import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-excluir-dialog',
  templateUrl: './excluir-dialog.component.html',
  styleUrls: ['./excluir-dialog.component.css']
})
export class ExcluirDialogComponent  {

  titleDialog: String
  constructor(public ref: DynamicDialogRef,
    public config: DynamicDialogConfig) { }

  ngOnInit() {
    this.titleDialog = this.config.data.title
  }

  accepct() {
    this.ref.close(true);
  }

  dismiss() {
    this.ref.close(false);
  }

}
