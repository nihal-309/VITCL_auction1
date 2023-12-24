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
        <Card key="1" name="NEPO" purse="136000"/>
        <Card key="2" name="LASKER" purse="133000"/> 
        <Card key="3" name="TAL" purse="156000"/>
        <Card key="5" name="VIDIT" purse="108000"/>
        <Card key="5" name="MAGNUS" purse="140000"/>
        <Card key="6" name="CAPABLANCA" purse="137000"/>
        <Card key="7" name="HIKARU" purse="194000"/>
        <Card key="8" name="KASPAROV" purse="178000"/>
        <Card key="9" name="FISCHER" purse="134000"/>
        <Card key="10" name="KARPOV" purse="116000"/>
        <Card key="11" name="HUMPY" purse="87000"/>
        <Card key="12" name="VISHY" purse="167000"/>
      </div>
      <footer>By Nihal J</footer>
    </div>
  );
}

export default App;
