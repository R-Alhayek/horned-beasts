import React from 'react';
import HornedBeasts from './HornedBeasts';
import Data from './data.json';

class Main extends React.Component {
    
    render() {
        return (
            <div >

                {Data.map ((item, index)=>{
                    return (
                        <HornedBeasts key={index} animalTitle={item.title} animalImg={item.image_url} animalDes={item.description} animalHorn={item.horns}/>  
                    )
                })
                }
                
                
            </div>
        )
    }
}

export default Main;