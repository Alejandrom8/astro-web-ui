import React, {useCallback, useRef} from 'react';
import {Box, makeStyles} from "@material-ui/core";
import Webcam from "react-webcam";
import { baseShadows } from "../core/Theme";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '500px',
        height: '500px',
        overflow: 'hidden',
        borderRadius: '48%',
        backgroundColor: '#000'
    }
}));

const WebcamFaceRecognition = () => {
    const webcamRef = useRef(null),
        classes = useStyles();

    const snapshot = useCallback(() => {
        const imageSource = webcamRef.current.getScreenshot();
    }, [webcamRef]);

    return <Box className={classes.root}>
        <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpg"
            videoConstraints={{
                width: 700,
                height: 700,
                facingMode: "user"
            }}
        />
    </Box>;
};

export default WebcamFaceRecognition;