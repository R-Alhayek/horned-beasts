import React from 'react';
import HornedBeasts from './HornedBeasts';
import Data from './data.json';
import Form from 'react-bootstrap/Form'

class Main extends React.Component {

    filter = (element) => {
        let hornsNumber = parseInt(element.target.value);
        let hornedAni = Data;
        if (hornsNumber) {
            hornedAni = Data.filter(element => element.horns === hornsNumber);

        }
        this.props.renderFilterdAnimal(hornedAni);
    }

    render() {
        return (
            <div >

                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Select Beasts by the Number of Horns</Form.Label>
                        <Form.Control as="select" onChange={this.filter}>
                            <option value=''>All</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='100'>Wow..</option>

                        </Form.Control>
                    </Form.Group>
                </Form>

                {this.props.newDataArr.map((item, index) => {
                    return (


                        <HornedBeasts key={index} animalTitle={item.title} animalImg={item.image_url} animalDes={item.description} animalHorn={item.horns} />
                    )
                })
                }




            </div>


        )

    }
}

export default Main;