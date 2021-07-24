import React, { useRef, useState } from 'react';
import {Box, makeStyles} from "@material-ui/core";
import InternLayout from '../components/core/layouts/Intern';
import { Canvas, useFrame } from '@react-three/fiber';

const Eye = (props) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead

    //useFrame(() => (mesh.current.rotation.x += 0.01))

    return <mesh
        {...props}
        ref={mesh}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <circleGeometry args={[1.5, 100]} />
        <meshStandardMaterial color={'blue'}/>
    </mesh>
};

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#000',
        height: '100vh',
        width: '100%'
    }
}));

const MainView = (props) => {
    // return <InternLayout>
    //     Hola
    // </InternLayout>
    const classes = useStyles();
    return <Box className={classes.root}>
        <Canvas >
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Eye position={[-2.5, 0, 0]} />
            <Eye position={[2, 0, 0]} />
        </Canvas>
    </Box>
};

export default MainView;