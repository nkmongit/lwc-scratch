import { LightningElement, track } from "lwc";

export default class ConditionalDemo extends LightningElement {
  @track onClickedButtonLabel = "Show";
  @track cardVisible = false;
  myTitle = "LWC Beep";
  handleClick(event) {
    const label = event.target.label;
    this.onClickedButtonLabel = label === "Show" ? "Hide" : "Show";
    this.cardVisible = label === "Show" ? false : true;
  }
}
