import {React} from 'react'
import StarRating from './StarRating'

const Color = ({ title, color, rating=0, onRemove=f=>f, onRate=f=>f }) =>
    <section className='color' style={{ backgroundColor: '#CCC', width:'fit-content' }} >
        <h1>{title}</h1>
        <div className='color' style={{ backgroundColor: color, display:'block', height:'50px', width:'200px' }}></div>
        <StarRating starsSelected={rating} onRate={onRate} />
        <button onClick={onRemove}>X</button>
    </section>

export default Color