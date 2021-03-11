import React from 'react';
import {useState, useEffect} from 'react'
import Team from '../Team/Team';
import { Card } from 'react-bootstrap'
import './Home.css'

const Home = () => {
    const [teams, setTeams] = useState([])
    useEffect(() => {
      fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
      .then(res => res.json())
      .then(data =>setTeams(data.teams))
      
  
    },[])
    return (
        <div>
            {/* <h1>Total teams : {teams.length}</h1> */}
            <Card className="bg-dark text-white homeImg">
                    <Card.Img src="https://img.uefa.com/imgml/uefacom/ucl/social/og-default.jpg" fluid alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title className='title'><i idName='titleId'>One Football App</i></Card.Title>
                        {/* <Card.Text>
                        </Card.Text>
                        <Card.Text></Card.Text> */}
                    </Card.ImgOverlay>
            </Card>
            <div className='homeDiv'>
            {
                teams.map((team) => <Team team={team}></Team>)
            }

            </div>
        
            
        </div>
    );
};

export default Home;