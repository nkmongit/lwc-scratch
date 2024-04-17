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
