import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  
  <div>
  <h1>1) what is React</h1>
  <p>*  A JavaScript library for building user interfaces</p>
  <hr />

  <h1>2) Spa vs Mpa</h1>
  <p><h2>* Single-Page Application:</h2>
A single-page application is a solution that performs inside a browser and does not require page
reloading during its use. Unsurprisingly, you are using this type of apps daily.
Single-page applications try to imitate a natural environment in the browser. 
They do not require page reloads and extra wait time. 
A SPA is just one web page that loads all other content using JavaScript.
SPA requests data independently and renders pages straight in the browser. 
Single-page sites assist to keep users in one comfortable webspace.
<br />
<h2>* Multi-Page Application:</h2>
A multiple-page app works in a traditional way where every change displays the data 
or submits data back to server requests rendering a new page from the server in the browser. 
Such solutions are bigger than single-page applications.
 These apps have many levels of UI because of the amount of content.
 Amazon or eBay are great examples, as well as other complex sites with multiple pages.
    
 
</p>


  <hr />


  <h1>3) Angular vs React</h1>
  <p><h2>*  React</h2>
  React is a JavaScript library for UI development.
It is managed by Facebook and an open-source community of developers.
The framework was introduced in May 2013.
The latest updates were released on August 8th, 2019 – just over a month ago.
<br />
<h2> * Angular</h2>
Angular is an open-sourced JavaScript framework for web and mobile development. 
It is TypeScript-based and managed by Google’s Angular Team and the Angular developer community.
Launched in September 2016, Angular (also known as Angular 2.0) is a complete rewrite of AngularJS (Angular 1.0), which was introduced in 2010.
There have been six versions of Angular already, and the latest release took place on August 28th, 2019 – almost three weeks ago.
 
</p>
  <hr />


  <h1>4) library vs Framework</h1>
  <p><h2>*Library :</h2>
  A library performs specific, well-defined operations.
  Examples of libraries: Network protocols, compression, image manipulation, string utilities,
  regular expression evaluation, math. Operations are self-contained.
<br />
<h2>*FrameWork :</h2>
A framework is a skeleton where the application defines the "meat" of the operation by filling out the skeleton.
    The skeleton still has code to link up the parts but the most important work is done by the application.
     <br />
    <h3>Examples of frameworks:</h3> Web application system, Plug-in manager, GUI system.
    The framework defines the concept but the application defines the fundamental functionality that end-users care about.
 
</p>
  <hr />


  <h1>5) Dom vs Virtual dom</h1>
  <p><h2>*DOM :</h2>
  DOM is the acronym for Document Object Model.
  Dom is also called HTML DOM as it is an abstraction of structured code called HTML for web developers.
  Dom and HTML code are interrelated as the elements of HTML are known as nodes of DOM.
  It defines a structure where users can create, alter, modify documents and the content present in it. 
  So while HTML is text, DOM is an in-memory representation of this text.
<br />
<h2> *Virtual DOM :</h2>
Virtual DOM is an abstraction of abstraction as it has been derived from HTML DOM.
  It is a representation of DOM objects like a lightweight copy.
  The virtual DOM was not invented by React, it is only used and provided for free.
</p>
  <hr />




  <h1>6) Oneway Data Binding vs Two way</h1>
  <p><h2>*One-way data binding:</h2>
  One-way data-binding means the data flows in a single direction so that whenever the data changes in a component, 
  it also updates the view with new data.
<br />
<h2>*Two-way data binding:</h2>
Two-way data binding means data flows in both directions, 
it means any change happens in the view updates the data and any change happens in the data updates the view.
In angular, by using ngModel directive we can create two-way data binding.
</p>
  
</div>,







 


document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
