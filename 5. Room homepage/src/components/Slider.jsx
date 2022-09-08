import React, { useState } from 'react';
import { showCaseData } from '../data/showCaseData';
import arrow from '../assets/images/icon-arrow.svg';
import left from '../assets//images/icon-angle-left.svg';
import right from '../assets//images/icon-angle-right.svg';

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  function nextSlide() {
    if (slideIndex !== showCaseData.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === showCaseData.length) {
      setSlideIndex(1);
    }
  }

  function previousSlide() {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(showCaseData.length);
    }
  }

  return (
    <>
      <section>
        {showCaseData.map((data, index) => (
          <article
            key={data.id}
            className={
              slideIndex === index + 1
                ? 'grid grid-cols-1 lg:grid-cols-2 lg:place-items-center'
                : 'hidden'
            }
          >
            <div className="relative">
              <picture>
                <source media="(min-width: 768px)" srcSet={data.desktop} />
                <img src={data.mobile} alt={data.title} className="w-full" />
              </picture>

              <ul className="absolute -bottom-2 right-0 flex lgHide">
                <li>
                  <button
                    onClick={previousSlide}
                    className="bg-black hover:bg-neutral-700 transition-all duration-200"
                  >
                    <img src={left} alt="left" className="p-4" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={nextSlide}
                    className="bg-black hover:bg-neutral-700 transition-all duration-200"
                  >
                    <img src={right} alt="right" className="p-4" />
                  </button>
                </li>
              </ul>
            </div>

            <div className="p-8 lg:p-12 relative">
              <h1 className="text-slate-900 text-3xl lg:text-5xl">
                {data.title}
              </h1>
              <p className="text-slate-900 opacity-75 my-6 px-2">{data.desc}</p>

              <button
                className="flex items-center gap-4 uppercase hover:opacity-75"
                style={{
                  letterSpacing: '0.7rem',
                }}
              >
                Show now <img src={arrow} alt="arrow" />
              </button>

              <ul className="absolute -bottom-11 left-0 flex smHide">
                <li>
                  <button
                    onClick={previousSlide}
                    className="bg-black hover:bg-neutral-700 transition-all duration-200"
                  >
                    <img src={left} alt="left" className="p-6" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={nextSlide}
                    className="bg-black hover:bg-neutral-700 transition-all duration-200"
                  >
                    <img src={right} alt="right" className="p-6" />
                  </button>
                </li>
              </ul>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};
