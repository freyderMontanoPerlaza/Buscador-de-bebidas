import { Modal, Image, ModalBody } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'


const ModalBebida = () => {


    const { modal, handleModalClick, receta, setReceta } = useBebidas()

    setReceta(receta)

    const mostrarIngredientes = () => {
        //crear arregllo de ingredientes
        let ingredientes = []
        for (let i = 1; i < 16; i++) {
            if (receta[`strIngredient${i}`]) {
                ingredientes.push(
                    <li>{receta[`strIngredient${i}`]}{receta[`strMeasure${i}`]} </li>
                )
            }
        }

        return ingredientes
    }


    return (


        <Modal show={modal} onHide={() => {
            handleModalClick()
            setReceta({})
        }}>
            <Image

                src={receta.strDrinkThumb}
                alt={`Imagen recetas ${receta.strDrink}`}
            />

            <Modal.Header>
                <Modal.Title>{receta.strDrink} </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <div className='p-4'>
                    <h2>{receta.strDrink}</h2>
                    <h2>Ingredientes y Cantidades</h2>
                    <p>{mostrarIngredientes()}</p>
                </div>
            </Modal.Body>
        </Modal>
        )

    
}

export default ModalBebida
