import { LightningElement, track } from "lwc";

export default class TrackDemo extends LightningElement {
  @track fullName = {
    firstName: "",
    lastName: ""
  };
  handleChange(event) {
    const name = event.target.name;
    this.fullName[name] = event.target.value;
  }
}
