import { makeStyles } from '@material-ui/core';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore';
import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { auth, db } from '../firebase';

export const Registro = () => {
    const clases = usarEstilos();
    return (
        <div className={clases.container}>
            <br></br>
            <h2>Registrarse</h2>
            <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo electronico</Form.Label>
                    <Form.Control id="correo" type="email" placeholder="Introduce correo electrónico" />
                    <Form.Text className="text-muted">
                        Su información es personal y nadie tiene acceso a ella.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control id="pass" type="password" placeholder="Contraseña" />
                </Form.Group>

                <Button variant="primary" onClick={login}>
                    Registrarse
                </Button>
            </div><br></br>
            <a href="/login">¿Ya tienes cuenta? Inicia sesión</a>

        </div>
    )

    async function login() {
        const cardb = doc(db, "usuarios", document.getElementById('correo').value);

        await setDoc(cardb, {
            registro: 'true'
        })
            .then((e) => {
                createUserWithEmailAndPassword(auth, document.getElementById('correo').value, document.getElementById('pass').value)
                    .then(() => {
                        console.log('esto si ')
                        sessionStorage.setItem('user', document.getElementById('correo').value);
                        console.log('GUARDO')
                        alert('Registrado correctamente');
                        window.location.href = '/';
                    })

                    .catch((err) => {
                        console.log(err);
                        alert('Error al registrar');
                    });

            })
            .catch((f) => console.log(f, 'ERROR'));

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
