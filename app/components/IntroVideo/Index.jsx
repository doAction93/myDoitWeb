
import { useState, useEffect, useRef } from 'react';

export default function IntroVideo({ isActive }) {

  const eggUrls = [
    '/egg1.svg',
    '/egg2.svg',
    '/egg3.svg',
    '/egg4.svg',
    '/egg5.svg',
    '/egg6.svg'
  ];

  const [idx, setIdx] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const loadedRef = useRef(false);
  const timersRef = useRef({ start: null, fade: null, next: null });

  // 프리로드
  useEffect(() => {
    const images = [];
    let loadedCount = 0;
    eggUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedCount += 1;
        if (loadedCount === eggUrls.length) {
          loadedRef.current = true;
        }
      };
      img.onerror = () => {
        console.warn('Failed to load', url);
        // 실패해도 계속 진행하도록 처리
        loadedCount += 1;
        if (loadedCount === eggUrls.length) loadedRef.current = true;
      };
      images.push(img);
    });

    return () => {
      // 메모리 해제
      images.forEach(i => { i.onload = null; i.onerror = null; });
    };
  }, []); // 한번만

  useEffect(() => {
    // 안전: 프리로드 완료 또는 일정 시간 지나면 시작 (프리로드가 너무 오래 걸리면 강제 시작)
    const startDelay = 1000; // 첫 시작 지연
    const intervalMs = 5000; // 각 이미지 노출 시간
    const fadeMs = 500;

    const start = () => {
      const showNext = () => {
        setOpacity(0);
        timersRef.current.fade = window.setTimeout(() => {
          setIdx(prev => (prev + 1) % eggUrls.length);
          setOpacity(1);
          // 다음 이미지는 fadeMs + (intervalMs - fadeMs) 후에 호출
          timersRef.current.next = window.setTimeout(showNext, intervalMs);
        }, fadeMs);
      };

      // 첫 전환: 현재(0) -> 다음
      timersRef.current.next = window.setTimeout(showNext, intervalMs);
    };

    // 보수적으로: 프리로드 끝나면 바로 시작, 아니면 startDelay 후 시작
    if (loadedRef.current) {
      timersRef.current.start = window.setTimeout(start, startDelay);
    } else {
      // 만약 프리로드가 너무 느리면 3초 후 강제 시작
      timersRef.current.start = window.setTimeout(start, 3000);
    }

    return () => {
      // cleanup
      Object.values(timersRef.current).forEach(t => {
        if (t) {
          clearTimeout(t);
          clearInterval(t);
        }
      });
      timersRef.current = { start: null, fade: null, next: null };
    };
  }, []); // 빈 deps: 초기화 한 번

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