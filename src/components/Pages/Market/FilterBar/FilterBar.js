import React from "react";
import classes from './FilterBar.module.css';
//Redux Imports
import {connect} from "react-redux";
import * as actions from '../../../../store/Actions/allActions';

const FilterBar = (props) => {

    return (
        <section className={classes.Filter}>
            <div>
                <div className={classes.Input}>
                    <input
                        onChange={() => props.onCheckChange('breakfast')}
                        checked={props.isChecked_1}
                        id={'checkbox-1'}
                        type='checkbox'/>
                    <label htmlFor={'checkbox-1'}>Breakfast</label>
                </div>
            </div>
            <div>
                <div className={classes.Input}>
                    <input
                        onChange={() => props.onCheckChange('lunch')}
                        checked={props.isChecked_2}
                        id={'checkbox-2'}
                        type='checkbox'/>
                    <label htmlFor={'checkbox-2'}>Lunch</label>
                </div>
            </div>
            <div>
                <div className={classes.Input}>
                    <input
                        onChange={() => props.onCheckChange('sweet')}
                        checked={props.isChecked_3}
                        id={'checkbox-3'}
                        type='checkbox'/>
                    <label htmlFor={'checkbox-3'}>Sweet</label>
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = (state) => {
    return {
        isChecked_1: state.Market.CheckBoxes.breakfast,
        isChecked_2: state.Market.CheckBoxes.lunch,
        isChecked_3: state.Market.CheckBoxes.sweet
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCheckChange: (filterType) => dispatch(actions.CheckboxChanged(filterType))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);