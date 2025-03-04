import React from 'react';
import Image from '../assets/img/about.webp'

const About = () => {
  return (
    <section className='section bg-secondary'>
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row
            gap-24">
                <img className='object-cover h-full w-[566px]
                md:mx-auto lg:mx-0 rounded-2xl'
                 src={Image} alt="" />
                 <div className="flex flex-col items-center
                 text-center lg:items-start lg:text-left">
                    <div className='flex flex-col'>
                        <h2 className='text-3xl lg:text-4xl
                         font-medium lg:font-extrabold mb-
                         before:content-about relative
                         before:absolute before:opacity-40
                         before:-top-[2rem] before:hidden 
                         before:lg:block'>
                            Aurel
                         </h2>
                         <p className='mb-4
                         text-[#077b32]'>Developpeur Web Freelance
                        </p>
                        <hr className='mb-8 opacity-5' />
                        <p className='mb-8'>
                        Passionné par la création d’expériences web innovantes,
                         je suis un développeur freelance spécialisé dans la
                          conception et le développement d’interfaces web 
                          performantes et intuitives. Fort d’une solide expérience, 
                          j’utilise des technologies modernes pour créer des sites 
                          et applications qui répondent aux besoins spécifiques de mes clients. Mon approche se base sur l’écoute attentive de vos exigences pour transformer vos idées en solutions digitales efficaces et esthétiques.
                           <br />Toujours en quête de nouveaux défis, je mets un
                            point d’honneur à offrir des résultats de qualité qui
                             allient performance et design.
                        </p>
                    </div>
                    <a href="tel:+2290191917503">
                        <button className='btn btn-md bg-[#077b32] hover:bg-[#065d24] transition-all'>
                            Contactez-moi
                        </button>
                    </a>

                 </div>
            </div>

        </div>
    </section>
  )
}

export default About