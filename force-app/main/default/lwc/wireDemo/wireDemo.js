import { LightningElement, wire, track } from "lwc";
import getAccountList from "@salesforce/apex/WireDemoClass.getAccountList";

const columns = [
  {
    label: "Name",
    fieldName: "Name"
  },
  {
    label: "Account Id",
    fieldName: "Id"
  }
];

export default class WireDemo extends LightningElement {
  @track columns = columns;
  @track data = [];

  @wire(getAccountList)
  wiredAccounts({ data, error }) {
    if (data) {
      console.log(data);
      this.data = data;
    } else if (error) {
      console.log(error);
    }
  }
}
