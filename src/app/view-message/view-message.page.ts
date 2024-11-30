import { CommonModule } from '@angular/common';
import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, Platform } from '@ionic/angular';
import { DataService, Message, Product } from '../services/data.service';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
})
export class ViewMessagePage implements OnInit {
  public message!: Message;
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);
  products = signal<Product[]>([])

  constructor() { }
  ngOnInit() {
    setInterval(() => {
      this.data.getProducts().subscribe((data) => {
        this.products.set(data.products)
      })
    }, 5000);
  }


  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Inbox' : '';
  }

  totalStock() {
    return this.products().reduce((acc, product) => acc + product.stock, 0);
  }
}
