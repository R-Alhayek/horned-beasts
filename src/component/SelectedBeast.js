import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {

    render() {
        return (
            <div>

                <Modal show={this.props.show} onHide={this.props.close}>
                    <Modal.Header closeButton onClick={this.props.close}>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> <img src={this.props.src} alt={this.props.title} width="100%"/>
                    <p>{this.props.description}</p> </Modal.Body>
                    <Modal.Footer>
                   
                        <Button variant="secondary" onClick={this.props.close}> Close </Button>
                        
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
}

export default SelectedBeast;