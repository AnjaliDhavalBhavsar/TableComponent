import "./App.css";
import TableComponent from "./stories/tableComponent";

function App() {
  const data = [
    {
      Operator: "*Celcom Axiata (LTE)",
      "Headset Display": "CELCOM / My Celcom / 502 19",
      "3G Availability": "Yes",
    },
    {
      Operator: "*DiGi Telecom (LTE)",
      "Headset Display": "CELCOM / My Celcom / 502 19",
      "3G Availability": "Yes",
    },
    {
      Operator: "*Maxis (LTE)",
      "Headset Display": "CELCOM / My Celcom / 502 19",
      "3G Availability": "Yes",
    },
    {
      Operator: "UMobile (LTE)",
      "Headset Display": "CELCOM / My Celcom / 502 19",
      "3G Availability": "Yes",
    },
  ];
  return (
    <div className="App">
      <TableComponent data={data}></TableComponent>
    </div>
  );
}

export default App;
