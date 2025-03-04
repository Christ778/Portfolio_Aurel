import React from 'react';

import {services} from '../data'

const Services = () => {
  return (
    <section id='services' className='section bg-tertiary'>
        <div className='container mx-auto'>
            {/* section title */}
            <div className='flex flex-col items-center text-center'>
                <h2 className='section-title
                before:content-services relative
                before:absolute before:opacity-40
                before:-top-[2rem] before:-left-28
                before:hidden before:lg:block'>
                    Mes services pour vous
                </h2>
                <p className='subtitle'>
                Je propose une gamme de services sur mesure pour répondre aux 
                besoins uniques de chaque client. Mon objectif est de créer des
                 solutions web performantes et esthétiques, tout en garantissant
                  une expérience utilisateur optimale. Que ce soit pour le
                   développement d’un site vitrine, d’une application interactive
                    ou d’une refonte de design, je m’engage à livrer des résultats 
                    qui surpassent vos attentes.


                </p>
            </div>
            {/* item grid */}
            <div className='grid lg:grid-cols-4 gap-8'>
                {services.map((service, index) =>{
                    const { icon, name, description } = service;
                    return (
                         <div className='bg-secondary p-6
                    rounded-2xl' key={index}>
                        {/* icon */}
                        <div className='text-[#077b32] rounded-sm
                        w-12 h-12 flex justify-center items-center
                        mb-24 text-[28px]'>
                            {icon}
                        </div>
                        <h4 className='text-xl font-medium mb-2'>{name}</h4>
                        <p>{description}</p>
                    </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Services