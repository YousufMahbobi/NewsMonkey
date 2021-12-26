import React from 'react'
import loader from './loader.gif'
const Loader = ()=> {
        return (
            <div className="text-center">
                <img className="my-3" src={loader} alt="..." style={{width:'150px',height:'150px'}}/>
            </div>
        )
}

export default Loader
