import React, { useState } from 'react';

import IngredientsList from './IngredientsList'
import Instructions from './Instructions'
import Summary from './Summary';

const Recipe = ({ name, ingredients, steps }) => {

    const [showSummary, setShowSummary] = useState(false)

    const toggleSummary = () => setShowSummary(!showSummary)

    return (
        <section id={name.toLowerCase().replace(/ /g, '-')}>
            <h1>{name}</h1>
            <IngredientsList list={ingredients} />
            <Instructions title="Cooking Instructions"
                steps={steps} />

            <div className='button-container'>
                <button className='prev-btn' onClick={toggleSummary}>
                    {showSummary ? "Hide summary" : "Show summary"}
                </button>
            </div>
            {ingredients && steps && showSummary && <Summary ingredients={ingredients.length} steps={steps.length} title={name} />}
        </section>
    )
}

export default Recipe;