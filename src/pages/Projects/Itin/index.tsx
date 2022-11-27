import { useEffect } from "react";
import Carousel from "../../../components/Common/Carousel";
import { HorizontalDivider } from "../../../components/Common/Divider";
import Iframe from "../../../components/Common/Iframe";
import Quote from "../../../components/Common/Quote";
import Tags from "../../../components/Common/Tags";
import { Body, SubHeading } from "../../../components/Common/Text";
import ProjectLayout from "../../../components/Layout/ProjectLayout";

const ItinProject = () => {
    useEffect(() => {
        document.title = 'Itin | Nico Renaldo';
        return (() => {
            document.title = 'Nico Renaldo';
        })
    }, []);

    const tags = ["Django"]

    const images = [
        "https://imgur.com/EvnaPOT.png",
        "https://imgur.com/O3qGGHo.png",
        "https://imgur.com/fRftqWN.png",
        "https://imgur.com/aFztX9g.png",
    ]

    return <ProjectLayout title="Itin" date="11 June 2021" >
        <Quote>A trip planning web application to easily make, share, and browse itineraries</Quote>
        <SubHeading>Project Brief</SubHeading>
        <Body>Itin is a trip planning web application to easily make, share, and browse itineraries. Users could make their own itinerary, share it with friends and public, and take inspiration from others.</Body>
        <Body>
            Link to <a className="underline" href="https://itin.netlify.app/">Project Demo</a>
        </Body>
        <HorizontalDivider />
        <Body>
            Itin is created using Django for backend, and Nuxt.js for frontend side. Most people plan their trip using notepad, google search and maps. This old-fashioned way of making itinerary is inflexible, having to switch to many applications and making changes burdensome. Itin provides a way for people to make their itinerary in one place, where user could search destinations, write notes, see suggestions and sharing it to friends.
        </Body>

        <SubHeading>Photos</SubHeading>
        <Carousel images={images} />

        <SubHeading>Introduction Video</SubHeading>
        <Iframe src="https://www.youtube.com/embed/QpfyA9de6zk" />

        <Tags tags={tags} />

    </ProjectLayout>
}

export default ItinProject