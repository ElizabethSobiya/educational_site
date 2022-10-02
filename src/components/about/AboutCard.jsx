import React from 'react'
import Title from '../common/title/Title'
import { homeAbout } from '../../dummyData'


function AboutCard() {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
            <div className="left row">
                <img src='./assets/about.webp' alt="" />
            </div>
            <div className="right row">
                <Title subtitle='LEARN ANYTHING' title='Benefits about Online learning Expertise'/>
            </div>
            <div className="items">
                {homeAbout.map((item)=> (
                    <div className="img">
                        <img src={item.cover} alt="" />
                    </div>
                ))}
            </div>
        </div>
      </section>
    </>
  )
}

export default AboutCard
