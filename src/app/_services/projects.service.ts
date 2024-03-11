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
      pictures: ["../../assets/culinary-1.jpg", "../../assets/culinary-2.jpg", "../../assets/culinary-3.jpg", "../../assets/culinary-4.jpg", "../../assets/culinary-5.jpg",],
      githubLink: "https://github.com/quar-tech/mvc-recipe-sharing",
      projectLink: "https://mvc-culinary-connect-e00ad0e3e10d.herokuapp.com/",
      summary: " A platform for sharing recipes. Post your own recipe, or try a new one. Share your favorites with others.",
      description: "A platform for sharing recipes. Users can create, comment on, and try others' recipes. This app uses Nodemailer to send recipes to your friends and family. Express is utilized to for app routes. Database ORM is maintained by Sequelize. Passwords are hashed via Bcrypt and sessions are maintained using cookies. This project is deployed via Heroku.",
      tags: [Tag.SQL, Tag.BOOTSTRAP, Tag.HANDLEBARS, Tag.NODEJS, Tag.CSS, Tag.JAVASCRIPT],
    },
    {
      id: 1,
      name: "MovieMix & Sip - Group Collaboration",
      pictures: ["../../assets/movieMixImg.jpg", "../../assets/movie-mix-1.jpg", "../../assets/movie-mix-2.jpg", "../../assets/movie-mix-3.jpg", "../../assets/movie-mix-4.jpg", "../../assets/movie-mix-5.jpg",],
      githubLink: "https://github.com/ucb-allstars-project-1/movie-cocktail-combo",
      projectLink: "https://ucb-allstars-project-1.github.io/movie-cocktail-combo/",
      summary: "An app that pairs your favorite movie with a delicious cocktail. Fetches from APIs to display movie data and cocktail prep instructions.",
      description: "The ultimate movie companion for film enthusiasts and cocktail aficionados. The interactive application allows the user to enter the film of their choice, explore in-depth film details, and find the perfect cocktail to complement their viewing experience. Save your favorite drinks for later using local storage. Calls upon two server-side APIs to display data to the page. Mobile-friendly app.  ",
      tags: [Tag.JAVASCRIPT, Tag.CSS, Tag.BULMA, Tag.RESTFULAPIS, Tag.HTML],
    },
    {
      id: 2,
      name: "Tech Blog",
      pictures: ["../../assets/tech-blog-1.jpg", "../../assets/tech-blog-2.jpg", "../../assets/tech-blog-3.jpg", "../../assets/tech-blog-4.jpg", "../../assets/tech-blog-5.jpg",],
      githubLink: "https://github.com/tabbdacat/tech-blog",
      projectLink: "https://tech-blog-t-pischke-400d3e7cf65d.herokuapp.com/",
      summary: "An interactive community for users to publish blog posts, read and comment on other developers' posts.",
      description: "The Tech Blog serves as an interactive space for developers to publish, read and comment on other developers' blog posts. The application follows the Model-View-Controller paradigm in its architectural structure. Authentication is required to log in so that the user can post an article and comment on other posts as well. Through the use of cookies, a user session is created at login. Environmental variables store sensitive data for security. RESTful APIs using CRUD operations help manage data from the application.",
      tags: [Tag.BOOTSTRAP, Tag.JAVASCRIPT, Tag.NODEJS, Tag.SQL, Tag.CSS, Tag.RESTFULAPIS, Tag.HANDLEBARS,],
    },
    {
      id: 3,
      name: "Weather Dashboard",
      pictures: ["../../assets/weather-1.jpg", "../../assets/weather-2.jpg", "../../assets/weather-3.jpg", "../../assets/weather-4.jpg", "../../assets/weather-5.jpg", ],
      githubLink: "https://github.com/tabbdacat/weather-dashboard",
      projectLink: "https://tabbdacat.github.io/weather-dashboard/",
      summary: "Retrieves weather from OpenWeather API to show a 5-day forecast for any city you choose.",
      description: "This fun and simple application allows the user to enter any city they wish to check the weather for, which draws data from the OpenWeather server-side API and displays it to the page. Utilizes local storage to save previous cities entered.  ",
      tags: [Tag.BULMA, Tag.RESTFULAPIS, Tag.JQUERY, Tag.HTML, Tag.CSS],
    },
    {
      id: 4,
      name: "Skill Magnet - Group Collaboration",
      pictures: ["../../assets/skill-magnet-1.jpg","../../assets/skill-magnet-2.jpg","../../assets/skill-magnet-3.jpg", "../../assets/skill-magnet-4.jpg", "../../assets/skill-magnet-5.jpg", ],
      githubLink: "https://github.com/quin-tech/full-stack-service-app",
      projectLink: "https://full-stack-service-app.onrender.com/",
      summary: "An e-commerce app to buy and sell your skills. Redirects to Stripe for payment processing.",
      description: "From chores around the house to transporting large items to teaching piano lessons, this free application allows users to make money off their skills. Users can keep track of existing posts and purchase history. Utilizes Stripe to process payment. JSON Web Tokens are used for authentication. ",
      tags: [Tag.MONGODB, Tag.MATERIALUI, Tag.REACT, Tag. CSS, Tag.NODEJS],
    },
    // {
    //   id: 5,
    //   name: "Social Network API",
    //   pictures: ["../../assets/culinaryConnectImg.jpg", "../../assets/movieMixImg.jpg", "../../assets/techBlogImg.jpg",],
    //   githubLink: "https://github.com/tabbdacat/social-network-api",
    //   projectLink: "https://drive.google.com/file/d/1xwfROda1DgFF3f8CBdpaUapTH7MgSlPs/view",
    //   summary: "Brief summary",
    //   description: "Full Description of Project",
    //   tags: [Tag.ANGULAR,],
    // },
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
