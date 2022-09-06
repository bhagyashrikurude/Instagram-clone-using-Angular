import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  igPosts = [
    {
      // img
      id: 1,
      isImg: true,
      isVideo: false,
      isComment: false,
      user_img:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      user_name: '_john_',
      post: 'https://images.unsplash.com/photo-1587502624372-45627391a31f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
      likes: 701,
      post_caption: '',
      comments: [
        'I like this picture',
        'nice picture',
        'Lovely',
        'beautiful',
        'Fantastic',
        'love for scubadiving',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic ullam voluptatem',
      ],
    },
    {
      id: 2,
      isImg: true,
      isVideo: false,
      isComment: true,
      user_img:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      user_name: '_mary_',
      post: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      likes: 178,
      post_caption: '',
      comments: ['👌👌'],
    },
    {
      // video
      id: 3,
      isImg: false,
      isVideo: true,
      isComment: true,
      user_img:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      user_name: '_pihu.k_',
      post: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      likes: 103,
      post_caption: '',
      comments: ['Amazing'],
    },
    {
      id: 4,
      isImg: false,
      isVideo: true,
      isComment: true,
      user_img:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      user_name: '_smith_',
      post: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      likes: 156,
      post_caption: '',
      comments: ['I like this picture', 'nice picture', 'Lovely'],
    },
    {
      // img with caption
      id: 5,
      isImg: true,
      isVideo: false,
      isComment: true,
      user_img:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      user_name: 'mr.dass_',
      post: 'https://images.unsplash.com/photo-1657214059189-6bace4ad1ab8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
      likes: 428,
      post_caption: "Life is the biggest party you'll ever be at.",
      comments: ['I like this picture', 'beautiful', 'Amazing'],
    },
    {
      id: 6,
      isImg: true,
      isVideo: false,
      isComment: false,
      user_img:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      user_name: '_ms.single_',
      post: 'https://images.unsplash.com/photo-1548366565-6bbab241282d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      likes: 9870,
      post_caption:
        'An apple a day will keep anyone away if you throw it hard enough.',
      comments: '',
    },
    {
      id: 7,
      isImg: true,
      isVideo: false,
      isComment: true,
      user_img:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      user_name: '_ms.sood_',
      post: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      likes: 2348,
      post_caption: 'Give second chances but not for the same mistake.',
      comments: ['I like this picture', 'nice picture', 'Lovely'],
    },
    {
      // video with caption
      id: 8,
      isImg: false,
      isVideo: true,
      isComment: true,
      user_img:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      user_name: '_mr.rk2.0_',
      post: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      likes: 637,
      post_caption:
        'Never sacrifice three things: family, love, and or yourself.',
      comments: ['I like this video', 'nice video'],
    },
    {
      id: 9,
      isImg: false,
      isVideo: true,
      isComment: false,
      user_img:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      user_name: '_nick.j_',
      post: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      likes: 2134,
      post_caption: "You can't dull my sparkle ✨",
      comments: '',
    },
    {
      id: 10,
      isImg: false,
      isVideo: true,
      isComment: true,
      user_img:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      user_name: '_mr.world_',
      post: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      likes: 403,
      post_caption: "I'm an original and that's perfection in itself.",
      comments: ['😍😍'],
    },
  ];

  name = 'Angular';
  element: any = HTMLVideoElement;
  button: any;
  video: any;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(igPost: any) {
    const dialogRef = this.dialog.open(CommentsComponent, {
      maxWidth: '60vw',
      maxHeight: '90vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal',
      data: igPost,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  toggleMute() {
    this.button=document.getElementById("MuteButton")
    this.video=document.getElementById("bgVideo")
    
    if(this.video.muted){
      this.video.muted = false;
    } else {
      this.video.muted = true;
    }
    
    this.button.classList.toggle('muted');
  }

  // play(id: any) {
  //   this.element = document.getElementById(`${id}`);
  //   this.element.play();
  // }
  // pause(id: any) {
  //   // this.element = document.querySelector(`#${id}`);
  //   this.element = document.getElementById(`${id}`);
  //   console.log(this.element)
  //   this.element.pause();
  // }
  // mute(id: any) {
  //   this.element = document.getElementById(`${id}`);
  //   this.element.muted = false;
  // }
}
