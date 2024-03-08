import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {
      id: 0,
      name: "Culinary Connect - Group Collaboration",
      pictures: ["../../assets/culinaryConnectImg.jpg", "../../assets/movieMixImg.jpg", "../../assets/techBlogImg.jpg",],
      githubLink: "https://github.com/quar-tech/mvc-recipe-sharing",
      projectLink: "https://mvc-culinary-connect-e00ad0e3e10d.herokuapp.com/",
      summary: "Brief summary",
      description: "Full Description of Project",
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
    },
    {
      id: 1,
      name: "MovieMix & Sip - Group Collaboration",
      pictures: ["../../assets/movieMixImg.jpg", "../../assets/movie-mix-1.jpg", "../../assets/movie-mix-2.jpg", "../../assets/movie-mix-3.jpg", "../../assets/movie-mix-4.jpg", "../../assets/movie-mix-5.jpg",],
      githubLink: "https://github.com/ucb-allstars-project-1/movie-cocktail-combo",
      projectLink: "https://ucb-allstars-project-1.github.io/movie-cocktail-combo/",
      summary: "An app that pairs your favorite movie with a delicious cocktail. Fetches from APIs to display movie data and cocktail prep instructions.",
      description: "The ultimate movie companion for film enthusiasts and cocktail aficionados. The interactive application allows the user to enter the film of their choice, explore in-depth film details, and find the perfect cocktail to complement their viewing experience. Save your favorite drinks for later using local storage. Calls upon two server-side APIs to display data to the page. Mobile-friendly app.  ",
      tags: [Tag.JAVASCRIPT, Tag.CSS, Tag.BULMA, Tag.RESTFULAPIS, Tag.HTML ],
    },
    {
      id: 2,
      name: "Tech Blog",
      pictures: ["../../assets/tech-blog-1.jpg", "../../assets/tech-blog-2.jpg", "../../assets/tech-blog-3.jpg", "../../assets/tech-blog-4.jpg", "../../assets/tech-blog-5.jpg",],
      githubLink: "https://github.com/tabbdacat/tech-blog",
      projectLink: "https://tech-blog-t-pischke-400d3e7cf65d.herokuapp.com/",
      summary: "An interactive community for users to publish blog posts, read and comment on other developers' posts",
      description: "The Tech Blog serves as an interactive space for developers to publish, read and comment on other developers' blog posts. The application follows the Model-View-Controller paradigm in its architectural structure. Authentication is required to log in so that the user can post an article and comment on other posts as well. Through the use of cookies, a user session is created at login. Environmental variables store sensitive data for security. RESTful APIs using CRUD operations help manage data from the application.",
      tags: [Tag.BOOTSTRAP, Tag.JAVASCRIPT, Tag.NODEJS, Tag.SQL, Tag.CSS, Tag.RESTFULAPIS,
        // Tag.HANDLEBARS, 
      ],
    },
    {
      id: 3,
      name: "Weather Dashboard",
      pictures: ["../../assets/culinaryConnectImg.jpg", "../../assets/movieMixImg.jpg", "../../assets/techBlogImg.jpg",],
      githubLink: "https://github.com/tabbdacat/weather-dashboard",
      projectLink: "https://tabbdacat.github.io/weather-dashboard/",
      summary: "Brief summary",
      description: "Full Description of Project",
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
    },
    {
      id: 4,
      name: "Coding Quiz",
      pictures: ["../../assets/culinaryConnectImg.jpg", "../../assets/movieMixImg.jpg", "../../assets/techBlogImg.jpg",],
      githubLink: "https://github.com/tabbdacat/coding-quiz",
      projectLink: "https://tabbdacat.github.io/coding-quiz/",
      summary: "Brief summary",
      description: "Full Description of Project",
      tags: [Tag.ANGULAR,],
    },
    {
      id: 5,
      name: "Social Network API",
      pictures: ["../../assets/culinaryConnectImg.jpg", "../../assets/movieMixImg.jpg", "../../assets/techBlogImg.jpg",],
      githubLink: "https://github.com/tabbdacat/social-network-api",
      projectLink: "https://drive.google.com/file/d/1xwfROda1DgFF3f8CBdpaUapTH7MgSlPs/view",
      summary: "Brief summary",
      description: "Full Description of Project",
      tags: [Tag.ANGULAR,],
    },
  ];

  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number): Project {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError('There is no project that matches the id:' + id)
    }

    return project;
  }

  GetProjectByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true;

      filterTags.forEach(function (filterTag) {
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });

      if (foundAll) {
        filteredProjects.push(project);
      }
    })

    return filteredProjects;
  }

}
