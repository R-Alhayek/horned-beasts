import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'


class HornedBeasts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfClicks: 0
        }
    }

    increaseClicksNum = () => {
        this.setState({
            numberOfClicks: this.state.numberOfClicks + 1
        })
    }

    render() {
        return (
            <div>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src= {this.props.animalImg} alt={this.props.animalTitle} />
                    <Card.Body>
                        <Card.Title>{this.props.animalTitle}</Card.Title>
                        <Card.Text>
                        {this.props.animalDes}
                        </Card.Text>
                        <Card.Text>
                        ❤️ {this.state.numberOfClicks}
                        </Card.Text>
                        <Button onClick={this.increaseClicksNum} variant="info">Vote</Button>{' '}
                    </Card.Body>
                </Card>


                
            </div>
        )
    }
}

export default HornedBeasts;