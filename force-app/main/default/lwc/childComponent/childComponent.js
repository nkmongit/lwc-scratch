import { LightningElement, api } from "lwc";

export default class ChildComponent extends LightningElement {
  @api itemName = "Basic LWC";

  @api handleChangeValue() {
    this.itemName = "Salesforce LWC Dev";
  }
}
