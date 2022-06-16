import react from 'react'
import MainPage from './components/MainPage'
import ProductDetails from './components/ProductDetails'
import './App.css'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import { useEffect,useState } from 'react'

const App = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [selectedID,SetSelectedID] = useState()

    useEffect(()=>{
        const getUsers = () =>{
            setLoading(true)
            let url = `https://fakestoreapi.com/products?limit=10`
            fetch(url).then(res => res.json()).then(
                data => {
                    setData(data)
                    console.log(data)
                }).catch(e=>{
                    console.log('data not found')
                }).finally(()=> setLoading(false))

        }
        getUsers()
    },[])

    return(
        <div className='Main_container'>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage data={data} loading={loading} SetSelectedID={SetSelectedID}/>}></Route>
                <Route path='/details' element={<ProductDetails selectedID={selectedID} data={data} />}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
