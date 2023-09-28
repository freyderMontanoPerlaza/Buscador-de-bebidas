import { Row } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'
import Bebida from './Bebida';




const ListadoBebidas = () => {


    //extraer bebidas
    const { bebidas } = useBebidas()



    return (

        <Row className='mt-5'>
            {bebidas.map(bebida =>(
                <Bebida
                key={bebida.isDrink}
                    bebida={bebida}
                />
            ))}
        </Row>


    )
}

export default ListadoBebidas
