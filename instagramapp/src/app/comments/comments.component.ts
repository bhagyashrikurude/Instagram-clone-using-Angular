import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  userid: any;
  user: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.user = data;                                                                                                
  } 

  ngOnInit(): void {}
}
