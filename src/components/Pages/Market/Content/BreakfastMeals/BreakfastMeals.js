import React from "react";
import classes from "../Content.module.css";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import Data from "../../../../../json/FoodifyData.json";
import Card from "../../../../UI/Card/Card";

const BreakfastMeals = (props) => {

    return (
        <div className={classes.MealsSection}>
            <h2>Breakfast Meals</h2>
            <Splide
                options={{
                    rewind: true,
                    perMove: 1,
                    autoWidth: true,
                    pagination: false,
                }}
            >
                {
                    Data.Meals.breakfast.filter((filterItem) => {
                        if (props.SearchWord === '') {
                            return filterItem
                        } else if (filterItem.mealName.toLowerCase().includes(props.SearchWord.toLowerCase())) {
                            return filterItem
                        }
                    }).map((current, index) => {
                        return (
                            <SplideSlide key={'br' + index}>
                                <Card cardClicked={props.cardClicked} cardData={current} Name={current.mealName} Image={current.mealImage}/>
                            </SplideSlide>
                        )
                    })
                }
            </Splide>
        </div>
    )
}

export default BreakfastMeals