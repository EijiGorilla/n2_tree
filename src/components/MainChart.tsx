import "@esri/calcite-components/dist/components/calcite-tabs";
import "@esri/calcite-components/dist/components/calcite-tab";
import "@esri/calcite-components/dist/components/calcite-tab-nav";
import "@esri/calcite-components/dist/components/calcite-tab-title";
import "@esri/calcite-components/dist/calcite/calcite.css";
import {
  CalciteTab,
  CalciteTabs,
  CalciteTabNav,
  CalciteTabTitle,
} from "@esri/calcite-components-react";
import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-map";
import { useEffect, useState } from "react";
import { treeCuttingLayer } from "../layers";

import "../index.css";
import "../App.css";
import TreeCuttingChart from "./TreeCuttingChart";
import TreeCompensationChart from "./TreeCompensationChart";
import TreeConservationChart from "./TreeConservationChart";

function MainChart() {
  const [chartTabName, setChartTabName] = useState("TreeCutting");

  // Somehow if you do not add arcgisScene here, the child components (ie., LotChart)
  // will not inherit arcgisScene
  // const arcgisScene = document.querySelector("arcgis-scene") as ArcgisScene;

  return (
    <>
      <CalciteTabs
        style={{ width: "37%" }}
        slot="panel-end"
        layout="center"
        // scale="m"
      >
        <CalciteTabNav
          slot="title-group"
          id="thetabs"
          onCalciteTabChange={(event: any) =>
            setChartTabName(event.srcElement.selectedTitle.className)
          }
        >
          <CalciteTabTitle className="TreeCutting">TreeCutting</CalciteTabTitle>
          <CalciteTabTitle className="Compensation">
            Compensation
          </CalciteTabTitle>
          <CalciteTabTitle className="Conservation">
            Conservation
          </CalciteTabTitle>
        </CalciteTabNav>

        {/* CalciteTab: Lot */}
        <CalciteTab>
          {chartTabName === "TreeCutting" && <TreeCuttingChart />}
        </CalciteTab>

        {/* CalciteTab: Structure */}
        <CalciteTab>
          {chartTabName === "Compensation" && <TreeCompensationChart />}
        </CalciteTab>

        {/* CalciteTab: Non-Land Owner */}
        <CalciteTab>
          {chartTabName === "Conservation" && <TreeConservationChart />}
        </CalciteTab>
      </CalciteTabs>
    </>
  );
}

export default MainChart;
