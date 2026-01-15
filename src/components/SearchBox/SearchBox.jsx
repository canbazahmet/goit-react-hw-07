import { findContact } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";

import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  const handleFindContact = (event) => {
    dispatch(findContact(event.target.value));
  };

  return (
    <div className={css.searchBox}>
      <p className={css.searchBoxLable}>Find contacts by name</p>
      <input
        className={css.searchBoxField}
        type="text"
        value={filterValue}
        onChange={handleFindContact}
      />
    </div>
  );
}
