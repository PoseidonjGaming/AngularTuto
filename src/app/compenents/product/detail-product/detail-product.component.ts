import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  name?: string
  address?: string
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id') as string
      console.log(id)
      this.getDetail(id)
    })
  }

  getDetail(id: string) {
    switch (id) {
      case '1':
        this.name = 'test'
        this.address = '6 rue du cul'
        break;
      case '2':
        this.name = 'test'
        this.address = '6 rue du cul'
        break;
      default:
        this.router.navigate(['/404'], {
          skipLocationChange: true
        })
       
    }

  }
}
