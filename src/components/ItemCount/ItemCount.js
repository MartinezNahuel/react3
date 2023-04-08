
const ItemCount=({max, cantidad, setCantidad, agregar})=>{

const handleRestar = ()=> {
cantidad > 1 && setCantidad (cantidad - 1)
}

const handleSumar = () => {
cantidad < max &&  setCantidad (cantidad+1)
    
}
// const handleAgregar =()=>{
//         const itemToAdd={
//         ...item,
//         cantidad
//     }
//     console.log(itemToAdd)
// }

    return(
        <div>
            <button onClick={handleRestar} className="btn btn-outline-primary"> - </button>
            <span className="mx-3"> {cantidad} </span>
            <button onClick={handleSumar} className="btn btn-outline-primary"> + </button>

            <br/>

            <button onClick={agregar} className="btn btn-success"> agregar al carrito </button>
            

        </div>
    )
}

export default ItemCount