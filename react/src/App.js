import "./styles.css";
import Card from "./Components/Card";

export default function App() {
  const name = "Camila"; 

  return (
    <div className="App">
  
      <Card Name={name} Work="Doctor"/>
      <Card Name="Keira" Work="secretary" pics />
      <Card Name="Korina" Work="leader" />
      <Card Name="Axel" Work="student" />
    </div>
  );
}
