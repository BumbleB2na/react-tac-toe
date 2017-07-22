# react-tac-toe
[Demo](http://bumbleb2na.github.io/react-tac-toe)

## Following Tutorial
Am following the official React intro tutorial to create a tic-tac-toe web game: [Tutorial: Intro To React](https://facebook.github.io/react/tutorial/tutorial.html)  
  
Hosting [demo on github](http://bumbleb2na.github.io/react-tac-toe)

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
  
v0.2: Game controls Board and Square states. Squares and Board are simple, pure components. Squares are still functional components. Board and Squares are controlled components. Game controls Board and states of Squares, storing said states in a history using immutability to optimize performance when undoing moves.  
  
v0.1: Board controls Square states. Squares are simple, pure components. Squares are functional components. Squares are controlled components. Board controls states of Squares using immutability to optimize performance. Separation of concerns.  
  
