import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ThemeToggler } from '../../themes/ThemeToggler';
import DecoImageDesktop from '../../assets/images/bg-header-desktop.svg';
import DecoImageMobile from '../../assets/images/bg-header-mobile.svg';

const Wrapper = styled.div`
  overflow: hidden;
  background: ${({ theme }) => theme.decoBg};
`;

const Section = styled.section`
  background: ${({ theme }) => theme.body};
`;

export const DecoImage = ({ theme, toggleTheme }) => {
  const [decoImage, setDecoImage] = useState(DecoImageDesktop);

  const changeDecoImage = () => {
    window.innerWidth <= 786
      ? setDecoImage(DecoImageMobile)
      : setDecoImage(DecoImageDesktop);
  };

  useEffect(() => {
    changeDecoImage();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', changeDecoImage);
    return () => window.removeEventListener('resize', changeDecoImage);
  }, []);

  return (
    <Section className="Section">
      <Wrapper>
        <img className="Image" src={decoImage} alt="decorated" />
        <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
      </Wrapper>
    </Section>
  );
};
