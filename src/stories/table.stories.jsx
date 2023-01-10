import React from 'react';

import TableComponent  from './tableComponent';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/TableComponent',
  component: TableComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

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

 
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TableComponent {...args} />;

export const Tables = Template.bind({});

Tables.args = {
data:data1
};

export const TableWithSorting = Template.bind({});
 
TableWithSorting.args = {
data:data1,
sortBy:["Operator", "Headset Display"]
};
 
export const TableWithRadioButton= Template.bind({});
 
TableWithRadioButton.args = {
data:data1,
isRadioField:true
};
export const TableWithCheckbox= Template.bind({});
 
TableWithCheckbox.args = {
data:data1,
isMultiSelectAvailable:true
};

export const TableWithNoData= Template.bind({});
 
TableWithNoData.args = {
 data:null
};
 
 