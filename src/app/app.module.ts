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
    FooterComponent
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
