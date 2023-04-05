import React from 'react';
import Darkbg from './React_Dark_BG.png';
const HomePage =() => {
  return(
    <>
    <div>
      <h1><b><u><center>React ES6</center></u></b></h1>
      
      <h2>what is ReactJS?</h2>
        <p>ReactJS is JS library for buliding user interfaces.</p>
        <p>ReactJS is used to build single-page applications.</p>
        <p>ReactJS alloes us to create reusable UI components.</p>

      <h2>React Setup</h2>  
        <h3>Node.js</h3>
        <p>"you can dowload it form" <a href="https://nodejs.org/en/" target="_blank" rel="noopener">https://nodejs.org/en/</a></p>
      
      <h2>How to Creating React App?</h2>
        <p>Open your terminal in the directory you would like to create you application.</p>
        <p>Run this command to create a React application named my-react-app:</p>         <p>npx create-react-app project name</p>
        <p>OR, you can directly make your application without specifying a name, like this:</p>
        <p><b>Step-1: npx create-react-app</b></p>
        <p>In this case, all files will be kept in the current directory.</p>
        <p><b>Step-2: cd project-name</b></p>
        <p>Then just start up the application with this command.</p>
        <p><b>Step-3: npm start</b></p>

      <h2>React Geting Started</h2>
        <h3>Run and Check</h3>
          <p>Run the react application with this command:</p>
          <p>A new browser window will pop up, if it doesn't then go on <a href="https://localhost:3000/" terget="_blank" rel="noopener">https://localhost:3000</a></p>
          <img src={Darkbg}width={500}height={500}></img>
          <p>if it's the same page than you are good to go!</p>
      
      
    </div>
    </>
  )
}

export default HomePage;

