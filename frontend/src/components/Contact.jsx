import React from 'react';

import { contact } from '../data';

const Contact = () => {
  return (
    <section className='section bg-primary' 
    id='contact'>
        <div className="container mx-auto">
            <div className="flex flex-col items-center">
                <h2 className='section-title
                 before:content-contact relative 
                 before:absolute before:opacity-40 
                 before:-top-7 before:-left-40 before:hidden
                 before:lg:block'> Contactez-moi
                </h2>
                <p className='subtitle'>
                Si vous avez un projet en tête ou des questions, 
                n'hésitez pas à me contacter. Je suis à votre disposition 
                *pour discuter de vos besoins et vous aider à concrétiser vos idées. 
                Ensemble, créons des solutions web adaptées à vos attentes.


                </p>
            </div>

            <div className='flex flex-col lg:gap-x-8
            lg:flex-row'>
                {/* info */}
                <div className='flex flex-1 flex-col
                items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'>
                    {contact.map((item, index) => {
                        const {icon, title, subtitle,
                            description } = item;
                            return (
                                <div className='flex flex-col
                                lg:flex-row gap-x-4' key={index}>
                                    <div className='text-[#077b32]
                                    rounded-sm w-14 h-14 flex items-start
                                    justify-center mt-2 mb-4 lg:mb-0
                                    text-2xl'>
                                        {icon}
                                    </div>
                                    <div>
                                        <h4 className='font-body text-xl
                                        mb-1'>{title}</h4>
                                        <p className='mb-1'>{subtitle}</p>
                                        <p className='text-[#077b32] 
                                        font-normal'>{description}</p>
                                    </div>
                                </div>
                            )
                    })}
                </div>
                {/* form */}
                <form className='space-y-8 w-full max-w-[780px]' action="">
                    <div className='flex gap-8'>
                        <input className='input' type="text" 
                        placeholder='Votre nom'/>
                        <input className='input' type="email" 
                        placeholder='Votre email'/>
                    </div>
                    <input type="text" className='input'
                    placeholder='Subject'/>
                    <textarea 
                    name="" id=""
                    className='textarea'
                    placeholder='Votre message'></textarea>
                    <button className='btn btn-lg bg-[#077b32]
                    hover:bg-[#065d24] '>Envoyer</button>
                </form>
            </div>

        </div>
    </section>
  )
}

export default Contact