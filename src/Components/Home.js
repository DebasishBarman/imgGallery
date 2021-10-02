import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Pagination from './Pagination';
import { Container, Row } from 'react-bootstrap';
import Next from './Next';
import Typography from '@mui/material/Typography';

const Home = () => {
    const [images, setImages] = useState([])
    const items = []
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [imgPerPage, setImgPerPage] = useState(10);
    const lastindex = currentPage * imgPerPage;
    const firstIndex = lastindex - imgPerPage;
    const curr = images.slice(firstIndex, lastindex)
    useEffect(async () => {
        const fetchImages = async () => {
            setLoading(true);
            const { data } = await axios.get('https://pixabay.com/api/?key=23662287-3a7710f062935a2684fbe7377&q=yellow+flowers&image_type=photo')
            console.log(data.hits.slice(0, 2))
            setImages(data.hits)
            setLoading(false);

        }

        fetchImages()
        // console.log(data.hits);

    }, [])

    const getD = () => {

    }

    const paginate = (pNum) => setCurrentPage(pNum)


    return (
        <>
            <Container>
                <Row> <Typography variant="h3" gutterBottom component="div">
                    Debasish's Pixabay Gallery
                </Typography></Row>
                <Row>
                    <Next images={curr} loading={loading} />
                </Row>
                <Row className="text-center offset-md-5">
                    <Pagination imagesPerPage={imgPerPage} totalImages={images.length} paginate={paginate} />
                </Row>

            </Container>


            {/* <Container>

                {images.map((e) => (
                    <Row className="col-4">

                        <img src={e.largeImageURL} height="200" width="200" />
                    </Row>


                ))}
                <div className="ms-1">
                    <Pagination count={3} color="primary" onClick={getD} />
                </div>



            </Container> */}



        </>
    )
}

export default Home
