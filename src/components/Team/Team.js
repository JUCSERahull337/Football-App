import { Button, Card, Container } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Team.css'


const Team = (props) => {
    const { strTeam, strTeamBadge, idTeam } = props.team
    // const teamStyle = {
    //     border: '1px solid blue',
    //     margin: '10px',
    //     padding: '10px',

    // }
    console.log('team', props.team.strTeam)

    return (
        <div>
            <Container className='teamCard'>
                <Card style={{ width: '18rem',borderRadius:'10px'}}>
                    <Card.Img variant="top" src={strTeamBadge} fluid />
                    <Card.Body>
                        <Card.Title>{strTeam}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Link to={`/about/${idTeam}`}><Button variant="primary">See More  <FontAwesomeIcon icon={faArrowRight}/></Button></Link>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </Container>


            
             {/* <div>
                <img src={strTeamBadge} alt="" />
            </div>
            <div>
                <h2>Name : {strTeam}</h2>
                <h4>Sport Type: {strSport}</h4>
            </div>
            <button>Explore</button>
            <p>Id: <Link to ={`/about/${idTeam}`}>Show id details: {idTeam}</Link> </p> 
             <Link to={`/about/${idTeam}`}><Button variant="primary">Explore</Button></Link> */}


        </div>
    )
}
export default Team;