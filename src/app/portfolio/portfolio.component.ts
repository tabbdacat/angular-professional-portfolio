import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag'
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];

  isCollapsed: boolean = true;
  typeScript: boolean = false;
  angular: boolean = false;
  javaScript: boolean = false;
  html: boolean = false;
  css: boolean = false;
  jquery: boolean = false;
  bootstrap: boolean = false;
  react: boolean = false;
  nodejs: boolean = false;
  materialui: boolean = false;
  restfulapis: boolean = false;
  mongodb: boolean = false;
  sql: boolean = false;
  bulma: boolean = false;
  filtering: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Tabbatha Souza - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter() {
    let filterTags: Tag[] = [];

    if (this.typeScript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.javaScript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if (this.html) {
      filterTags.push(Tag.HTML);
    }
    if (this.css) {
      filterTags.push(Tag.CSS);
    }
    if (this.jquery) {
      filterTags.push(Tag.JQUERY);
    }
    if (this.bootstrap) {
      filterTags.push(Tag.BOOTSTRAP);
    }
    if (this.react) {
      filterTags.push(Tag.REACT);
    }
    if (this.nodejs) {
      filterTags.push(Tag.NODEJS);
    }
    if (this.materialui) {
      filterTags.push(Tag.MATERIALUI);
    }
    if (this.restfulapis) {
      filterTags.push(Tag.RESTFULAPIS);
    }
    if (this.mongodb) {
      filterTags.push(Tag.MONGODB);
    }
    if (this.sql) {
      filterTags.push(Tag.SQL);
    }
    if (this.bulma) {
      filterTags.push(Tag.BULMA);
    }
    if (this.typeScript || this.angular || this.javaScript || this.html || this.css || this.jquery || this.bootstrap || this.react || this.nodejs || this.materialui || this.restfulapis || this.mongodb || this.sql || this.bulma) {
      this.filtering = true;
    } else {
      this.filtering = false;
    }

    this.projects = this.projectService.GetProjectByFilter(filterTags);
  }

  ResetFilters() {
    this.typeScript = false;
    this.angular = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
}
