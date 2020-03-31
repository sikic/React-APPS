import React ,{Fragment,useState} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Producto from './components/Producto'
import Carrito from './components/Carrito'


function App() {


  //state listado de productos ejemplo 
  //el primer valor es el array  y el segundo una funcion que lo modificara

  const [productos, setProductos] = useState([
    { id: 1 ,nombre : 'CAmisa ReactJs',precio:50 },
    { id: 2 ,nombre : 'CAmisa Vuejs',precio:40 },
    { id: 3 ,nombre : 'CAmisa Node',precio:30 },
    { id: 4 ,nombre : 'CAmisa Angular',precio:20 }

  ]);

  // state para un carrito 

  const [carrito, setCarrito] = useState([]);
  //obtener la fecha 
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo = "tienda Virtual"/>

      <h1> Lista de productos</h1>
      {productos.map(producto => {
          return (<Producto 
                    producto= {producto}
                    key ={producto.id} 
                    productos = {productos}
                    carrito = {carrito}
                    agregarProducto = {setCarrito}
             />);
        }
      )}

      <Carrito
        carrito={carrito}
      />

      <Footer
      fecha = {fecha} />
    </Fragment>
  );
}

export default App;
