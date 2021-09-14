import React from "react";
import classes from "../Content.module.css";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import Data from "../../../../../json/FoodifyData.json";
import Card from "../../../../UI/Card/Card";


const LunchMeals = (props) => {
    return (
        <div className={classes.MealsSection}>
            <h2>Lunch Meals</h2>
            <div className={classes.MealsContainer}>
                <Splide
                    options={{
                        rewind: true,
                        perMove: 1,
                        autoWidth: true,
                        pagination: false,
                    }}
                >
                    {
                        Data.Meals.lunch.filter((filterItem) => {
                            if (props.SearchWord === '') {
                                return filterItem
                            } else if (filterItem.mealName.toLowerCase().includes(props.SearchWord.toLocaleString())) {
                                return filterItem
                            }
                        }).map((current, index) => {
                            return (
                                <SplideSlide key={'lu' + index}>
                                    <Card
                                        cardClicked={props.cardClicked}
                                        cardData={current}
                                        Name={current.mealName}
                                        Image={current.mealImage}/>
                                </SplideSlide>
                            )
                        })
                    }
                </Splide>
            </div>
        </div>
    )
}

export default LunchMeals;