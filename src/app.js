import { LightningElement } from "lwc";

const RED_BELOW_PERCENTAGE = 30;
const ANIMATION_TIME = 5000;

// colors
const RED_COLOR = '#FF6347';
const YELLOW_COLOR = '#f3c623';
const GREEN_COLOR = '#228B22';

// property to set in js for filling bars
const END_PERCENTAGE_1 = '--end-width-1';
const END_PERCENTAGE_2 = '--end-width-2';
const END_PERCENTAGE_3 = '--end-width-3';

// bar colors to set in js
const COLOR_BAR_1 = '--bar-color-1';
const COLOR_BAR_2 = '--bar-color-2';
const COLOR_BAR_3 = '--bar-color-3';

// counter classes
const COUNTER_1 = '.percentage-counter-1';
const COUNTER_2 = '.percentage-counter-2';
const COUNTER_3 = '.percentage-counter-3';

export default class App extends LightningElement {

  connectedCallback(){ /* render all in renderdCallback */
  }

  renderedCallback(){
    this.setPBarProgress();
    //this.setCountersInterval();
    const counterDiv = this.template.querySelector(".percentage-counter-1");
    let counter = 0;
    let iter = setInterval(() => {
      counterDiv.innerHTML = `${counter}%`;
      //counter++;
      counter += 0.5;

      if(counter >= 61){
        clearInterval(iter);
      }
    }, 5000/60);
  }

  setCounter(counterClass, ){}

  setPBarProgress(){

    // example values
    let actualValue1 = 60;
    let actualValue2 = 20;
    let actualValue3 = 100;

    this.setProperties(END_PERCENTAGE_1, `${actualValue1}%`);
    this.setProperties(END_PERCENTAGE_2, `${actualValue2}%`);
    this.setProperties(END_PERCENTAGE_3, `${actualValue3}%`);

    this.setColorProperty(COLOR_BAR_1, actualValue1);
    this.setColorProperty(COLOR_BAR_2, actualValue2);
    this.setColorProperty(COLOR_BAR_3, actualValue3);

    /* just for reading
    document.documentElement.style.setProperty('--end-width', `${actualValue}%`);
    console.log(getComputedStyle(document.documentElement)
      .getPropertyValue('--end-width'));
    */
  }

  setProperties(cssVar, cssValue){
    	const docStyle = document.documentElement.style;
      docStyle.setProperty(cssVar, cssValue);
  }

  setColorProperty(cssVar, actualValue){
    let colorValue = actualValue >= 100 ? 
      GREEN_COLOR :
      actualValue <= RED_BELOW_PERCENTAGE ?
        RED_COLOR : YELLOW_COLOR;

    this.setProperties(cssVar, colorValue);
  }
}
