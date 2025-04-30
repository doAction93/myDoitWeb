'use client';


import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import IntroVideo      from './components/IntroVideo/Index'       // ← 여기만 상대경로로 바꿔서
import AppDescription from './components/AppDescription/Index'
import ShoppingPromo  from './components/ShoppingPromo/Index'
import Inquiry  from './components/Inquiry/Index'



const sections = [
  { key: 'intro',     component: <IntroVideo />        },
  { key: 'description', component: <AppDescription />   },
  { key: 'promo',     component: <ShoppingPromo />     },
  { key: 'Inquiry',     component: <Inquiry />     },
];

export default function Home() {
  

  const sectionsRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isScrolling = useRef(false);


 
  const lastScrollY = useRef(0);

  const [isAtTop, setIsAtTop]       = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const headerHeight = 60; 


  useEffect(() => {
    const handleWheel = e => {
      if (isScrolling.current) return;
      isScrolling.current = true;
      setCurrentIndex(prev =>
        e.deltaY > 0
          ? Math.min(prev + 1, sectionsRef.current.length - 1)
          : Math.max(prev - 1, 0)
      );
      setTimeout(() => (isScrolling.current = false), 1000);
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  useEffect(() => {
    sectionsRef.current[currentIndex]?.scrollIntoView({ behavior: 'smooth' });
    setIsAtTop(currentIndex === 0);       // ← 이 한 줄이면 충분합니다
  }, [currentIndex]);



  useEffect(() => {
    const onScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = idx => setCurrentIndex(idx);

  const showHeader = isAtTop || isHovering;

  const hoverZoneStyle = {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    height: `${headerHeight}px`,
    zIndex: 999,               // 헤더(zIndex:1000) 바로 아래
    background: 'transparent', // 투명하지만 mouse events는 받음
  };


  const headerStyle = {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    height: `${headerHeight}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transform: showHeader
      ? 'translateY(0)'
      : 'translateY(-100%)',
    transition: 'transform 0.2s ease-in-out',
    zIndex: 1000,
  };

  const logoStyle = {
    height: '30px',
    cursor: 'pointer',
  };
  const navStyle = {
    display: 'flex',
    gap: '12px',
  };

  const navButton = {
    background: 'none',
    border: 'none',
    padding: '8px 12px',
    cursor: 'pointer',
    fontSize: '1rem',
  };
  

  return (
    <div >

        <div
          style={hoverZoneStyle}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        />
        <header style={headerStyle} 
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
              <img
                src="/main_logo.png"
                alt="EITA HOUSE Logo"
                style={logoStyle}
                onClick={() => scrollTo(0)}  // 로고 클릭하면 첫 섹션으로
              />

          <nav style={navStyle}>
            <button style={navButton} onClick={() => scrollTo(0)}>About</button>
            <button style={navButton} onClick={() => scrollTo(1)}>Download</button>
            <button style={navButton} onClick={() => scrollTo(2)}>Shop</button>
            <button style={navButton} onClick={() => scrollTo(3)}>Contact Us</button>
        </nav>
        </header>
        
      {sections.map((sec, i) => (
        <section
          key={sec.key}
          ref={el => (sectionsRef.current[i] = el)}
          style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
        >
          {React.cloneElement(sec.component, { isActive: i === currentIndex })}
        </section>
      ))}

      <footer style={footerStyle}>
        <div style={topRow}>
          <p style={leftText}>EITA HOUSE (일단해 앱)</p>
          <div style={linkGroup}>
            <Link href="/terms" style={linkStyle}>이용약관</Link>
            <Link href="/privacy" style={linkStyle}>개인정보방침</Link>
            <Link href="/marketing" style={linkStyle}>SNS 광고 수신 동의</Link>
          </div>
        </div>

        <hr style={lineStyle} />
       
        <div style={addressWrapper}>
          <p style={addressStyle}>경기도 성남시 분당구 판교역로 136 (우)13529</p>
          <p style={addressStyle}>Copyright © 2025 EITA HOUSE All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}



const footerStyle = {
  justifyContent: 'center',
  backgroundColor: '#333',
  color: '#fff',
  padding: '40px 20px',
  fontSize: '14px',
};

const linkStyle = {
  padding: '5px 10px',
  color: 'white',
  borderRadius: '5px',
  textDecoration: 'none',
  fontSize: '0.8rem',
};

const topRow = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
};

const leftText = {
  fontWeight: 'bold',
};

const linkGroup = {
  display: 'flex',
  gap: '20px',
  flexWrap: 'wrap',
};


const lineStyle = {
  margin: '20px 0', // 위 아래 20px
  border: '0',
  borderTop: '1px solid #aaa',
};

const addressWrapper = {
  textAlign: 'left',
};

const addressStyle = {
  color: '#ccc',
  fontSize: '13px',
  margin: 0,
};