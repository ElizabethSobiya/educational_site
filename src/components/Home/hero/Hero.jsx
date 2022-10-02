import React from 'react'
import Title from '../../common/title/Title'
import './Hero.css'

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container">
            <div className="row">
                <Title subtitle='WELCOME TO ACADEMIA' title='Best Online Education'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quasi reprehenderit quo soluta nam beatae rerum at explicabo aliquam placeat? Sapiente asperiores nihil tempore dolore possimus dolores ea doloremque voluptatem.</p>
                <div className="button">
                    <button className='primary-btn'>
                      GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                    </button>
                    <button>
                      VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                    </button>
                </div>
            </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  )
}

export default Hero
