import SortingUp from "../images/SortingUp.png";
import SortingDown from "../images/SortingDown.png";
import SortingNutural from "../images/SortingNetural.png";

export const Direction = {
  Up: "Acending",
  Down: "Descending",
  Nutural: "Nutural",
};

export const getImage = (direction) =>
  ({
    [Direction.Up]: SortingUp,
    [Direction.Down]: SortingDown,
    [Direction.Nutural]: SortingNutural,
  }[direction] || Direction.Nutural);

export const Theme = {
  Light: "theme-light",
  Blue: "theme-blue",
};
