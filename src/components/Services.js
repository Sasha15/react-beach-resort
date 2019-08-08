import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

import Title from './Title';

class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, expedita."
            },
            {
                icon: <FaHiking />,
                title: "endless hiking",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, expedita."
            },
            {
                icon: <FaShuttleVan />,
                title: "free shuttle",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, expedita."
            },
            {
                icon: <FaBeer />,
                title: "strongest beer",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, expedita."
            }
        ]
    }

    render() {
        return (
           <section className="services"> 
               <Title title="Services"/>
               <div className="services-center">
                   {this.state.services.map((service, index) => {
                       return <article key={index} className="service">
                           <span>{service.icon}</span>
                           <h6>{service.title}</h6>
                           <p>{service.info}</p>
                       </article>
                   })}
               </div>
           </section> 
        )
    }
}

export default Services;