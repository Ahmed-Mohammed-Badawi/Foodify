import React from "react";
import classes from "../Content.module.css";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import Data from "../../../../../json/FoodifyData.json";
import Card from "../../../../UI/Card/Card";


const SweetMeals = (props) => {

    return (
        <div className={classes.MealsSection}>
            <h2>Sweet Meals</h2>
            <Splide
                options={{
                    rewind: true,
                    perMove: 1,
                    autoWidth: true,
                    pagination: false,
                }}
            >
                {
                    Data.Meals.candy.filter((filterItem) => {
                        if (props.SearchWord === '') {
                            return filterItem
                        } else if (filterItem.mealName.toLowerCase().includes(props.SearchWord)) {
                            return filterItem
                        }
                    }).map((current, index) => {
                        return (
                            <SplideSlide key={'ca' + index}>
                                <Card cardData={current} Name={current.mealName} Image={current.mealImage}/>
                            </SplideSlide>
                        )
                    })
                }
            </Splide>
        </div>
    )
}

export default SweetMeals;