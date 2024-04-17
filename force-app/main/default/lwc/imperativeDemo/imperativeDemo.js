import { LightningElement, track } from "lwc";
import getAccountList from "@salesforce/apex/WireDemoClass.getAccountList";

const columns = [
  {
    label: "Account Name",
    fieldName: "Name"
  },
  {
    label: "Account Id",
    fieldName: "Id"
  }
];

export default class ImperativeDemo extends LightningElement {
  @track columns = columns;
  @track data;

  connectedCallback() {
    getAccountList()
      .then((result) => {
        this.data = result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
