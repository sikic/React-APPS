import React,{useContext, createContext,useState} from 'react'
import {ModalContext} from'../Context/ModalContext'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import '../index.css'


function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 300,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 2, 3),
      
    },
}));

const Recetas = ({item}) => {

    //configurtacion del modal 
    const [modalStyle]= useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () =>{
        setOpen(true);
    }

    const handleclose = () =>{
        setOpen(false);
    }


    const{strDrink,strDrinkThumb} = item;

    //extraer valores del context
    const { detalles,setidReceta,setdetalles} = useContext(ModalContext);

    const mostrarIngredientes = (informacion) =>{
        let Ingredientes = [];
        let encontrado = false;
        for (let index = 1; index < 16 & !encontrado; index++) {
           if(informacion[`strIngredient${index}`] !== null)
                Ingredientes.push(<li> {informacion[`strIngredient${index}`] }
                 { informacion[`strMeasure${index}`]}
                </li>);
            else
                encontrado=true;
        }
        console.log(Ingredientes);
        return Ingredientes;
    }
    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{strDrink}</h2>
                <img className="card-img-top" src={strDrinkThumb} alt="imagen bebida" />

                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={()=>{
                            setidReceta(item.idDrink);
                            handleOpen();
                        }}
                    >
                        Ver Receta
                    </button>

                    <Modal
                        open={open}
                        onClose={() =>{
                            setidReceta(null);
                            handleclose();
                            setdetalles({});
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <div className="scroll">

                                <h2>{detalles.strDrink}</h2>
                                <h3 className="mt-4">Instrucciones</h3>
                                <p>
                                {detalles.strInstructions} 
                                </p>

                                <img className="img-fluid my-4" src={detalles.strDrinkThumb} />

                                <h3>Ingredientes y cantidades</h3>
                                <ul>
                                    {mostrarIngredientes(detalles)}
                                </ul>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Recetas
