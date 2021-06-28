import React from 'react';

class HornedBeasts extends React.Component{
    render (){
        return (
            <div>
                <h2> {this.props.animalTitle}</h2>
                <img src= {this.props.animalImg} alt={this.props.animalTitle}/>
                <p> {this.props.animalDes}</p>
            </div>
        )
    }
}

export default HornedBeasts;