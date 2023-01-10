import { useState } from "react";

import TableColumn from "./tableColumn";
import TableCell from "./tableCell";
import RadioButton from "./radioButton";

import { resetSortData, useSorting } from "../utils";
import { getImage, Theme } from "../constants";

import "./table.css";

const TableComponent = ({
  data,
  sortBy,
  isRadioField,
  isMultiSelectAvailable,
  rest,
}) => {
  const sortData = (sortBy && resetSortData(sortBy)) || null;
  const [theme, setTheme] = useState(Theme.Light);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isSelectAll, setIsSelectAll] = useState(false);

  const { sortKey, tableData, sortItems } = useSorting(sortData, data);

  const headerData = tableData && Object.keys(tableData[0]);

  const handleChange = (e, id) => {
    const { checked } = e.target;
    setSelectedRows([...selectedRows, id]);
    if (!checked) {
      setSelectedRows(selectedRows.filter((item) => item !== id));
    }
  };

  const handleSelectAll = (e) => {
    setIsSelectAll(!isSelectAll);
    setSelectedRows(tableData.map((row, i) => i));
    if (isSelectAll) {
      setSelectedRows([]);
    }
  };

  const handleSort = (item) => {
    sortBy && sortBy.includes(item) && sortItems(item);
  };

  return (
    <div className="container">
      <div>
        <input
          type="radio"
          name="theme"
          value={Theme.Light}
          onChange={() => setTheme(Theme.Light)}
          checked={theme === Theme.Light}
        />
        <span> Light</span>
        <input
          value={Theme.Blue}
          type="radio"
          name="theme"
          onChange={() => setTheme(Theme.Blue)}
          checked={theme === Theme.Blue}
        />
        <span> Blue</span>
      </div>
      {tableData?.length > 0 ? (
        <table className={theme} {...rest}>
          <thead>
            <tr>
              {isRadioField && <th />}
              {isMultiSelectAvailable && (
                <th>
                  <input type="checkbox" onChange={() => handleSelectAll()} />
                </th>
              )}
              {headerData.map((item) => {
                return (
                  <TableColumn
                    label={item}
                    key={`header-${item}`}
                    isSortEnable={sortBy && sortBy.includes(item)}
                    handleSort={() => handleSort(item)}
                    image={
                      sortBy && sortBy.includes(item) && getImage(sortKey[item])
                    }
                  />
                );
              })}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, i) => (
              <tr
                key={`row${i}`}
                style={{
                  backgroundColor: selectedRows?.includes(i) && "#EFEDFD",
                }}
              >
                {isRadioField && (
                  <td>
                    <RadioButton
                      onChange={() => setSelectedRow(i)}
                      checked={selectedRow === i}
                    />
                  </td>
                )}
                {isMultiSelectAvailable && (
                  <td>
                    <input
                      type="checkbox"
                      onChange={(e) => handleChange(e, i)}
                      checked={selectedRows?.includes(i)}
                    />
                  </td>
                )}

                {headerData.map((column) => (
                  <TableCell
                    label={row[column]}
                    key={`${column}-${row[column]}`}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="noData">There is no data to populate</div>
      )}
    </div>
  );
};
export default TableComponent;
