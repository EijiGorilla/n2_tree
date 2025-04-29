import { use, useEffect, useRef, useState } from "react";
import {
  treeCompensationLayer,
  treeConservationLayer,
  treeCuttingLayer,
} from "../layers";
import FeatureFilter from "@arcgis/core/layers/support/FeatureFilter";
import Query from "@arcgis/core/rest/support/Query";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Responsive from "@amcharts/amcharts5/themes/Responsive";
import {
  generateTreeConservationData,
  generateTreesNumber,
  statusTreeConservationChartQuery,
  thousands_separators,
  zoomToLayer,
} from "../Query";
import "../App.css";
import * as clusterLabelCreator from "@arcgis/core/smartMapping/labels/clusters";
import * as clusterPopupCreator from "@arcgis/core/smartMapping/popup/clusters";
import { CalciteButton } from "@esri/calcite-components-react";
import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-map";
import { MyContext } from "../App";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";

// Dispose function
function maybeDisposeRoot(divId) {
  am5.array.each(am5.registry.rootElements, function (root) {
    if (root.dom.id === divId) {
      root.dispose();
    }
  });
}

///*** Others */
/// Draw chart
const TreeConservationChart = () => {
  const arcgisMap = document.querySelector("arcgis-map");
  const { contractp } = use(MyContext);
  const pieSeriesRef = useRef(undefined);
  const legendRef = useRef(undefined);
  const chartRef = useRef(undefined);
  const [treesData, setTreesData] = useState([
    {
      category: String,
      value: Number,
      sliceSettings: {
        fill: am5.color("#00c5ff"),
      },
    },
  ]);

  const chartID = "pie-cut";
  const [treesNumber, setTreesNumber] = useState([]);

  // Turn of other layers
  treeCuttingLayer.visible = false;
  treeCompensationLayer.visible = false;
  treeConservationLayer.visible = true;

  const queryExpression = "CP = '" + contractp + "'";
  !contractp
    ? (treeConservationLayer.definitionExpression = "1=1")
    : (treeConservationLayer.definitionExpression = queryExpression);

  useEffect(() => {
    generateTreeConservationData(contractp).then((result) => {
      setTreesData(result);
    });

    generateTreesNumber(contractp).then((response) => {
      setTreesNumber(response);
    });

    zoomToLayer(treeConservationLayer, arcgisMap?.view);
  }, [contractp]);

  useEffect(() => {
    maybeDisposeRoot(chartID);

    var root = am5.Root.new(chartID);
    root.container.children.clear();
    root._logo?.dispose();

    // Set themesf
    root.setThemes([
      am5themes_Animated.new(root),
      am5themes_Responsive.new(root),
    ]);

    // Create chart
    var chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        centerY: am5.percent(25), //-10
        y: am5.percent(-2), // space between pie chart and total lots
        layout: root.verticalLayout,
      })
    );
    chartRef.current = chart;

    // Create series
    var pieSeries = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: "Series",
        categoryField: "category",
        valueField: "value",
        //legendLabelText: "[{fill}]{category}[/]",
        legendValueText: "{valuePercentTotal.formatNumber('#.')}% ({value})",
        radius: am5.percent(45), // outer radius
        innerRadius: am5.percent(20),
        scale: 1.2,
      })
    );
    pieSeriesRef.current = pieSeries;
    chart.series.push(pieSeries);

    // Set slice opacity and stroke color
    pieSeries.slices.template.setAll({
      toggleKey: "none",
      fillOpacity: 0.9,
      stroke: am5.color("#ffffff"),
      strokeWidth: 1,
      strokeOpacity: 1,
      templateField: "sliceSettings",
    });

    // Disabling labels and ticksll
    pieSeries.labels.template.set("visible", false);
    pieSeries.ticks.template.set("visible", false);

    // EventDispatcher is disposed at SpriteEventDispatcher...
    // It looks like this error results from clicking events
    pieSeries.slices.template.events.on("click", (ev) => {
      const selected = ev.target.dataItem?.dataContext;
      const categorySelected = selected.category;
      const find = statusTreeConservationChartQuery.find(
        (emp) => emp.category === categorySelected
      );

      const statusSelect = find?.value;
      var highlightSelect;

      var query = treeConservationLayer.createQuery();

      arcgisMap?.whenLayerView(treeConservationLayer).then((layerView) => {
        //chartLayerView = layerView;

        treeConservationLayer.queryFeatures(query).then((results) => {
          const RESULT_LENGTH = results.features;
          const ROW_N = RESULT_LENGTH.length;

          let objID = [];
          for (var i = 0; i < ROW_N; i++) {
            var obj = results.features[i].attributes.OBJECTID;
            objID.push(obj);
          }

          var queryExt = new Query({
            objectIds: objID,
          });

          treeConservationLayer.queryExtent(queryExt).then((result) => {
            if (result.extent) {
              arcgisMap?.goTo(result.extent);
            }
          });

          if (highlightSelect) {
            highlightSelect.remove();
          }
          highlightSelect = layerView.highlight(objID);

          arcgisMap?.view.on("click", function () {
            layerView.filter = new FeatureFilter({
              where: undefined,
            });
            highlightSelect.remove();
          });
        }); // End of queryFeatures

        layerView.filter = new FeatureFilter({
          where: "Conservation = " + statusSelect,
        });

        // For initial state, we need to add this
        arcgisMap?.view.on("click", () => {
          layerView.filter = new FeatureFilter({
            where: undefined,
          });
          highlightSelect !== undefined
            ? highlightSelect.remove()
            : console.log("");
        });
      }); // End of view.whenLayerView
    });

    pieSeries.data.setAll(treesData);

    // Legend
    // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
    var legend = root.container.children.push(
      am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        y: am5.percent(42),
        scale: 1.0,
      })
    );
    legendRef.current = legend;
    legend.data.setAll(pieSeries.dataItems);

    // Change the size of legend markers
    legend.markers.template.setAll({
      width: 18,
      height: 18,
    });

    // Change the marker shape
    legend.markerRectangles.template.setAll({
      cornerRadiusTL: 10,
      cornerRadiusTR: 10,
      cornerRadiusBL: 10,
      cornerRadiusBR: 10,
    });

    // Responsive legend
    // https://www.amcharts.com/docs/v5/tutorials/pie-chart-with-a-legend-with-dynamically-sized-labels/
    // This aligns Legend to Left
    chart.onPrivate("width", function (width) {
      const boxWidth = 250; //props.style.width;
      var availableSpace = Math.max(
        width - chart.height() - boxWidth,
        boxWidth
      );
      //var availableSpace = (boxWidth - valueLabelsWidth) * 0.7
      legend.labels.template.setAll({
        width: availableSpace,
        maxWidth: availableSpace,
      });
    });

    // To align legend items: valueLabels right, labels to left
    // 1. fix width of valueLabels
    // 2. dynamically change width of labels by screen size

    // Change legend labelling properties
    // To have responsive font size, do not set font size
    legend.labels.template.setAll({
      oversizedBehavior: "truncate",
      fill: am5.color("#ffffff"),
      //textDecoration: "underline"
      //width: am5.percent(200)
      //fontWeight: "300"
    });

    legend.valueLabels.template.setAll({
      textAlign: "right",
      //width: valueLabelsWidth,
      fill: am5.color("#ffffff"),
      //fontSize: LEGEND_FONT_SIZE,
    });

    legend.itemContainers.template.setAll({
      // set space between legend items
      paddingTop: 2,
      paddingBottom: 2,
    });

    pieSeries.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [chartID, treesData]);

  useEffect(() => {
    pieSeriesRef.current?.data.setAll(treesData);
    legendRef.current?.data.setAll(pieSeriesRef.current.dataItems);
  });

  useEffect(() => {
    // Clustering
    treeConservationLayer
      .when()
      .then(generateClusterConfig)
      .then((featureReduction) => {
        treeConservationLayer.featureReduction = featureReduction;

        const toggleButton = document.getElementById("toggle-cluster");
        toggleButton.addEventListener("click", toggleClustering);

        // To turn off clustering on a layer, set the
        // featureReduction property to null
        function toggleClustering() {
          if (isWithinScaleThreshold()) {
            let fr = treeConservationLayer.featureReduction;
            treeConservationLayer.featureReduction =
              fr && fr.type === "cluster" ? null : featureReduction;
          }
          toggleButton.innerText =
            toggleButton.innerText === "Enable Clustering"
              ? "Disable Clustering"
              : "Enable Clustering";
        }

        // arcgisMap?.view.watch("scale", (scale) => {
        //   if (toggleButton.innerText === "Disable Clustering") {
        //     treeConservationLayer.featureReduction = isWithinScaleThreshold()
        //       ? featureReduction
        //       : null;
        //   }
        // });
        reactiveUtils.watch(
          () => arcgisMap?.view.scale,
          (scale) => {
            if (toggleButton.innerText === "Disable Clustering") {
              treeConservationLayer.featureReduction = isWithinScaleThreshold()
                ? featureReduction
                : null;
            }
          }
        );
      })
      .catch((error) => {
        console.error(error);
      });

    function isWithinScaleThreshold() {
      return arcgisMap?.view.scale > 5000;
    }

    async function generateClusterConfig(layer) {
      const view = arcgisMap?.view;
      // generates default popupTemplate
      const popupTemplate = await clusterPopupCreator
        .getTemplates({ layer })
        .then(
          (popupTemplateResponse) => popupTemplateResponse.primaryTemplate.value
        );

      // generates default labelingInfo
      const { labelingInfo, clusterMinSize } = await clusterLabelCreator
        // eslint-disable-next-line no-undef

        .getLabelSchemes({ layer, view })
        .then((labelSchemes) => labelSchemes.primaryScheme);

      return {
        type: "cluster",
        popupTemplate,
        labelingInfo,
        clusterMinSize,
      };
    }
  });

  return (
    <>
      <div className="treesNumberImage">
        <div>
          <div className="totalTreesLabel">TOTAL TREES</div>
          <br />
          <br />
          <b className="totalTreesNumber">
            {thousands_separators(treesNumber[0])}{" "}
          </b>
        </div>
        <img
          src="https://EijiGorilla.github.io/Symbols/Tree_Logo.svg"
          alt="Land Logo"
          height={"20%"}
          width={"20%"}
          style={{ marginLeft: "auto", paddingRight: "20px" }}
        />
      </div>
      <div
        id={chartID}
        style={{
          height: "60vh",
          backgroundColor: "rgb(0,0,0,0)",
          color: "white",
          marginBottom: "-1.5vh",
        }}
      ></div>
      <CalciteButton id="toggle-cluster" className="esri-button">
        Disable Clustering
      </CalciteButton>
    </>
  );
}; // End of lotChartgs

export default TreeConservationChart;
