import { useLazyQuery } from '@apollo/client';
import { Box, Button, Card, CardContent, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import ExternLayout from "../components/core/layouts/Extern"
import { gql } from 'graphql.macro';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {LOGIN_SUCCESS} from "../store/types";

const useStyles = makeStyles((theme) => ({
    card: {
        boxShadow: 'none',
        width: '90%',
        [theme.breakpoints.up('md')]: {
            maxWidth: '30vw',
        }
    }
}));

const LOGIN_DOC = gql`
    query login ($email: String!, $password: String!) {
        login (email: $email, password: $password) {
            user {
                id
            }
            tokens {
                token
            }
            error
        }
    }
`;

const LoginView = () => {
    const classes = useStyles(),
        history = useHistory(),
        dispatch = useDispatch(),
        { token } = useSelector((state) => state.authReducer),
        [email, setEmail] = useState(''),
        [password, setPassword] = useState(''),
        [result, setResult] = useState(null),
        [submitLogin, { loading, error, data }] = useLazyQuery(LOGIN_DOC);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        submitLogin({ variables: { email, password } });
    }, [email, password, submitLogin]);

    useEffect(() => {
        if (loading) return;
        if (error) return console.error(error);
        if (data?.login) setResult(data?.login);
        if (data?.login?.user && !data?.login?.error) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    user: data.login.user,
                    token: data.login.tokens.token
                }
            });
            history.push('/');
        }
    }, [data, error]);

    useEffect(() => {
        if (token) history.replace('/');
    }, [token]);


    return <ExternLayout>
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} width={'100%'} height={'100vh'}>
            <Card className={classes.card}>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant={'h2'}>
                                    Iniciar sesión
                                </Typography>
                                <Box pb={1} />
                            </Grid>
                            {
                                loading && <Grid item xs={12}>
                                    Loading...
                                </Grid>
                            }
                            {
                                result?.error && <Grid item xs={12}>{result?.error}</Grid>
                            }
                            <Grid item xs={12}>
                                <TextField 
                                    label={'Correo electrónico'}
                                    type={'email'}
                                    variant={'outlined'}
                                    fullWidth
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={loading}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label={'Contraseña'}
                                    type={'password'}
                                    variant={'outlined'}
                                    fullWidth
                                    onChange={(e) => setPassword(e.target.value)}
                                    disabled={loading}
                                />
                                <Box pb={1} />
                            </Grid>
                            <Grid item xs={12}>
                                <Button 
                                    variant={'contained'} 
                                    color={'primary'} 
                                    fullWidth 
                                    disableElevation
                                    type={'submit'}
                                    disabled={loading}
                                >
                                    Iniciar sesión
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </Box>
    </ExternLayout>
}

export default LoginView