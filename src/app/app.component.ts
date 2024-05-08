import {Component, importProvidersFrom} from '@angular/core';
import {AsyncPipe, CommonModule, JsonPipe} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {  TranslateModule, TranslateService } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [
  ],
  imports: [AsyncPipe, JsonPipe, CommonModule,
    RouterOutlet,
    HttpClientModule,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
