import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import module from "./SearchBox.module.css";

const SearchBox = () => {
    const selectNameFilter = useSelector((state) => state.filter.filter);
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        const action = setFilter(evt.target.value)
        dispatch(action)
    };

    return (
        <label className={module.label}>
            <span>Find contacts by name</span>
            <input value={selectNameFilter} className={module.input} type="text" name="name" onChange={handleChange} />
        </label>
    )
}

export default SearchBox