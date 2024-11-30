import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, Platform } from '@ionic/angular';
import { DataService, Message } from '../services/data.service';

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

  constructor() {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.message = this.data.getMessageById(parseInt(id, 10));
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Inbox' : '';
  }
  products = [
    {
      "_id": "674b2eb7b04794d90f778d9e",
      "name": "Laptop HP",
      "price": 750,
      "stock": 20,
      "category": "Electronics",
      "variants": [
        "Black", "Silver"
      ],
      "supplier": {
        "name": "Tech Solutions Inc.",
        "contact": "contact@techsolutions.com",
        "phone": "123-456-7890"
      },
      "image_url": "https://sis.omega.com.do/ProductImages/ae90d846-3d81-41c9-ba82-dcbbfa80d164.png"
    },
    {
      "_id": "674b2eb7b04794d90f778d9f",
      "name": "Smartphone Samsung Galaxy",
      "price": 650,
      "stock": 50,
      "category": "Electronics",
      "variants": [
        "Blue", "Black", "White"
      ],
      "supplier": {
        "name": "Mobile World Co.",
        "contact": "support@mobileworld.com",
        "phone": "987-654-3210"
      },
      "image_url": "https://i5.walmartimages.com/asr/56a85b8f-866b-42dd-a8e2-7cc1db411277.9266cb9c8a066a60376b05c12631876c.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    },
    {
      "_id": "674b2eb7b04794d90f778da0",
      "name": "Nike Running Shoes",
      "price": 120,
      "stock": 100,
      "category": "Sportswear",
      "variants": [
        "Red", "Blue", "Gray"
      ],
      "supplier": {
        "name": "Nike Inc.",
        "contact": "nike@nike.com",
        "phone": "800-800-8000"
      },
      "image_url": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9fe70154-e4bb-4bcc-9cf0-2efda240916c/NIKE+ZOOMX+VAPORFLY+NEXT%25+3.png"
    },
    {
      "_id": "674b2eb7b04794d90f778da1",
      "name": "Coffee Maker Keurig",
      "price": 120,
      "stock": 30,
      "category": "Home Appliances",
      "variants": [
        "Black", "White"
      ],
      "supplier": {
        "name": "Keurig Dr Pepper",
        "contact": "support@keurig.com",
        "phone": "800-901-0991"
      },
      "image_url": "https://images.keurig.com/is/image/keurig/K-Cafe-Special-Edition-Coffee-Latte-Cappuccino-Maker_en_general?hei=668&wid=668&fmt=jpg&dpr=off"
    },
    {
      "_id": "674b2eb7b04794d90f778da2",
      "name": "Bluetooth Speaker JBL",
      "price": 75,
      "stock": 80,
      "category": "Electronics",
      "variants": [
        "Black", "Red", "Blue"
      ],
      "supplier": {
        "name": "JBL Audio",
        "contact": "info@jbl.com",
        "phone": "877-800-6657"
      },
      "image_url": "https://contents.mediadecathlon.com/m16146232/k$c075ef7510ff0c1c624f238ce2465315/go-4-ultra-portable-bluetooth-speaker-blue-jbl-f526ec43-ca0a-44ec-8ce2-4680a068e9c9.jpg"
    },
    {
      "_id": "674b2eb7b04794d90f778da3",
      "name": "Smartwatch Garmin",
      "price": 199,
      "stock": 60,
      "category": "Electronics",
      "variants": ["Black", "Gray"],
      "supplier": {
        "name": "Garmin Ltd.",
        "contact": "support@garmin.com",
        "phone": "800-800-1020"
      },
      "image_url": "https://ph.garmin.com/m/ph/g/products/forerunner965.jpg"
    },
    {
      "_id": "674b2eb7b04794d90f778da4",
      "name": "Gaming Console Xbox Series X",
      "price": 499,
      "stock": 40,
      "category": "Electronics",
      "variants": ["Black"],
      "supplier": {
        "name": "Microsoft",
        "contact": "support@microsoft.com",
        "phone": "800-642-7676"
      },
      "image_url": "https://www.savepoint.do/cdn/shop/products/XboxOneSeriesX1_1024x1024.jpg?v=1610398661"
    },
    {
      "_id": "674b2eb7b04794d90f778da5",
      "name": "4K TV Samsung",
      "price": 799,
      "stock": 25,
      "category": "Electronics",
      "variants": ["Black"],
      "supplier": {
        "name": "Samsung Electronics",
        "contact": "support@samsung.com",
        "phone": "800-726-7864"
      },
      "image_url": "https://www.elgallomasgallo.com.ni/media/catalog/product/p/a/pantalla-smart-uhd-4k-samsung-un50cu7000pxpa-50-pulgada-183846_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
    },
    {
      "_id": "674b2eb7b04794d90f778da6",
      "name": "Gaming Mouse Razer",
      "price": 79,
      "stock": 120,
      "category": "Accessories",
      "variants": ["Black", "Green"],
      "supplier": {
        "name": "Razer Inc.",
        "contact": "support@razer.com",
        "phone": "800-853-5605"
      },
      "image_url": "https://www.radioshackla.com/media/catalog/product/4/5/459579100015-1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
    },
    {
      "_id": "674b2eb7b04794d90f778da7",
      "name": "Air Fryer Philips",
      "price": 150,
      "stock": 55,
      "category": "Home Appliances",
      "variants": ["Black", "White"],
      "supplier": {
        "name": "Philips",
        "contact": "info@philips.com",
        "phone": "800-234-5678"
      },
      "image_url": "https://cts.com.do/wp-content/uploads/2021/11/71gegF-iXaL._AC_SL1500_-cts-02-600x604.jpg"
    },
    {
      "_id": "674b2eb7b04794d90f778da8",
      "name": "Cordless Vacuum Dyson",
      "price": 299,
      "stock": 35,
      "category": "Home Appliances",
      "variants": ["Silver", "Purple"],
      "supplier": {
        "name": "Dyson Ltd.",
        "contact": "customer.service@dyson.com",
        "phone": "866-693-9766"
      },
      "image_url": "https://www.dyson.com/content/dam/dyson/images/vacuum-cleaners/dyson-cordless-vacuum.png"
    },
    {
      "_id": "674b2eb7b04794d90f778da9",
      "name": "Wireless Earbuds Sony",
      "price": 130,
      "stock": 90,
      "category": "Electronics",
      "variants": ["White", "Black"],
      "supplier": {
        "name": "Sony Corporation",
        "contact": "support@sony.com",
        "phone": "800-222-7669"
      },
      "image_url": "https://sonyworld.qa/cdn/shop/files/5_7f7642ce-f2b2-46fa-8f26-698c9bc73f83.jpg?v=1709530466"
    },
    {
      "_id": "674b2eb7b04794d90f778daa",
      "name": "Fitness Tracker Fitbit",
      "price": 99,
      "stock": 120,
      "category": "Electronics",
      "variants": ["Black", "Pink", "Blue"],
      "supplier": {
        "name": "Fitbit Inc.",
        "contact": "support@fitbit.com",
        "phone": "877-623-4997"
      },
      "image_url": "https://5.imimg.com/data5/CT/BV/MY-9377270/fitbit-charge-hr-fitness-tracker-blue-large-small.jpg"
    },
    {
      "_id": "674b2eb7b04794d90f778dab",
      "name": "Digital Camera Canon",
      "price": 450,
      "stock": 15,
      "category": "Electronics",
      "variants": ["Black"],
      "supplier": {
        "name": "Canon Inc.",
        "contact": "info@canon.com",
        "phone": "800-652-2666"
      },
      "image_url": "https://i.ebayimg.com/thumbs/images/g/B8cAAOSwOK1eThGa/s-l1200.jpg"
    },
    {
      "_id": "674b2eb7b04794d90f778dac",
      "name": "Blender Vitamix",
      "price": 500,
      "stock": 40,
      "category": "Home Appliances",
      "variants": ["Black", "Red"],
      "supplier": {
        "name": "Vitamix",
        "contact": "service@vitamix.com",
        "phone": "800-848-2649"
      },
      "image_url": "https://www.vitamix.com/media/catalog/product/cache/c4c9046d34ee8e88e97d04786b3ce214/g/s/gs-programs-rglam-black_fullsize.jpg"
    },
    {
      "_id": "674b2eb7b04794d90f778dad",
      "name": "Electric Grill George Foreman",
      "price": 75,
      "stock": 70,
      "category": "Home Appliances",
      "variants": ["Black", "Red"],
      "supplier": {
        "name": "George Foreman",
        "contact": "support@georgeforeman.com",
        "phone": "888-552-6467"
      },
      "image_url": "https://d1nymbkeomeoqg.cloudfront.net/photos/22/14/342956_22221_XL.jpg"
    },
    {
      "_id": "674b2eb7b04794d90f778dae",
      "name": "Electric Toothbrush Oral-B",
      "price": 100,
      "stock": 110,
      "category": "Health & Beauty",
      "variants": ["White", "Black"],
      "supplier": {
        "name": "Oral-B",
        "contact": "support@oralb.com",
        "phone": "800-566-4439"
      },
      "image_url": "https://digitalcontent.api.tesco.com/v2/media/ghs/face9d8c-4161-47c1-aa18-9f421227de9c/ad7c0dd4-48fd-428f-83dd-76f788e1b2a9_892319553.jpeg?h=960&w=960"
    },
    {
      "_id": "674b2eb7b04794d90f778daf",
      "name": "Hair Dryer Conair",
      "price": 40,
      "stock": 150,
      "category": "Health & Beauty",
      "variants": ["White", "Pink"],
      "supplier": {
        "name": "Conair",
        "contact": "support@conair.com",
        "phone": "800-326-6247"
      },
      "image_url": "https://m.media-amazon.com/images/I/51EuWPVBmqL.jpg"
    },
    {
      "_id": "674b2eb7b04794d90f778db0",
      "name": "Coffee Grinder Cuisinart",
      "price": 55,
      "stock": 45,
      "category": "Home Appliances",
      "variants": ["Black", "Silver"],
      "supplier": {
        "name": "Cuisinart",
        "contact": "support@cuisinart.com",
        "phone": "800-726-0190"
      },
      "image_url": "https://m.media-amazon.com/images/I/61fv7SyXoQL._AC_UF894,1000_QL80_.jpg"
    },
    {
      "_id": "674b2eb7b04794d90f778db1",
      "name": "Memory Foam Pillow Tempur-Pedic",
      "price": 120,
      "stock": 60,
      "category": "Home Goods",
      "variants": ["White"],
      "supplier": {
        "name": "Tempur-Pedic",
        "contact": "support@tempurpedic.com",
        "phone": "800-821-6621"
      },
      "image_url": "https://homemakersfurniture.scene7.com/is/image/HomemakersFurniture/TEMP469934_A?&wid=622&hei=490&fit=fit,1"
    },
    {
      "_id": "674b2eb7b04794d90f778db2",
      "name": "Electric Blanket Sunbeam",
      "price": 60,
      "stock": 90,
      "category": "Home Goods",
      "variants": ["Gray", "Blue"],
      "supplier": {
        "name": "Sunbeam",
        "contact": "support@sunbeam.com",
        "phone": "800-458-8367"
      },
      "image_url": "https://images.thdstatic.com/productImages/28099ca0-0b4a-4c3c-95b7-71b14f15e6c5/svn/sunbeam-electric-blankets-12548-64_1000.jpg"
    },
    {
      "_id": "674b2eb7b04794d90f778db3",
      "name": "Standing Desk Fully",
      "price": 300,
      "stock": 50,
      "category": "Office Furniture",
      "variants": ["Black", "White"],
      "supplier": {
        "name": "Fully",
        "contact": "support@fully.com",
        "phone": "888-508-4289"
      },
      "image_url": "https://ukstore.hermanmiller.com/cdn/shop/files/Jarvis-Silver-Lam-White-YG-UD-01_716622c6-c33a-45eb-ab9b-81c01813c470.jpg?height=1180&v=1713446675&width=960"
    },
    {
      "_id": "674b2eb7b04794d90f778db4",
      "name": "Mesh Office Chair Herman Miller",
      "price": 450,
      "stock": 30,
      "category": "Office Furniture",
      "variants": ["Gray", "Black"],
      "supplier": {
        "name": "Herman Miller",
        "contact": "info@hermanmiller.com",
        "phone": "800-431-3000"
      },
      "image_url": "https://www.hermanmiller.com/content/dam/hmicom/page_assets/products/cosm_chairs/th_prd_ovw_cosm_chairs_fn.jpg"
    }
  ];

  totalStock() {
    return this.products.reduce((acc, product) => acc + product.stock, 0);
  }
}
