import { AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterContentInit {

  oldOption?: HTMLElement;
  newOption?: HTMLElement;

  public ngAfterContentInit(): void {
    var oldElement = document.getElementById("item-5");
    if(oldElement == undefined || oldElement == null)
      return;

    this.oldOption = oldElement;
    this.oldOption.classList.add("ativo");
    this.oldOption.firstElementChild?.classList.add("ativo");
  }

  public highlightSelectedOption(elementId: string): void{
    var newElement = document.getElementById(elementId);
    if(newElement == undefined || newElement == null)
      return;

    if(this.oldOption == null || this.oldOption == undefined)
    {
      this.oldOption = newElement;
      this.oldOption.classList.add('ativo');
      this.oldOption.firstElementChild?.classList.add("ativo");
    }
    else
    {
      this.newOption = newElement;
      this.changeSelectedClasses();
    }
  }

  public changeSelectedClasses(): void{
    if(this.oldOption == null || this.oldOption == undefined && 
      this.newOption == null || this.newOption == undefined)
      return;

    this.oldOption.classList.remove("ativo");
    this.oldOption.firstElementChild?.classList.remove("ativo");

    this.newOption.classList.add('ativo');
    this.newOption.firstElementChild?.classList.add("ativo");

    this.oldOption = this.newOption;
  }
}
