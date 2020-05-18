import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @Input() multiple: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onFileChange(event: Event) {
    console.log(event.target['files']);
  }
}
