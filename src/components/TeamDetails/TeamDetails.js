import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Card, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag,faFutbol,faGlobe,faMars } from '@fortawesome/free-solid-svg-icons'
import './TeamDetails.css'
import Footer from '../Footer/Footer';
import maleImg from '../../Images/Photo/male.png'
import femaleImg from '../../Images/Photo/female.png'

const TeamDetails = () => {
    const {teamId}= useParams();
    const [detail,setDetail]= useState({})
    useEffect(() => {
        const url=`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
        .then(res => res.json())
        .then(data =>setDetail(data.teams[0]))

    },[teamId])
    console.log(detail.strTeam);
    const genderImg = detail.strGender==="Male" ? maleImg : femaleImg;
    return (
        <div>
            <Card className="bg-dark text-white DetailHeaderImg d-flex">
                {/* <Card.Img src="https://img.uefa.com/imgml/uefacom/ucl/social/og-default.jpg" fluid alt="Card image" /> */}
                <Card.Img src={detail.strStadiumThumb} fluid alt="Card image" />
                <Card.ImgOverlay>
                     <Card.Title className='teamImg'><Card.Img src={detail.strTeamBadge} fluid/></Card.Title>
                </Card.ImgOverlay>
            </Card>
            <Container className='aboutTeam'>
                <div>
                    <p className='TeamName'>{detail.strAlternate}</p>
                    <p><FontAwesomeIcon icon={faFlag}/> Founded: {detail.intFormedYear}</p>
                    <p><FontAwesomeIcon icon={faGlobe}/> Country: {detail.strCountry}</p>
                    <p><FontAwesomeIcon icon={faFutbol}/> Sports Type: {detail.strSport}</p>
                    <p><FontAwesomeIcon icon={faMars}/> Gender: {detail.strGender}</p>
                </div>
                <span className='genderImg'>
                    <img src={genderImg} fluid alt=""/>
                </span>

            </Container>
            {/* <h3>This is team details: {teamId}</h3> */}
            {/* <p>{detail.strTeam}</p> */}
            <Container>
                <h3>About Team:</h3>
                <i><small>{detail.strDescriptionEN}</small></i>
                <br/><br/>
                <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ut corrupti consectetur alias, nihil tempore sequi consequatur consequuntur cumque soluta necessitatibus facilis voluptas architecto voluptatibus. Quibusdam ducimus neque deleniti incidunt laboriosam nemo adipisci error eos veniam optio, dolores aspernatur velit obcaecati aliquid. Autem at non, sit corrupti ullam iste rem.</i>
            </Container>
            <Footer detail={detail}></Footer>
        </div>
    );
};

export default TeamDetails;