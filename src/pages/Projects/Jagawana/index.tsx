import { useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "../../../components/Common/Carousel";
import { HorizontalDivider } from "../../../components/Common/Divider";
import Iframe from "../../../components/Common/Iframe";
import { ImageCaption } from "../../../components/Common/Image";
import Quote from "../../../components/Common/Quote";
import { Body, SubHeading } from "../../../components/Common/Text";
import ProjectLayout from "../../../components/Layout/ProjectLayout";

const JagawanaProject = () => {
    useEffect(() => {
        document.title = 'Jagawana | Nico Renaldo';
        return (() => {
            document.title = 'Nico Renaldo';
        })
    }, []);

    const images = [
        "https://imgur.com/u7JWAoM.png",
        "https://imgur.com/exxj7EQ.png",
        "https://imgur.com/zkthst5.png",
        "https://imgur.com/oGCEllK.png",
    ]

    return <ProjectLayout title="Jagawana" date="11 June 2021" >
        <Quote>Research on chainsaw detection using IoT device and machine learning</Quote>
        <SubHeading>Project Brief</SubHeading>
        <Body>Jagawana is a wide sensor network system deployed in the forests to prevent <span className="font-bold">ilegal logging</span>. We use sensors to pick up voices in the forests to monitor what happened in the forest in real-time. We use machine learning to process the sounds taken by the sensor and to identify the sounds into various categories, such as <span className="font-bold">chainsaws, trucks, gunshot, and burning sounds</span>. We will be using Android App to monitor and notify the user if suspicious events were happening in the forest.</Body>
        <HorizontalDivider />
        <Body>
            This project combines  <span className="font-bold">machine learning, internet of things, cloud computing, and android application</span>. This project is part of <a href="https://grow.google/intl/id_id/bangkit/" className="font-bold underline">Bangkit Academy's Capstone Project</a>. My role in this project involves creating the Machine Learning Model, designing and developing the Google Cloud Architecture, making the IoT prototype, and creating design and illustration.
        </Body>
        <Body>
            The machine learning model is developed on Kaggle using <a href="https://www.kaggle.com/mmoreaux/environmental-sound-classification-50" className="font-bold underline">ESC-50 Audio Dataset</a>, <a href="https://www.kaggle.com/chrisfilo/urbansound8k" className="font-bold underline">Urbansound8k Dataset</a>, and <a href="https://research.google.com/audioset/" className="font-bold underline">Google's Audioset</a>.
        </Body>
        <Body>
            We are using ESP32 and Mosquitto Broker to prototype the working device. The Google Cloud Platform then will receive and store the audio data using Pub/Sub as a trigger for the cloud functions to store the data to Cloud Storage and BigQuery. Every audio data inputted will be processed by our machine learning model deployed on the AI Platform. You can see the project overview on image below.
        </Body>
        <ImageCaption src="https://imgur.com/H0S11qF.png" alt="jagawana-system-overview" caption="Jagawana System Overview" />

        <SubHeading>Photos</SubHeading>
        <Carousel images={images} />

        <SubHeading>Introduction Video</SubHeading>
        <Iframe src="https://www.youtube.com/embed/nLUPU1pUyE0" />

        <SubHeading>Related Links</SubHeading>
        <Body>
            I made a medium stories explaining the project in details. The github repo link can be seen on the About Jagawana stories.
        </Body>
        <ul className="pl-8 list-disc">
            <li><Link to="/blogs/jagawana-overview">About Jagawana</Link></li>
            <li><Link to="/blogs/jagawana-machine-learning">ML in Depth</Link></li>
            <li><Link to="/blogs/jagawana-iot">IoT in Depth</Link></li>
        </ul>
    </ProjectLayout>
}

export default JagawanaProject