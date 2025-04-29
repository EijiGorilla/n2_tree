import { useEffect, useState, use } from "react";
import Select from "react-select";
import "../index.css";
import "../App.css";
import { MyContext } from "../App";
import { treeCuttingLayer } from "../layers";
import { DropDownData } from "../customClass";

export default function DropdownData() {
  const { updateContractp } = use(MyContext);

  // For dropdown filter
  const [initContractPackage, setInitContractPackage] = useState();
  const [contractPackage, setContractPackage] = useState<null | any>(null);

  //**** Create dropdonw list */
  useEffect(() => {
    const dropdownData = new DropDownData({
      featureLayers: [treeCuttingLayer],
      fieldNames: ["CP"],
    });

    dropdownData.dropDownQuery().then((response: any) => {
      setInitContractPackage(response);
    });
  }, []);

  // handle change event of the Municipality dropdown
  const handleContractPackageChange = (obj: any) => {
    setContractPackage(obj);
    updateContractp(obj.field1);
  };

  return (
    <>
      <DropdownListDisplay
        handleContractPackageChange={handleContractPackageChange}
        contractPackage={contractPackage}
        initContractPackage={initContractPackage}
      ></DropdownListDisplay>
    </>
  );
}

export function DropdownListDisplay({
  handleContractPackageChange,
  contractPackage,
  initContractPackage,
}: any) {
  // Style CSS
  const customstyles = {
    option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
      // const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isFocused
          ? "#999999"
          : isSelected
          ? "#2b2b2b"
          : "#2b2b2b",
        color: "#ffffff",
      };
    },

    control: (defaultStyles: any) => ({
      ...defaultStyles,
      backgroundColor: "#2b2b2b",
      borderColor: "#949494",
      color: "#ffffff",
      touchUi: false,
    }),
    singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: "#fff" }),
  };

  return (
    <div className="dropdownFilterLayout">
      <div
        style={{
          color: "white",
          fontSize: "0.85rem",
          marginLeft: "auto",
          paddingRight: "0.5rem",
        }}
      >
        Contract Package
      </div>
      <Select
        placeholder="Select CP"
        value={contractPackage}
        options={initContractPackage}
        onChange={handleContractPackageChange}
        getOptionLabel={(x: any) => x.field1}
        styles={customstyles}
      />
    </div>
  );
}
