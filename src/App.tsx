import React, { createContext, useState } from "react";
import "./App.css";
import "./index.css";
import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-legend";
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/calcite/calcite.css";
import { CalciteShell } from "@esri/calcite-components-react";
import MapDisplay from "./components/MapDisplay";
import ActionPanel from "./components/ActionPanel";
import Header from "./components/Header";
import MainChart from "./components/MainChart";
import TreeCompensationChart from "./components/TreeCompensationChart";

type MyDropdownContextType = {
  contractp: any;
  updateContractp: any;
};

const initialState = {
  contractp: undefined,
  updateContractp: undefined,
};

export const MyContext = createContext<MyDropdownContextType>({
  ...initialState,
});

function App() {
  const [contractp, setContractp] = useState<any>();
  const updateContractp = (newContractp: any) => {
    setContractp(newContractp);
  };
  return (
    <div>
      <CalciteShell>
        <MyContext
          value={{
            contractp,
            updateContractp,
          }}
        >
          <ActionPanel />
          <MapDisplay />
          <MainChart />
          <Header />
        </MyContext>
      </CalciteShell>
    </div>
  );
}

export default App;
