import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  project: Project = {
    id: 0,
    name: 'Sample app',
    summary: 'Description',
    description: 'Further desc',
    projectLink:'',
    tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
    pictures: [],
  }

  constructor(private titleService: Title) {
    this.titleService.setTitle('Tabbatha Souza - Portfolio');
  }
}
