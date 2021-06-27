import React from 'react';

class HornedBeasts extends React.Component{
    render (){
        return (
            <div>
                <h2 className='title'> {this.props.animalTitle}</h2>
                {/* <img className='image'>image {this.props.animalImg}</img> */}
                <p className='description'> {this.props.animalDes}</p>
            </div>
        )
    }
}

export default HornedBeasts;