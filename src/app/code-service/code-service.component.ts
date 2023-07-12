import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-code-service',
  templateUrl: './code-service.component.html',
  styleUrls: ['./code-service.component.css']
})
export class CodeExecutionService {

  constructor(private http: HttpClient) { }
  
  executeCode(content: string) {
    const url = 'http://localhost:3000/api/run/java/latest';
    const body = { files: [{ name: 'Tricount.java', content: content }] };

    return this.http.post(url, body).toPromise();
  }
}