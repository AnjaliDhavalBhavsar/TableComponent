import { string } from "prop-types";

const TableCell = ({ cellStyle, label, rest }) => {
  return (
    <td className={cellStyle} {...rest}>
      {label}
    </td>
  );
};

TableCell.propTypes = {
  label: string,
  cellStyle: string,
};

export default TableCell;
