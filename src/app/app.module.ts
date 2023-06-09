import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AngularMaterialModule } from './angular-material.module';
import { HeaderComponent } from './components/header/header.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { LastPostComponent } from './components/last-post/last-post.component';
import { PostGalleryComponent } from './components/post-gallery/post-gallery.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostHeroComponent } from './components/post-hero/post-hero.component';
import { PostInfoComponent } from './components/post-info/post-info.component';
import { TripReviewComponent } from './components/trip-review/trip-review.component';
import { TripGalleryComponent } from './components/trip-gallery/trip-gallery.component';
import { BackButtonComponent } from './components/back-button/back-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostPageComponent,
    NotFoundComponent,
    HeaderComponent,
    PostCardComponent,
    LastPostComponent,
    PostGalleryComponent,
    FooterComponent,
    PostHeroComponent,
    PostInfoComponent,
    TripReviewComponent,
    TripGalleryComponent,
    BackButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
