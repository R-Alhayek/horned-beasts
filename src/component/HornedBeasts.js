import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import SelectedBeast from './SelectedBeast';



class HornedBeasts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfClicks: 0,
            showCard: false
        }
    }

    increaseClicksNum = () => {
        this.setState({
            numberOfClicks: this.state.numberOfClicks + 1
        })
    }

    handleModalShow = () => {
        this.setState({
            showCard: true
        })
    }

    handleModalClose = () => {
        this.setState({
            showCard: false
        })
    }

    render() {
        return (
            <div id="card">


                <Card style={{ width: '18rem' }} onClick={this.handleModalShow}>
                    <Card.Img variant="top" src={this.props.animalImg} alt={this.props.animalTitle} />
                    <Card.Body>
                        <Card.Title>{this.props.animalTitle}</Card.Title>
                        <Card.Title>🦄 Beast Horns: {this.props.animalHorn}</Card.Title>
                        <Card.Text>
                            {this.props.animalDes}
                        </Card.Text>
                        <Card.Text>
                            ❤️ {this.state.numberOfClicks}
                        </Card.Text>
                        <Button onClick={this.increaseClicksNum} variant="info">Vote</Button>{' '}
                    </Card.Body>
                </Card>


                <SelectedBeast show={this.state.showCard} close={this.handleModalClose} title={this.props.animalTitle} src={this.props.animalImg} description={this.props.animalDes}/>


            </div>
        )
    }
}

export default HornedBeasts;