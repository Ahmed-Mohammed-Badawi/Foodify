import React from "react";
import {SplideSlide} from "@splidejs/react-splide";
import Card from "../../../../UI/Card/Card";

const MealSlide = (props) => {
    return (
        <SplideSlide>
            <Card
                // Fn() to Show Modal Card With Data
                cardClicked={props.cardClicked}
                cardData={props.item}
                Image={props.Image}
                Name={props.Name}/>
        </SplideSlide>
    )
}

export default React.memo(MealSlide)