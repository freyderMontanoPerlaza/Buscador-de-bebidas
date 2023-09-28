import { Card, Button, Col, CardImg, CardBody } from 'react-bootstrap'

const Bebida = ({ bebida }) => {
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
                    <Button className='w-100 text-uppercase ' variant='warning'>
                        Ver Recetas
                    </Button>
                </CardBody>

            </Card>
        </Col>

    )
}

export default Bebida
