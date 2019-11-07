import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
    petName = 'puppie';
    petImage = 'https://tunglocpet.com/wp-content/uploads/2018/04/20170102-040905-cho1-2_600x400.jpg';

  constructor() { }
  updateName(name) {
    this.petName = name;
}

updateImage(image) {
    this.petImage = image;
}

  ngOnInit() {
  }

}
