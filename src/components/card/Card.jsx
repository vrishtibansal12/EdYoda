import {useState} from 'react'
import SubsPlan from '../subsplan/SubsPlan.jsx'
import './Card.css'
import time from '../../assets/e-time.svg'
import razorpay from '../../assets/razorpay.svg'

const Card = () => {
  const [active, setActive] = useState('p2');
  let totalFee = 18500;
  const [tot, setTot] = useState('18500');
  
  return (
    <div className="right-box">
        <div className="entry-step">
        
          <div className="entry-step1">
              <button>1</button>
              <p>Sign Up</p>
          </div>
          <div className="entry-step2">
              <button>2</button>
              <p>Subscribe</p>
          </div>
        
        </div>
        
        <div className="right-box-head">
        <h3>Select your subscription plan</h3>
        </div>

        <div className="subs-plan">
          <SubsPlan id='p1' heading='12 Months Subscription' mPrice='₹8' tPrice='₹99' rec='false' active={active}  setActive={setActive} tot={tot} setTot={setTot}  expired='true'/>
          <SubsPlan id='p2' heading='12 Months Subscription' mPrice='₹15' tPrice='₹179' rec='true' active={active}  setActive={setActive} tot={tot} setTot={setTot} expired='false'/>
          <SubsPlan id='p3' heading='6 Months Subscription' mPrice='₹25' tPrice='₹149' rec='false' active={active}  setActive={setActive} tot={tot} setTot={setTot}  expired='false'/>
          <SubsPlan id='p4' heading='3 Months Subscription' mPrice='₹33' tPrice='₹99' rec='false' active={active}  setActive={setActive} tot={tot} setTot={setTot}  expired='false'/>
        </div>

        <div className='total-div'>
          <div className="sub-fee-container">
            <p className='sub-head'>Subscription Fee</p>
            <p className="sub-fee">₹18,500</p>
          </div>
          <div className="ltd-time-container">
            <div className="ltd-title">
              <p className="ltd-head">Limited time offer</p>
              <div className="ltd-subhead">
                <img src={time} alt="ltd-time" stroke='#000'/>
                <p className="ltd-subhead-txt"><span></span> Offer valid till 25th March 2023 </p>
              </div>
            </div>

            <div className='ltd-price'>
              <p className='ltd-price-p'>-₹ {totalFee - Number(tot.substring(1))}</p>
            </div>
          </div>
          <div className="total-fee-container">
            <p className='total-head'><strong>Total </strong>(Incl. of 18% GST)</p>
            <p className="total-fee">{tot}</p>
          </div>
        </div>

        <div className='button'>
          <button className='cancel-button'>Cancel</button>
          <button className='proceed-button'>Proceed to Pay</button>
        </div>
        <div>
          <img alt="" src={razorpay}></img>
        </div>

    </div>
  )
}

export default Card