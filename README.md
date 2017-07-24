# react-tac-toe
[Github page for README](http://bumbleb2na.github.io/react-tac-toe)  
[Demo on Heroku](https://react-tactoe.herokuapp.com/)

## Following Tutorial
Am following the official React intro tutorial to create a tic-tac-toe web game: [Tutorial: Intro To React](https://facebook.github.io/react/tutorial/tutorial.html) 

## create-react-app
The starter kit for creating front-end react apps: [Installation: Creating a new application](https://facebook.github.io/react/docs/installation.html#creating-a-new-application)    
"Create React App doesn't handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. It uses build tools like Babel and webpack under the hood, but works with zero configuration."  
  
## Learnings
controlled components:  
"When you want to aggregate data from multiple children or to have two child components communicate with each other, move the state upwards so that it lives in the parent component. The parent can then pass the state back down to the children via props, so that the child components are always in sync with each other and with the parent."  
  
on/handle convention:  
"It is a common convention in React apps to use on* names for the handler prop names and handle* for their implementations."  
  
immutability is important:  
"We call .slice() to copy the squares array instead of mutating the existing array. Jump ahead a section to learn why immutability is important."  
"The biggest benefit of immutability in React comes when you build simple pure components."  
  
functional components:  
"Many components in your apps will be able to be written as functional components: these components tend to be easier to write and React will optimize them more in the future."  
  
use key prop for iterator children:  
"Each child in an array or iterator should have a unique "key" prop."  
"It's strongly recommended that you assign proper keys whenever you build dynamic lists."  
"Component keys don't need to be globally unique, only unique relative to the immediate siblings."  
  

## Version log
NOTE: Log items explain how learnings were applied:  

v1.0: Major version ready for Deployment. Ideas for improvements finished. Used key prop for iterator children in custom code.

v0.2: Game controls Board and Square states. Squares and Board are simple, pure components. Squares are still functional components. Board and Squares are controlled components. Game controls Board and states of Squares, storing said states in a history using immutability to optimize performance when undoing moves.  
  
v0.1: Board controls Square states. Squares are simple, pure components. Squares are functional components. Squares are controlled components. Board controls states of Squares using immutability to optimize performance. Separation of concerns.  
  
## More learnings
More learnings from documentation:  
  
JSX Prevents Injection Attacks:  
"It is safe to embed [potentially malicious] user input in JSX."  
"By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that's not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks."  
  
Never modify props/input passed in to functional component or component class:  
"React is pretty flexible but it has a single strict rule: All React components must act like pure functions with respect to their props."  
"Whether you declare a component as a function or a class, it must never modify its own props."  
  
Use component state to modify inputs over time, without violating the rule of never modifying props:  
"State allows React components to change their output over time in response to user actions, network responses, and anything else, without violating this rule."  
  
constructor(props) { super(props); this.state = {...}; }:  
"Class components should always call the base constructor with props."  
  
free up resources by adding lifecycle methods to a class:  
"In applications with many components, it's very important to free up resources taken by the components when they are destroyed."  
  
don't set state using current state value + prop value - solution: pass function to setState method with preious state and props to calculate value that combines state + prop value:  
"React may batch multiple setState() calls into a single update for performance. Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state."  
"To fix it, use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:"  
  
setState merges input object with state object and it is a shallow merge:  
"The merging is shallow, so this.setState({comments}) leaves this.state.posts intact, but completely replaces this.state.comments."  
  
data flows down to child components - ie: top-down/unidirectional:  
"Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn't care whether it is defined as a function or a class. This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it."  
"In React apps, whether a component is stateful or stateless is considered an implementation detail of the component that may change over time. You can use stateless components inside stateful components, and vice versa."  
  
keep component states in sync by lifting state up to nearest parent/ancestor:  
"In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called "lifting state up". We will remove the local state from the TemperatureInput and move it into the Calculator instead."  
"When you move state up, use this.state.[value] in the parent and children use this.props.[value]. Props are read-only. So, where the chilren used setState to change state before, that now has to move up. The child becomes a "controlled component", controlled by the parent."  

