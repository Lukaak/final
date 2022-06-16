import react from 'react'
import './MainPage.css'
import { Link } from 'react-router-dom'
import ProductDetails from './ProductDetails'


const MainPage = ({data,loading,SetSelectedID}) => {

   




    return(
        <div>
           
            <div className='container'>
            {
                loading && <div><h1>loading...</h1></div>
            }
            {data.map((val)=>{ 
                return(
                        
                        <Link to='/details'>
                        <div onClick={SetSelectedID(val.id)}   className='Box_1' key={val.id}>
                            <div className='name_holder'>
                                {val.title}
                            </div>
                            <div className='image'>
                                <img src={val.image} alt="Girl in a jacket" width="300" height="200"/>
                            </div>
                        </div>
                        </Link>
                        
                )
            })}
            </div>
        </div>
    )
}

export default MainPage