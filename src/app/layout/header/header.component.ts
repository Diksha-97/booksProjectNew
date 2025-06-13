import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  bookObj = {
    title: '',
    genre: '',
    author: '',
    _id: '',
  };

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
  books: any = [];
  action: string = 'ENTRY';
  activeTab = 'tab1';
  // updateBtnFlag: boolean = false;

  selectTab(tab: string) {
    this.activeTab = tab;
    this.reset();
    // if (tab=='tab2') {
    //   this.action="ENTRY"
      
    // }
  }

  ngOnInit(): void {
    this.detailsApi();
    //this.entryApi();
    console.log(this.baseUrl);
  }
  detailsApi() {
    this.http
      .get<{ data: any }>(this.baseUrl + 'api/books')
      .subscribe((res) => {
        console.log(res.data);
        this.books = res.data;
      });
  }

  entryApi() {
    this.http
      .post<{ statuscode: number; message: string }>(
        this.baseUrl + 'api/books',
        this.bookObj
      )
      .subscribe((res) => {
        console.log(res);
        if (res.statuscode == 201) {
          alert(res.message);
          this.selectTab('tab1');
        }
      });
  }
  onSubmit(myForm: NgForm) {
    console.log(this.bookObj);
    //this.entryApi();
    this.editBookApi();
  }
  reset() {
    (this.bookObj.author = ''),
      (this.bookObj.title = ''),
      (this.bookObj.genre = '');
  }
  updateBook(item: any) {
    console.log(item);
    this.action='UPDATE';
    //this.updateBtnFlag = true;

    this.selectTab('tab2');
    this.bookObj.title = item.title;
    this.bookObj.genre = item.genre;
    this.bookObj.author = item.author;
    this.bookObj._id = item._id;

    //this.bookObj=item;
  }
  editBookApi() {
    //this.updateBtnFlag = true;
    this.http
      .put<{ statuscode: number; message: string }>(
        this.baseUrl + 'api/books/' + this.bookObj._id,
        this.bookObj
      )
      .subscribe((res) => {
        console.log(res);
        if (res.statuscode == 200) {
          alert(res.message);
          this.selectTab('tab1');
          this.detailsApi();
        }
      });
  }

  deleteBook(item: any) {
    this.bookObj._id = item._id;
    console.log(this.bookObj);
  }

  deletBookApi() {
    this.http
      .delete<{ statuscode: number; message: string }>(
        this.baseUrl + 'api/books/' + this.bookObj._id
      )
      .subscribe((res) => {
        console.log(res);
        if (res.statuscode == 200) {
          alert(res.message);
          this.detailsApi();
          // Close Bootstrap modal
          const modalElement = document.getElementById('exampleModal');
          if (modalElement) {
            (window as any).bootstrap.Modal.getInstance(modalElement)?.hide();
          }
        }
      });
  }
}
