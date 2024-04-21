import React from 'react'


export default function Page() {
  return (
    <div className=''>
      <div className='grid place-items-center'>
        <img src='logos/opf-wbg.png' alt='logo'/>
      </div>

      <div className='px-5 mb-7 text-sm md:px-36'>
        <p>
          <div className='text-lg'>About Us</div>
          <div className='text-lg mt-5'>Executive Summary:</div>
          <p>
            Open Path Finder is a pioneering platform revolutionizing how beginner developers engage with open source projects. Our user-friendly interface offers tailored project recommendations, empowering aspiring developers to contribute meaningfully to the open source community. Led by industry experts, we're committed to democratizing access to open source contributions while fostering sustainable growth and innovation in the tech industry.
          </p>
          <div className='text-lg mt-5'>Project Description:</div>
          <p>
            Open Path Finder is dedicated to providing beginner developers with a seamless entry point into the world of open source projects. Our platform offers customized project recommendations, advanced search filters, community collaboration tools, and progress tracking features to support developers at every step of their journey.
          </p>
          <div className='text-lg mt-5'>Project Features:</div>
          <ul>
            <li>
              Customized Project Recommendations: Our platform offers personalized project recommendations based on the user's interests, skill level, and chosen technology stack.
            </li>
            <li>
              <div className='text-lg mt-5'>Advanced Search Filters:</div>
              <p>
                Users can utilize advanced search filters to narrow down their project options based on criteria such as programming language, project size, activity level, and more.
              </p>
            </li>
            <li>
              <div className='text-lg mt-5'>Community Collaboration Tools:</div>
              <p>
                Connect with other developers working on similar projects, share knowledge, and collaborate on open-source initiatives.
              </p>
            </li>
            <li>
              <div className='text-lg mt-5'>Progress Tracking and Feedback:</div>
              <p>
                Track your progress as you contribute to open-source projects through our platform.
              </p>
            </li>
          </ul>
          <div className='text-lg mt-5'>The Future of Open Path Finder:</div>
          <p>
            The future of Open Path Finder is poised to continue breaking barriers, revolutionizing developer engagement with open source projects, and becoming the go-to platform for aspiring developers worldwide.
          </p>
        </p>
      </div>
    </div>
  );
}
