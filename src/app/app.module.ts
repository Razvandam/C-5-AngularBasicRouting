import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './books/book/book-details.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// app.modules.ts
const appRoute: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'books', component: BooksComponent },
  { path: 'books/book/:id', component: BookDetailsComponent },
  // app.modules.ts
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    BooksComponent,
    BookDetailsComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoute), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  booksLink = 'books';
  getbooksLink() {
    return this.booksLink;
  }
}
