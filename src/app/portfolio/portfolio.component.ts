import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag'
import { ProjectsService } from '../_services/projects.service';
// import { culinaryConnectImg } from '../../assets/culinaryConnectImg.jpg';
// import { weatherDashImg } from '../../assets/weatherDashImg.jpg';
// import { techBlogImg } from '../../assets/techBlogImg';
// import { movieMixImg } from '../../assets/movieMixImg';
// import { codingQuizImg } from '../../assets/codingQuizImg';
// import { socialAPIImg } from '../../assets/socialAPIImg';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];

  isCollapsed: boolean = true;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Tabbatha Souza - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
}
