import { useContext } from 'react';
import './Filter.scss';
import { AppContext } from '../../../context/AppProvider';

export type FilterType = "ALL" | "COMPLETE" | "PENDING";

const Filter = () => {

  const { filter, updateFilter } = useContext(AppContext);
  const activeClass = "filter-cont__filter filter-cont__filter--active";
  const regularClass = "filter-cont__filter";

  return (
    <div className="filter-cont">
      <p>Filter by:</p>

      <div
        className={filter === "ALL" ? activeClass : regularClass}
        onClick={() => updateFilter("ALL")}
      >
        ALL
      </div>

      <div
        className={filter === "COMPLETE" ? activeClass : regularClass}
        onClick={() => updateFilter("COMPLETE")}
      >
        COMPLETE
      </div>

      <div
        className={filter === "PENDING" ? activeClass : regularClass}
        onClick={() => updateFilter("PENDING")}
      >
        PENDING
      </div>
    </div>
  )
}

export default Filter;