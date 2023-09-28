import { Button, Form, Row, Col, Alert } from 'react-bootstrap'
import { useState } from 'react'

import useCategorias from '../hooks/useCategorias'
import useBebidas from '../hooks/useBebidas'



function Formulario() {

    //asociar a nuestro form control
    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    });


    const [alerta, setAlerta] = useState('');
    const { categorias } = useCategorias();
    const {consultarBebida} = useBebidas();


    const handleSubmit = e => {
        e.preventDefault()

        if (Object.values(busqueda).includes('')) {
            setAlerta('Todos los cambios son obligatorios');
            return
        }
        setAlerta('');
        //despues de validar mando la busqueda
        consultarBebida(busqueda)
        
    }









    return (
        <Form
            onSubmit={handleSubmit}
        >

            {alerta && <Alert variant='danger' className='text-center'>{alerta}</Alert>}

            <Row>
                <Col md={6}>

                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='name'>Nombre Bebida</Form.Label>

                        <Form.Control
                            id='nombre'
                            type='text'
                            placeholder='Ej: Tequila, Vodka, etc'
                            name='nombre'
                            value={busqueda.nombre}
                            onChange={e => setBusqueda({
                                ...busqueda,
                                [e.target.name]: e.target.value
                            })}
                        />


                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='categoria'>Categoria Bebida</Form.Label>

                        <Form.Select
                            id='categoria'
                            name='categoria'
                            onChange={e => setBusqueda({
                                ...busqueda,
                                [e.target.name]: e.target.value
                            })}

                        >
                            <option>- Selecciona Categoria -</option>

                            {categorias.map(categoria => (
                                <option
                                    key={categoria.strCategory}
                                    value={categoria.strCategory}
                                >
                                    {categoria.strCategory}
                                </option>
                            ))}










                        </Form.Select>

                    </Form.Group>

                </Col>
            </Row>

            <Row className='justify-content-end mt-2' >
                <Col md={6}>
                    <Button
                        className='w-100 text-uppercase'
                        variant='danger'
                        type='submit'
                    >
                        Buscar Bebida
                    </Button>
                </Col>
            </Row>

        </Form>
    )
}

export default Formulario
