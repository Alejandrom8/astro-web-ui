import React from 'react';
import {Box} from "@material-ui/core";
import WebcamFaceRecognition from "../components/FaceRecognition/Webcam";

const MainView = () => {
    return <Box display={'flex'} justifyContent={'center'} alignItems={'center'} width={'100vw'} height={'100vh'}>
        <WebcamFaceRecognition />
    </Box>;
};

export default MainView;