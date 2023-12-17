import React from 'react'

function TotalView({total}) {
  return (
    <>
        <div className="text-end">
            <span className='bg-primary badge fs-6  '>{total}</span>
            </div>        
    </>
  )
}

export default TotalView

