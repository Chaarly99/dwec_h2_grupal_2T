import { makeStyles } from '@material-ui/core';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { auth } from '../firebase';

export const Login = () => {
    const clases = usarEstilos();
    return (
        <div className={clases.container}>
            <br></br>
            <h2>Iniciar sesión</h2>
            <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control id="correo" type="email" placeholder="Introduce correo electrónico" />
                    <Form.Text className="text-muted">
                        Su información es confidencial. Ningún tercero tendrá acceso a sus datos.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control id="passwd" type="password" placeholder="Contraseña" />
                </Form.Group>

                <Button variant="primary" onClick={login}>
                    Iniciar sesión
                </Button>
            </div><br></br>
            <a href="/registro">¿No tiene cuenta? Regístrese</a>

        </div>
    )

    function login() {
        signInWithEmailAndPassword(auth, document.getElementById('correo').value, document.getElementById('passwd').value)
           .then (() => {
               sessionStorage.setItem('user',document.getElementById('correo').value);
               alert('Bienvenido ' + document.getElementById('correo').value);
               window.location.href='/';
           })

           .catch(() => {
            alert('Error al iniciar sesión');
           });
    }
}

const usarEstilos = makeStyles(() => ({
    container: {
        maxWidth: '80vh',
        maxHeight: '80vh',
        margin: '0 auto',
        padding: '15px'

    }
}));