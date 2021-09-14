import React from "react";
import classes from './Menu.module.css';
//Imports
import MainImage from '../../../../assets/images/MainMeal.png';
import Data from '../../../../json/FoodifyData.json';
import MealSlide from "./MealSlide/MealSlide";

import {Splide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import {NavLink} from "react-router-dom";

const Menu = (props) => {

    return (
        <section className={classes.Menu} style={{overflow: 'hidden'}}>
            <h2 className={classes.Heading_2}>Our Menu</h2>

            {/* Main Meal in Our Menu*/}
            <div className={classes.Main}>
                <div className={classes.Ingredients}>
                    <h3>Healthy Meal (ATCH)</h3>
                    <ul>
                        {Data.Meals.mainMeal.ingredients.map((Ing, index) => {
                            return <li className={classes.Ingredient} key={'Ing' + index}>{Ing}</li>
                        })}
                    </ul>
                    <NavLink className={classes.ShowMore} to={'/Market'}>SHOW MORE &rarr;</NavLink>
                </div>
                <div className={classes.Image}>
                    <img src={MainImage} alt={"Main Meal"}/>
                </div>
            </div>

            {/* Second Part Carousel Part and Lunch menu*/}
            <div className={classes.CarouselContainer}>
                <Splide
                    options={{
                        rewind: true,
                        perMove: 1,
                        autoWidth: true,
                        pagination: false,
                    }}
                >
                    {/*Map on lunch meals to show them in card component*/}
                    {Data.Meals.lunch.map((item, index) => {
                            return (
                                <MealSlide
                                    key={'item' + index}
                                    cardClicked={props.cardClicked}
                                    item={item}
                                    Image={item.mealImage}
                                    Name={item.mealName}
                                />
                            )
                        }
                    )}
                </Splide>
            </div>
        </section>
    )
}

export default Menu;