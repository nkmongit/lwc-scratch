# Salesforce LWC

## Decorators in LWC

- It is a part of ECMA script used to add extra functionality in your functions and methods.
- The LWC programming model has three decorators that add functionality to a property or function.

### Types of Decorators

- @api
- @track
- @wire

#### @api

1. To expose a public property, decorate a field with @api. Public properties define the API for a component.

   - Public properties used in a template are reactive. If the value of a public property used in a template changes, the component re-renders.
   - An owner component that uses a component in its markup can access the component's public properties via DOM properties.

2. To expose a public method, decorate it with @api. Public methods are part of a component's API.

   - To comminicate down the containment hierarchy, owner and parent components can call JavaScript methods on child components.

#### @track

- If a field's value changes, and the field is used in a template or in a getter of aproperty that's used in a template, the component re-renders and displays the new value.
- When a field is decorated with @track, LWC tracks changes to the internal values of:
  - Plain objects created with {}
  - Arrays created with []

#### @wire

- To read Salesforce data, LWC use a reactive wire service. When the wire service provisions data, the component re-renders.
- Components use @wire in their JavaScript class to specify a wire adapter or an Apex method.

## Imperative Method in LWC

- To control when the method invocation occurs (for example, in response to clicking button), call the method imperatively.

```js
// apexImperativeMethod.js

import { LightningElement, track } from "lwc";
import getContactList from "@salesforce/apex/ContactController.getContactList";

export default class ApexImperativeMethod extends LightningElement {
  @track contacts;
  @track error;

  handleLoad() {
    getContactList()
      .then((res) => {
        this.contacts = res;
      })
      .catch((err) => {
        this.error = err;
      });
  }
}
```
