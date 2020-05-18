import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @Input() multiple: boolean = false;
  public files = [];
  public disableUpload = true;

  constructor() {}

  ngOnInit(): void {}

  public onFileChoosen(event: Event): void {
    this.files = [...this.files, ...event.target['files']];
    if (!!this.files) this.disableUpload = false;
    console.log(this.files);
  }

  public onRemoveFile(index: number): void {
    this.files.splice(index, 1);
  }

  public onClearAll(): void {
    this.files = [];
    this.disableUpload = true;
  }
}
