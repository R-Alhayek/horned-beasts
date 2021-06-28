import React from 'react';
import HornedBeasts from './HornedBeasts';
import Data from './data.json';

class Main extends React.Component {
    
    render() {
        return (
            <div >

                {Data.map ((item)=>{
                    return (
                        <HornedBeasts animalTitle={item.title} animalImg={item.image_url} animalDes={item.description}/>  
                    )
                })
                }
                
                
            </div>
        )
    }
}

export default Main;