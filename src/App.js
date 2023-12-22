import './App.css';
import Header from "./components/Head";
import Card  from "./components/Card";

// This function will be called when the user tries to refresh
function disableRefresh() {
  // Display an alert to inform the user that refreshing is disabled
  alert("Refresh is disabled for this page.");
  // Prevent the default browser refresh behavior
  return false;
}

// Attach the function to various events related to page refresh
window.onbeforeunload = disableRefresh;
window.onunload = disableRefresh;

function App() {
  return (
    window.onbeforeunload = disableRefresh,
    window.onunload = disableRefresh,
    <div className="App">
      <Header />
      <div className="grid-container">
        <Card key="1" name="NEPO" purse="400000"/>
        <Card key="2" name="LASKER" purse="400000"/> 
        <Card key="3" name="TAL" purse="400000"/>
        <Card key="4" name="VIDIT" purse="400000"/>
        <Card key="5" name="MAGNUS" purse="400000"/>
        <Card key="6" name="CAPABLANCA" purse="400000"/>
        <Card key="7" name="HIKARU" purse="400000"/>
        <Card key="8" name="KASPAROV" purse="400000"/>
        <Card key="9" name="FISCHER" purse="400000"/>
        <Card key="10" name="KARPOV" purse="400000"/>
      </div>
      <footer>By Nihal J</footer>
    </div>
  );
}

export default App;
