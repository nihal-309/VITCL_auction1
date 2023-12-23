import './App.css';
import Header from "./components/Head";
import Card  from "./components/Card";

window.addEventListener('beforeunload', function (event) {
  event.preventDefault();
  
})

function App() {
  return (
    <div className="App">
      <Header />
      <div className="grid-container">
        <Card key="1" name="NEPO" purse="500000"/>
        <Card key="2" name="LASKER" purse="500000"/> 
        <Card key="3" name="TAL" purse="500000"/>
        <Card key="5" name="VIDIT" purse="500000"/>
        <Card key="5" name="MAGNUS" purse="500000"/>
        <Card key="6" name="CAPABLANCA" purse="500000"/>
        <Card key="7" name="HIKARU" purse="500000"/>
        <Card key="8" name="KASPAROV" purse="500000"/>
        <Card key="9" name="FISCHER" purse="500000"/>
        <Card key="10" name="KARPOV" purse="500000"/>
      </div>
      <footer>By Nihal J</footer>
    </div>
  );
}

export default App;
