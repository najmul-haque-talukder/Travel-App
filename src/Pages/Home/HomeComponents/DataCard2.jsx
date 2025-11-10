import React from 'react'

const DataCard2 = ({id, location, img}) => {

    


  return (
    <div>
        <div>
            <div className='border'>
                <img src={img} />
                <div>
                    <p>{id} Tour</p>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DataCard2