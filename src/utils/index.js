import { Direction } from "../constants";
import { useState } from "react";

export const sortStringAscendingOrder = (array, key) =>
  [...array].sort((a, b) => (a[key] > b[key] ? 1 : -1));

export const sortStringDescendingOrder = (array, key) =>
  [...array].sort((a, b) => (a[key] > b[key] ? -1 : 1));

export const resetSortData = (sortData) =>
  Object.fromEntries(sortData.map((key) => [key, Direction.Nutural]));

export const useSorting = (sortKeys, data) => {
  const [tableData, setTableData] = useState(data);
  const [sortKey, setSortKey] = useState(sortKeys);

  const sortItems = (item) => {
    if (sortKey[item] === Direction.Nutural || sortKey[item] === Direction.Up) {
      setSortKey({
        ...resetSortData(Object.keys(sortKey)),
        [item]: Direction.Down,
      });

      setTableData(sortStringAscendingOrder(tableData, item));
    } else {
      setSortKey({
        ...resetSortData(Object.keys(sortKey)),
        [item]: Direction.Up,
      });
      setTableData(sortStringDescendingOrder(tableData, item));
    }
  };

  return { sortKey, tableData, sortItems };
};
