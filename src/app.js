import { LightningElement } from "lwc";

export default class App extends LightningElement {

  connectedCallback(){
    this.setPBarProgress();
    
  }

  setPBarProgress(){
    let actualValue1 = 50;
    let actualValue2 = 20;
    let actualValue3 = 70;
    const docStyle = document.documentElement.style;
    docStyle.setProperty('--end-width-1', `${actualValue1}%`);
    docStyle.setProperty('--end-width-2', `${actualValue2}%`);
    docStyle.setProperty('--end-width-3', `${actualValue3}%`);
    /*
    document.documentElement.style.setProperty('--end-width', `${actualValue}%`);
    console.log(getComputedStyle(document.documentElement)
      .getPropertyValue('--end-width'));
    */
  }

}
