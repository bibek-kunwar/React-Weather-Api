import React from 'react'

const Temprature = () => {
  return (
    <>
       {/* 1 first components card  */}
      <div className="card">
        {/* i first components search  */}

        <input type="text" className="search" placeholder="Enter City Name" spellCheck="false"></input>

       {/* ii first components search image  */}
        <button>
          <img src="search.png" alt="Search_logo" />
        </button>

        <div className="windInfo">
          <div className="weather"> </div>
          <img src="clouds.png" alt="WindImage" />
          <h1>22</h1>
          <h2>Kathmandu

          </h2>
        </div>


        <div className="details">
          <div className="col">
            <img src="wind.png"/>
          </div>
          <div>
            <p className="humidity">50%</p>
            <p>Humidity</p>
          </div>

          <div className="col">
            <img src="humidity.png"/>
          </div>
          <div>
            <p className="wind">15KM/hr</p>
            <p>WInd Speed</p>
          </div>
        </div>
    </div>
    </>
    )
}

export default Temprature