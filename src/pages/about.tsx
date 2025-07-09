// src/components/AboutUsHero.tsx

import React from 'react';
import Image from 'next/image';


const AboutUsHero: React.FC = () => {
  return (
    <>
      <section className="relative w-full h-[60vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
        {/* Background Image using Next.js Image component */}
        <Image
          src="/Images/about.png" // Adjust this path to your image's location
          alt="Inside a modern bakery"
          layout="fill"
          objectFit="cover" 
          objectPosition="center"
          priority 
          className="z-0" 
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        {/* Content Container (About Us text and arrow) */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 z-20">
          <h1 className="text-white text-5xl  font-bold mb-0.5 absolute bottom-1">
            About Us
          </h1>
          {/* Scroll indicator (down arrow) */}
          <div className="flex justify-end">
            <button
              className="text-white text-3xl md:text-4xl hover:scale-110 transition-transform duration-300 focus:outline-none"
              aria-label="Scroll down"
              onClick={() => {
                // Smooth scroll to the next section (you'd link this to an ID or ref)
                document.getElementById('next-section')?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              {/* Simple SVG for a down arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-10 h-10 md:w-12 md:h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    <section className="bg-section-bg-cream py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start justify-between gap-y-12 md:gap-x-8 lg:gap-x-16">
        <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left w-full md:w-1/2">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-icon-circle-gold flex items-center justify-center mb-6 md:mb-0 md:mr-8">
            <Image
              src="/Images/flag.png" 
              alt="Mission Flag Icon"
              width={70} 
              height={70}
              objectFit="contain"
            />
          </div>
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="text-text-heading-dark text-3xl font-bold mb-4">
              Our Mission
            </h3>
            <p className="text-text-paragraph-dark-gray text-lg leading-relaxed">
              To sharpen our edge in the manufacture and marketing of quality baked products.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left w-full md:w-1/2 mt-8 md:mt-0">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-icon-circle-gold flex items-center justify-center mb-6 md:mb-0 md:mr-8">
            <Image
              src="/images/eye.png" 
              alt="Vision Eye Icon"
              width={70}
              height={70}
              objectFit="contain"
            />
          </div>
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="text-text-heading-dark text-3xl font-bold mb-4">
              Our Vision
            </h3>
            <p className="text-text-paragraph-dark-gray text-lg leading-relaxed">
              To provide a nourishing, convenient and accessible answer to hunger&apos;s call.
            </p>
          </div>
        </div>
      </div>
    </section>
<section className="max-w-7xl mx-auto px-4 py-16 text-center">
  <h2 className="text-[rgba(38,27,108,1)] text-3xl md:text-4xl font-bold mb-12">
    Our Core Values
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
    {/* Value 1 */}
    <div className="flex flex-col items-center">
      <Image
        src="/Images/teamwork.png"
        width={300}
        height={300}
        alt="Teamwork"
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h3 className="text-lg font-bold text-[rgba(38,27,108,1)] mb-2">
        Teamwork
      </h3>
      <p className="text-sm text-gray-700 max-w-sm">
        We set inspiring goals with purpose and unity. We support each other, build on our strengths, and trust every player to sustain optimism, fully play their role, and drive transformation together.
      </p>
    </div>

    {/* Value 2 */}
    <div className="flex flex-col items-center">
      <Image
        src="/Images/respect.png"
        width={300}
        height={300}
        alt="Respect"
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h3 className="text-lg font-bold text-[rgba(38,27,108,1)] mb-2">
        Respect
      </h3>
      <p className="text-sm text-gray-700 max-w-sm">
        We build self-esteem by treating each other fairly, communicating directly and respectfully, embracing diversity and creating an environment of creativity and innovation.
      </p>
    </div>
    <div className="flex flex-col items-center">
      <Image
        src="/Images/integrity.png"
        width={300}
        height={300}
        alt="Integrity"
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h3 className="text-lg font-bold text-[rgba(38,27,108,1)] mb-2">
        Integrity
      </h3>
      <p className="text-sm text-gray-700 max-w-sm">
        We uphold the highest professional and ethical standards, guard our brand reputation, and ensure our promises are bankable.
      </p>
    </div>
    <div className="flex flex-col items-center ">
      <Image
        src="/Images/commitment.png"
        width={300}
        height={300}
        alt="Commitment"
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h3 className="text-lg font-bold text-[rgba(38,27,108,1)] mb-2">
        Commitment
      </h3>
      <p className="text-sm text-gray-700 max-w-sm">
        We are accountable to stakeholders and commit to actions that create, measure, and deliver results.
      </p>
    </div>
    <div className="flex flex-col items-center">
      <Image
        src="/Images/doughnut.png"
        width={300}
        height={300}
        alt="Excellence"
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h3 className="text-lg font-bold text-[rgba(38,27,108,1)] mb-2">
        Excellence
      </h3>
      <p className="text-sm text-gray-700 max-w-sm">
        We strive to be the best in our business, passionately deliver the highest quality, and present our offering with pride.
      </p>
    </div>
  </div>
</section>


      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-8 md:gap-16">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative w-full h-[400px] sm:h-[500px] md:h-auto md:min-h-[500px] lg:min-h-[600px] max-w-md md:max-w-none">
            <Image
              src="/Images/ceo.png" 
              alt="CEO of Baker's Inn, Nyoni Mazango"
              layout="fill"
              objectFit="cover"
              className="rounded-lg md:rounded-none" 
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-text-heading-dark text-3xl sm:text-4xl font-bold uppercase mb-6">
            Promise of Quality
          </h2>

          <p className="text-text-paragraph-dark-gray text-base leading-relaxed mb-4">
            Thank you for visiting our website. At Bakers Inn, we are committed to delivering
            quality premium bread to our customers. We work with a team of over 1500
            employees nationwide. Our aim is to uphold the highest ethical standards and
            perpetuate excellence in the delivery of our products. For us at Bakers Inn, we aim to
            improve the accessibility of our bread. We are accountable to our stakeholders to
            deliver what we promise.
          </p>

          <p className="text-text-paragraph-dark-gray text-base leading-relaxed mb-4">
            We translate plans into actions; dreams into reality; strategies into achievements and
            tangible returns. We strive to be the best in our business and in our partnerships. We
            are committed to every retail outlet, tuckshop, vendor and consumer in Zimbabwe
            who stock or consume our nourishing bread throughout Zimbabwe. We have built our
            top-quality brand and continue to grow as a company because of you. Thank you for
            your continued support of our brand.
          </p>

          <p className="text-text-paragraph-dark-gray text-base leading-relaxed mb-6">
            We set inspiring goals that we pursue with passion, unity and focus. We support each
            other, build on our strengths and ensure that every player in our team contributes
            fully. We play to win and realise that synergy, communication and alignment bind us
            together.
          </p>

          {/* CEO and Signature */}
          <div className="flex flex-col items-center md:items-start mt-4">
            <h3 className="text-lg font-bold text-text-heading-dark mb-2">
              C.E.O:
            </h3>
            <div className="relative w-48 h-16"> {/* Adjust width/height as needed for signature image */}
              <Image
                src="/Images/ceo-signature.png" // IMPORTANT: Corrected path. Ensure this file exists in /public/images
                alt="Nyoni Mazango Signature"
                layout="fill"
                objectFit="contain"
                objectPosition="left" // Align signature to the left within its container
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  );
};

export default AboutUsHero;