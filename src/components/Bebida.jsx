import { Card, Button, Col, CardImg, CardBody } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'


const Bebida = ({ bebida }) => {

    const { handleModalClick, handleBebidaidlClick } = useBebidas();





    return (


        <Col md={6} lg={3}>
            <Card className='mb-4' >
                <CardImg
                    variant='top'
                    src={bebida.strDrinkThumb}
                    alt={`Imagen ${bebida.strDrink}`} />


                <CardBody>
                    <Card.Title>
                        {bebida.strDrink}
                    </Card.Title>
                    <Button
                        className='w-100 text-uppercase '
                        variant={'warning'}
                        onClick={() => {
                            handleModalClick()
                            handleBebidaidlClick(bebida.idDrink)
                        }
                        }

                    >
                        Ver Recetas
                    </Button>
                </CardBody>

            </Card>
        </Col>

    )
}

export default Bebida
