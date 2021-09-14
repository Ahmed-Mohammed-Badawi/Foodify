import React from "react";
import classes from './CardDetails.module.css';


const CardDetails = (props) => {

    return (
        //Card to Show Meal Data
        <div className={classes.CardDetails}>
            {/*Price of Meal*/}
            <p className={classes.CardPrice}>{props.MealPrice}&#163;</p>
            {/*Name Of Meal*/}
            <h2>{props.MealName}</h2>
            {/*Ingredients Heading*/}
            <p className={classes.IngredientsHeading}>**Ingredients**</p>
            {/*Ingredients List*/}
            {
                //Check if there are Ingredients
                props.MealIngredients ?
                    <ul className={classes.Ingredients}>
                        {
                            props.MealIngredients.map((ING, index) => {
                                return <li key={`ING${index}`}>{ING}</li>
                            })
                        }
                    </ul>
                // Show Message If there Are No Ingredients
                : <p>There are no Ingredients Available</p>
            }

        </div>
    )
}

export default CardDetails;