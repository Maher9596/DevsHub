import React,{useState, useEffect} from 'react'

function Cards() {
const [cardData, setCardData] = useState([])

    useEffect(() => {
        let data =    localStorage.getItem("myData") ? JSON.parse(localStorage.getItem("myData")) : []
        setCardData(data)
    }, [])

if (localStorage.length === 0 ) {
    return<div><p style={{color: "#fff"}}><strong>Please update your profile...</strong></p></div> 
}else {
    
    return ( 
        <div className="cards-container">
                    {cardData.map(d => {
                        return (
                            // eslint-disable-next-line
                    <div className="cards">
                        <div className="upper-container">                              
                            <div className="img-container">
                                <span className="img-sp"><img src="https://i.pinimg.com/originals/95/49/ff/9549ff7f5600476511721eade4f4b91f.png" atl="AVATAR" width="100px"></img></span>   
                            </div>   
                        
                        </div> 
                        <div className="lower-container"> 
                            <div>
                                <div className="heading">
                                <p className="card-name"><strong>{d.name}</strong></p>
                                <p className="card-status"><strong>{d.status}</strong></p>
                                </div>
                                <p className="card-location"><strong>Location:</strong> {d.location}</p>
                                <p className="card-skills"><strong>Skills:</strong> {d.skills}</p>
                                <p className="card-github"><strong>GithubID:</strong> {d.github}</p>
                                <p className="card-bio"><strong>About Me</strong> {d.bio}</p> 
                            </div> 
                            
                        </div> 
                    </div>
                        )
                         } )}                                 
        </div>
    )
                }
}

export default Cards
