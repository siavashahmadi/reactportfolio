import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
        lg:gap-x-20 lg:gap-y-0 h-screen'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px]
          mix-blend-normal bg-top'>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>
              I'm a Full-Stack Developer with over 2 years of experience
            </h3>
            <p className='mb-6'>
              As a skilled software engineer with extensive experience in
              full-stack development and DevOps, I possess a strong proficiency
              in a range of programming languages and a robust foundation in
              computer science.
            </p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient 
                mb-2'>
                  {
                    inView ?
                      <CountUp start={0} end={4} duration={1.5} /> :
                      null}
                  k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient 
                mb-2'>
                  {
                    inView ?
                      <CountUp start={0} end={3} duration={1.5} /> :
                      null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient 
                mb-2'>
                  {
                    inView ?
                      <CountUp start={0} end={5} duration={1.5} /> :
                      null}

                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br />
                  Experience
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contact Me</button>
              <a href="#" className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
