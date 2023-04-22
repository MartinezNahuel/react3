
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import Loader from '../Loader/Loader'
import useProductos from './UseProductos'



const ItemListContainer = () => {

    const {productos, loading} = useProductos()

    return (
        <div className="container my-5">
            {loading
                ? <Loader />
                : <ItemList items={productos} />
            }
        </div>
    )
}

export default ItemListContainer