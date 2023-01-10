import TableComponent from "./tableComponent";
import { mount, configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

configure({ adapter: new Adapter() });

const data1 = [
  {
    Operator: "*Celcom Axiata (LTE)",
    "Headset Display": "CELCOM / My Celcom / 502 19",
    "3G Availability": "Yes",
  },
  {
    Operator: "*DiGi Telecom (LTE)",
    "Headset Display": "DiGi 1800 / DiGi /  MYMY18",
    "3G Availability": "Yes",
  },
  {
    Operator: "UMobile (LTE)",
    "Headset Display": "U Mobile / MYS 18 / MY 18",
    "3G Availability": "Yes",
  },
  {
    Operator: "*Maxis (LTE)",
    "Headset Display": "Maxis / MYS 18 / MY 18",
    "3G Availability": "Yes",
  },
  {
    Operator: "TMobile (LTE)",
    "Headset Display": "T Mobile / MYS 18 / MY 18",
    "3G Availability": "Yes",
  },
];

// let wrapper;
// beforeEach(() => {
//   wrapper = mount(<TableComponent />);
// });

describe("test MyComponent", () => {
  const wrapper = mount(<TableComponent data={data1} />);
  const table = wrapper.find("table");
  const row = table.find("tr");
  it("table grid", () => {
    expect(table).toHaveLength(1);
    expect(row).toHaveLength(6);
  });

  it("test table updated with checkbox", () => {
    const wrapper = mount(
      <TableComponent isMultiSelectAvailable={true} data={data1} />
    );
    let checkboxItems = wrapper.find('input[type="checkbox"]');
    expect(checkboxItems).toHaveLength(6);
  });

  it("Test to checked header checkbox checked", () => {
    const wrapper = mount(
      <TableComponent isMultiSelectAvailable={true} data={data1} />
    );

    let selectAllCheckboxInHeader = wrapper
      .find("table")
      .find("th")
      .find('input[type="checkbox"]');

    selectAllCheckboxInHeader.simulate("change", {
      target: { checked: true },
    });

    wrapper.update();
    let selectAllCheckbox = wrapper
      .find("table")
      .find("td")
      .find('input[type="checkbox"]');

    selectAllCheckbox.map((node) => expect(node.props().checked).toBe(true));
  });

  it("for check all radio button", () => {
    const wrapper = mount(<TableComponent isRadioField={true} data={data1} />);

    let radioList = wrapper.find('input[type="radio"]');
    console.log(radioList);
    expect(radioList).toHaveLength(7);
  });

  it("for radio button click", () => {
    const wrapper = mount(<TableComponent isRadioField={true} data={data1} />);

    let radioBtn = wrapper.find('input[type="radio"]').at(3);
    radioBtn.simulate("click", {
      target: { checked: true },
    });
    expect(radioBtn.props().checked).toBe(false);
  });

  it("for no data", () => {
    const wrapper = mount(<TableComponent />);

    expect(wrapper.find("div.noData").length).toBe(1);
  });
});
