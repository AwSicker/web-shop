import React from 'react';
import { Select } from 'antd';
import {connect} from "react-redux";
import {sortItems} from "../../store/actions/actions";

const { Option } = Select;

const SortingComponent = ({filter, sortItemsAction}) => {

  return (
    <div>
        <Select defaultValue="hightolow" style={{ width: 170 }} onChange={(e) => sortItemsAction(e.target.value)}>
            <Option value="hightolow">Price: High to Low</Option>
            <Option value="lowtohigh">Price: Low to High</Option>
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


