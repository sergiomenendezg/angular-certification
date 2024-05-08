import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { Step1Component } from '../../components/step1/step1.component';
import { Step2Component } from '../../components/step2/step2.component';
import { Step3Component } from '../../components/step3/step3.component';
import { PreviewComponent } from '../../components/preview/preview.component';
import {  TranslateModule} from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ConfiguratorService } from '../../services/configurator/configurator.service';
import {MatCardModule} from '@angular/material/card';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  providers: [ApiService, ConfiguratorService],
  imports: [MatTabsModule, MatButtonModule, 
    Step1Component, Step2Component, Step3Component,
    PreviewComponent, TranslateModule, CommonModule,
    MatCardModule, RouterOutlet,
    RouterLink],
    
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  activeLink = '/home/step1';
  links = [{link:'/home/step1', label: 'Step 1'},
    {link: '/home/step2', label: 'Step 2'},
    {link: '/home/step3', label: 'Step 3'}
];

  constructor(public configuratorService: ConfiguratorService){}

  isDisabled(index: number){
    switch(index){
      case 1:
        return !this.configuratorService.model || !this.configuratorService.color;
      case 2:
        return !this.configuratorService.config;
      default:
        return false;
    }
  }
}
