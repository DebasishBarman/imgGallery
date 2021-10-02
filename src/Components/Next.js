import React from 'react'
import { Container, Row,Col } from 'react-bootstrap';
import {Box,Input} from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const Next = ({ images, loading }) => {
    if (loading) {
        return <h2>Loading</h2>
    }

    return <ul className="list-group mb-3">
        <input className="mb-3 col-4" type="text" placeholder="Search Images"  />


        {
            images.map((imgs) => (


                <Row className="mb-3">
                    <Col>
                        <Card className="col-3 offset-4">
                            <img src={imgs.largeImageURL} height="200" width="200" />
                        </Card>
                    </Col>

                </Row>
            ))
        }
    </ul>
    return (
        <div>

        </div>
    )
}

export default Next
