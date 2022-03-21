import logo from './logo.svg';
import './App.css';
import Cosmetics from './components/Cosmetics/Cosmetics'; // in the end Cosmetics is mentioned withkout the .js part. In these case .js part is understood. 
// './' means this folder

// If './' is not mentioned , then the file is imported from node_modules folder


//todo 47_5-1 Module Introduction ES6 Modules simple import, export
// for better organisation ES6 codes are put into different folders instead of all the code in one single file. It is called ES6 modules. 
// to access files or codes or components from different folder into the working file Import and Export is used
// like in this import Cosmetics from './components/Cosmetics/Cosmetics'; line a js file is imported from the Cosmetics folder to the App.js file

// https://www.w3schools.com/react/react_es6_modules.asp


function App() {
  return (
    <div className="App">
      <Cosmetics/>
    </div>
  );
}

export default App;
