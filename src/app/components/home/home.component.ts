import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { TrendingNewsComponent } from "./trending-news/trending-news.component";
import { MainNewsComponent } from "./main-news/main-news.component";
import { QuickLinksComponent } from "./quick-links/quick-links.component";

@Component({
  selector: 'app-home',
  imports: [FooterComponent, HeaderComponent, TrendingNewsComponent, MainNewsComponent, QuickLinksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
