import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploaderService {
  private http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }

  public uploadFiles(files: Array<File>): Observable<any> {
    const url = 'http://localhost:9000/api/upload-files';
    return this.http.post(url, files);
  }
}
