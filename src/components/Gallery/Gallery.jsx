import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import "./gallery.css";
import { useState } from "react";

//Gallery Css
const Showcase = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    display: ${props => (props.isVissible ? 'flex' : 'none')};

    @media (max-width: 600px){
        display: flex;
        flex-direction: column;
        display: ${props => (props.isVissible ? 'flex' : 'none')};
    }
`;

const PictureDiv = styled.div`
    background-color: purple;
    height: 90%;
    width: 40%;
    
    background-size: cover;
    background-position: center;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.45);
    position: relative;

    @media (max-width: 600px){
        width: 80vw;
        height: 40vh;
    }
`;

const DescriptionDiv = styled.div`
    background-color: white;
    height: 90%;
    width: 20%;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.45);
    z-index: 2;
    overflow: hidden;

    @media (max-width: 600px){
        width: 80vw;
        height: 40vh;
    }
`;

const TitleDiv = styled.div`
    width: 100%;
    margin-top: 2vh;
    margin-left: 1vw;
`;

const H1 = styled.h1`
    font-family: "Lato";
    font-size: 2.5vh;
    color: black;
    font-weight: 800;

    @media (max-width: 600px){
        font-size: 2vh;
    }
`;

const H2 = styled.h2`
    font-family: "Lato";
    color: black;
    font-size: 1.5vh;

    @media (max-width: 600px){
        font-size: 1.2vh;
    }
`;

const TextDiv = styled.div`
    width: 93%;
    height: 89%;
    margin-top: 2vh;
`;

const TextP = styled.p`
    font-size: 1.7vh;
    font-family: "Lato";
    color: #636363;
    margin-left: 1vw;
    margin-right: 1vw;
    font-weight: 300;

    @media (max-width: 600px){
        font-size: 1.1vh;
    }
`;

const A = styled.a`
    
`;

const Gallery = () => {

    //Array
    const GalleryItems = [
        {
            id: 1,
            title: "URBANISATION PROJECT",
            location: "ANTALYA, TURKEY",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat earum, magni quisquam iure recusandae explicabo pariatur molestiae, atque praesentium, voluptatem amet impedit provident corrupti. Assumenda ducimus at fugit expedita voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat earum, magni quisquam iure recusandae explicabo pariatur molestiae, atque praesentium, voluptatem amet impedit provident corrupti. Assumenda ducimus at fugit expedita voluptas magni quisquam iure recusandae explicabo pariatur molestiae, atque praesentium, voluptatem amet impedit provident corrupti. Assumenda ducimus at fugit expedita voluptas",
            image: "./Img/gallery5.jpeg",
        },

        {
            id: 2,
            title: "BEACH ZONE",
            location: "KEMER, TURKEY",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat earum, magni quisquam iure recusandae explicabo pariatur molestiae, atque praesentium, voluptatem amet impedit provident corrupti. Assumenda ducimus at fugit expedita voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat earum, magni quisquam iure recusandae explicabo pariatur molestiae, atque praesentium, voluptatem amet impedit provident corrupti. Assumenda ducimus at fugit expedita voluptas magni quisquam iure recusandae explicabo pariatur molestiae, atque praesentium, voluptatem amet impedit provident corrupti. Assumenda ducimus at fugit expedita voluptas",
            image: "./Img/gallery2.jpg",
        },

        {
            id: 3,
            title: "PERSONAL SKETCHING",
            location: "DÖŞEMEALTI, TURKEY",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat earum, magni quisquam iure recusandae explicabo pariatur molestiae, atque praesentium, voluptatem amet impedit provident corrupti. Assumenda ducimus at fugit expedita voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat earum, magni quisquam iure recusandae explicabo pariatur molestiae, atque praesentium, voluptatem amet impedit provident corrupti. Assumenda ducimus at fugit expedita voluptas magni quisquam iure recusandae explicabo pariatur molestiae, atque praesentium, voluptatem amet impedit provident corrupti. Assumenda ducimus at fugit expedita voluptas",
            image: "./Img/gallery3.jpeg",
        },

        {
            id: 4,
            title: "GREEN HOUSE",
            location: "ARAPSUYU, TURKEY",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat earum, magni quisquam iure recusandae explicabo pariatur molestiae, atque praesentium, voluptatem amet impedit provident corrupti. Assumenda ducimus at fugit expedita voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat earum, magni quisquam iure recusandae explicabo pariatur molestiae, atque praesentium, voluptatem amet impedit provident corrupti. Assumenda ducimus at fugit expedita voluptas magni quisquam iure recusandae explicabo pariatur molestiae, atque praesentium, voluptatem amet impedit provident corrupti. Assumenda ducimus at fugit expedita voluptas",
            image: "./Img/gallery4.png",
        },

        {
            id: 5,
            title: "UNIVERSITY",
            location: "ANKARA, TURKEY",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat earum, magni quisquam iure recusandae explicabo pariatur molestiae, atque praesentium, voluptatem amet impedit provident corrupti. Assumenda ducimus at fugit expedita voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat earum, magni quisquam iure recusandae explicabo pariatur molestiae, atque praesentium, voluptatem amet impedit provident corrupti. Assumenda ducimus at fugit expedita voluptas magni quisquam iure recusandae explicabo pariatur molestiae, atque praesentium, voluptatem amet impedit provident corrupti. Assumenda ducimus at fugit expedita voluptas",
            image: "./Img/gallery1.jpg",
        },
    ];

    //Click Events
    const [selectedItem, setSelectedItem] = useState(null);
    const [showcaseVisible, setShowcaseVisible] = useState(false);

    //Functions
    const handleItemClick = (item) => {
        setSelectedItem(item)
        setShowcaseVisible(true);
        console.log("Clicked", item);
    };

    const closeShowcase = () => {
        setShowcaseVisible(false);
    };

    return(
        <div className="gallery" id="gallery">
            {/* Navbar */}
            <Navbar/>

            <Showcase isVissible={showcaseVisible}>
                <PictureDiv style={{backgroundImage: selectedItem ? `url(${selectedItem.image})` : `none`}}>
                    <i class="fa-solid fa-square-xmark" onClick={() => {
                        setShowcaseVisible(false);
                        setSelectedItem(null);
                    }}></i>
                </PictureDiv>
                <DescriptionDiv>
                    <TitleDiv>
                        <H1>{selectedItem?.title}</H1>
                        <H2>{selectedItem?.location}</H2>
                    </TitleDiv>
                    <TextDiv>
                        <TextP>
                            {selectedItem?.description}
                        </TextP>
                    </TextDiv>
                </DescriptionDiv>
            </Showcase>

            {/* Slides */}
            <div className="slides">

                {/* Item */}
                {GalleryItems.map((item) => (
                    <div className="item" onClick={() => handleItemClick(item)} key={item.id}>
                        <div className="img">
                            <div className="picture" style={{backgroundImage: `url(${item.image})`}}></div>
                        </div>
                        <div className="desc">
                            <h2>{item.location}</h2>
                            <h2>{item.title}</h2>
                        </div>
                    </div>
                ))}

            </div>

            {/* Title */}
            <div className="title">
                <h1>MY</h1>
                <h1>GALLERY</h1>
            </div>

        </div>
    )
}

export default Gallery