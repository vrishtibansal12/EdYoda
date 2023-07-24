import React from 'react'
import "./Home.css"
import Items from './Items'
import edu from '../../assets/edu.svg';
import timer from '../../assets/timer.svg';
import live from '../../assets/live.svg';
import degree from '../../assets/degree.svg';
import ads from '../../assets/ads.svg';
import Card from '../card/Card.jsx';

const Home = () => {
  return (
    <div className='home'>
      <div className="home-left-parent" >
        <div className="heading">
          <h1>Access curated courses worth <br/>
            <span style={{fontSize: '40px'  }}> ₹&nbsp;
              <span 
                style={{textDecoration: 'line-through', textDecorationColor: 'red', fontFamily: 'Roboto'}}
              > 
                 18,500 
              </span>
            </span> 
            &nbsp;at just 
            <span style={{fontSize: '40px',color: '#0096FF', fontFamily: 'Roboto'}}> ₹99 </span>
            per year!
            </h1>
            <div>
              <div  style={{paddingTop : '20px' }}>
                <Items imgname={edu} highlight="100+" txt="Job relevant cources"  booly="true"></Items>
                <Items imgname={timer} highlight="20000+" txt="Hours of content"  booly="true"></Items>
                <Items imgname={live} highlight="Exclusive" txt="Webinar access"  booly="true"></Items>
                <Items imgname={degree}  txt="Scolarship worth" highlight="₹95,400"  booly="false"></Items>
                <Items imgname={ads} highlight="Ad Free" txt="learning experience"  booly="true"></Items>
              </div>
            </div>
        </div>
      </div>


      <div className="home-right-parent">
        <Card />
      </div>
    </div>
  )
}

export default Home