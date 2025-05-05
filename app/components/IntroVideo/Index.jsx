
import { useState, useEffect } from 'react';

export default function IntroVideo({ isActive }) {

  const eggUrls = [
    '/egg1.svg', 
    '/egg2.svg',
    '/egg3.svg',
  ];
  const [idx, setIdx] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let loopInterval;
    let fadeTimeout;
    let startTimeout;

    const fadeToEgg2 = () => {
      setOpacity(0);
      // transition-duration(0.5s) 후에 이미지 교체
      fadeTimeout = window.setTimeout(() => {
        setIdx(1);
        setOpacity(1);
      }, 500);
    };

    // 1초 뒤에 첫 페이드 → egg1 → egg2
    startTimeout = window.setTimeout(() => {
      fadeToEgg2();

      // 이후 5초마다 egg2 ↔ egg3 토글
      loopInterval = window.setInterval(() => {
        setOpacity(0);
        fadeTimeout = window.setTimeout(() => {
          setIdx(prev => (prev === 1 ? 2 : 1));
          setOpacity(1);
        }, 500);
      }, 5000);
    }, 1000);

    return () => {
      clearInterval(loopInterval);
      clearTimeout(fadeTimeout);
      clearTimeout(startTimeout);
    };
  }, []);
    
    return (
      <>

        <div
              style={{
               
                backgroundImage: 'url(/background.gif)', // public 폴더 내 background.png 파일 사용
                backgroundSize: 'cover',                   // 배경이미지가 전체 화면에 맞게 커버
                backgroundPosition: 'center',              // 배경이미지 중앙 정렬
                backgroundRepeat: 'no-repeat',             // 반복 없음
                width: '100vw',                            // 뷰포트 전체 너비
                height: '100vh',                           // 뷰포트 전체 높이
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',                  // 수직 중앙 정렬
                alignItems: 'center',                      // 수평 중앙 정렬
              }}
            >
              <div style={paragraph} >
                <h2 style={paragraphTitleStyle} className={isActive ? 'title' : ''}>작은 습관, 큰 변화! 일단해로 성장해요</h2>
                <p style={paragraphStyle} className={isActive ? 'title' : ''}>단계별 챌린지로 나만의 포인트 쌓고 포인트로 쇼핑해요</p>
              </div>

              <div style={eggContainer} >
              <img
                src={eggUrls[idx]}
                alt='character'
                style={{
                  ...eggImage,
                  opacity,
                  transition: 'opacity 0.5s ease-in-out',
                }}
              />
              </div>
               
       </div>


          <style jsx>{`
              .title {
                color: white;
                animation: slideUpFadeIn 1s ease-out forwards;
                animation-fill-mode: both;
              }
              /* 키프레임 애니메이션 정의 */
              @keyframes slideUpFadeIn {
                from {
                  transform: translateY(100%);
                  opacity: 0;
                }
                to {
                  transform: translateY(0);
                  opacity: 1;
                }
              }
            `}</style>
      </>
    );
  }

  const paragraph ={
    textAlign: 'center',
    justifyContent : 'center',
    alignItems : 'center',
    width: '100%',
    height: '100%',
    display : 'flex',
    flexDirection : 'column',
    marginTop : '100px',
    color: 'white'

  }
  const paragraphTitleStyle = {
    fontSize: 'clamp(0.7rem, 10vw, 1.5rem)',
    fontWeight: 'bold',
    marginTop: '20px',
    paddingRight: '10px',
    paddingLeft: '10px',
    justifyContent: 'center',                  // 수직 중앙 정렬
    alignItems: 'center', 
  };
  
  
  const paragraphStyle = {
    fontSize: 'clamp(0.3rem, 5vw, 1.0rem)',
    marginTop: '10px',
    paddingRight: '10px',
    paddingLeft: '10px',
    justifyContent: 'center',                  // 수직 중앙 정렬
    alignItems: 'center', 
  };

  const eggContainer = {
   
    justifyContent: 'center', 
    alignItems: 'flex-end',   // 세로는 아래쪽에 배치
    height: '100vh',         // 전체 뷰포트 높이 사용
    overflow: 'hidden',
  }

  const eggImage = {
    width: '80vw',       // 뷰포트 너비의 80% 만큼 차지
    maxWidth: '400px',    // 최대 너비 설정
    height: 'auto', 
  }