import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Tabbatha Souza - Resume');
  }

  DownloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/T_Souza_resume.pdf');
    link.setAttribute('download', 'T_Souza_resume.pdf');
    link.click();
    link.remove();
  }
}
