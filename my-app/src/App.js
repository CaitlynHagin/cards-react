import './App.css';
import Postcard from './components/postcard';
import Link from './components/link';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Postcard name="Barack Obama" jobTitle="President" />
        <Postcard name="Michael Jordan" jobTitle="Basketball player" />
     
        <p>
          I am editing the app.js file
        </p>
        <Link url="https://google.com" linkText="Google" />
        <Link url="https://bbc.com" linkText="BBC"/>
        <Link url="https://britishairways.com" linkText="BA"/>
        
      </header>
    </div>
  );
}
export default App;
