import React from 'react';
import { Select } from 'antd';
import {connect} from "react-redux";
import {sortItems} from "../../store/actions/actions";
import {FilterTypes} from "../../utils/utils";

const { Option } = Select;

const SortingComponent = ({filter, sortItemsAction}) => {

  return (
    <div>
        <Select defaultValue={filter} style={{ width: 170 }} onChange={(e) => sortItemsAction(e.target.value)}>
            <Option value={FilterTypes.PRICE_HIGH_TO_LOW}>Price: High to Low</Option>
         //?   <Option value={FilterTypes.PRICE_LOW_TO_HIGH}>Price: Low to High</Option>
        </Select>
    </div>
  )
}

const mapStateToProps = (state) => ({
    filter: state.filter
})

const mapDispatchToProps = (dispatch) => ({
 sortItemsAction(filter) {
     dispatch(sortItems(filter))
 }
})

export const Sorting = connect(mapStateToProps, mapDispatchToProps)(SortingComponent);


