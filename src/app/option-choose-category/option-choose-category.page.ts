import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-option-choose-category',
  templateUrl: './option-choose-category.page.html',
  styleUrls: ['./option-choose-category.page.scss'],
})
export class OptionChooseCategoryPage implements OnInit {
  category:any = [];
  constructor(private router: Router) { }

  ngOnInit() {
    this.category = [
      {"id":1, "name":"General knowladge"},
      {"id":2, "name":"History"},
      {"id":3, "name":"Art"},
      {"id":4, "name":"Mix"}
    ]
  }

  choosedCategory(id){
    console.log(id);
    this.router.navigateByUrl("/option-choose");
  }
}
