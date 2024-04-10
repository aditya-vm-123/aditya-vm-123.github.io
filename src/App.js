import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Overview from './components/Overview';
// import Tables from './components/Tables';


function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below"/>
      </div>
    </>
    
  );
}

export default App;
