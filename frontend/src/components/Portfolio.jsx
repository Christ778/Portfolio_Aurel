import React from 'react';

import Projects from '../components/Projects';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section
    bg-primary min-h-[1400px]'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center
            text-center'>
                <h2 className='section-title
                before:content-portfolio relative
                before:absolute before:opacity-40
                before:-top-[2rem] before:-left-3/4
                before:hidden before:lg:block'>
                    Mes dernières oeuvres
                </h2>
                <p className='subtitle'>
                Découvrez les projets récents sur lesquels j'ai eu le plaisir de
                 travailler. Chacun d'eux reflète mon engagement à offrir des 
                 solutions web innovantes et adaptées aux besoins uniques de mes clients.


                </p>
            </div>
            <Projects />
        </div>
    </section>
  )
}

export default Portfolio