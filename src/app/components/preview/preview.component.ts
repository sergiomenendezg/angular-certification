import { Component, Input, OnInit } from '@angular/core';
import { ConfiguratorService } from '../../services/configurator/configurator.service';
import { Selection } from '../../models/selection';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss'
})
export class PreviewComponent implements OnInit {

  imagePath = '';

  constructor(private configuratorService: ConfiguratorService){
  }

  ngOnInit(): void {
    this.configuratorService.options.subscribe((data: Selection| null) => 
      this.imagePath = data && data.colorCode && data.modelCode ? `assets/images/${data.modelCode}/${data.colorCode}.jpg`: ''
    )
  }
}
