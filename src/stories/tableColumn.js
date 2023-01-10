import { string, bool, func } from "prop-types";

const TableColumn = ({
  headerStyle,
  label,
  isSortEnable,
  handleSort,
  image,
  rest,
}) => {
  return (
    <th
      className={headerStyle}
      onClick={isSortEnable && handleSort}
      style={{
        backgroundImage: image && `url(${image})`,
      }}
      {...rest}
    >
      {label}
    </th>
  );
};

TableColumn.propTypes = {
  label: string,
  isSortEnable: bool,
  headerStyle: string,
  handleSort: func,
};

export default TableColumn;
