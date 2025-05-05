import { useState, useEffect } from 'react';
import '../../globals.css';

export default function AppDescription() {
  const cellphoneUrl = [
    '/cellphone1.svg', 
    '/cellphone2.svg',
    '/cellphone3.svg',
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
    <div style={styles.container}>
      
      {/* 왼쪽: 이미지 */}
      <div 
      className="imageContainer"
      style={styles.imageContainer}>
            <img
                src={cellphoneUrl[idx]}
          
          alt='App cellphone' 
          style={styles.image} 
        />

       
      </div>

      
      

      {/* 오른쪽: 제목, 설명, 버튼들 */}
      <div style={styles.textContainer}>
        <h2 style={styles.title}>프로젝트 성공시 주는 혜택!</h2>
        <p style={styles.paragraph}>
          매일 작은 목표를 달성하며 앱의 가치를 직접 경험하세요!
        </p>

        {/* 필요하다면 추가 설명/목록 등 삽입 */}
        <ul style={styles.list}>
          <li>단계별 목표로 눈에 보이는 성취</li>
          <li>누적 포인트로 쇼핑/리워드 가능</li>
          <li>커뮤니티와 함께 도전하면 동기부여↑</li>
        </ul>

        <div style={styles.buttonContainer}>
          <button 
            style={styles.button} 
            onClick={() => alert('android 준비중입니다. 곧 제공해드릴게요!')}
          >
            안드로이드 다운로드
          </button>
          <button 
            style={styles.button} 
            onClick={() => alert('iOS 준비중입니다. 곧 제공해드릴게요!')}
          >
            IOS 다운로드
          </button>
        </div>
      </div>

    </div>
    
  );
}

/* ===== CSS in JS (style 객체) 예시 ===== */
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',       // 좌우 배치
    alignItems: 'center',       
    justifyContent: 'center',
    margin: '0 auto',
    padding: '40px 20px',
    maxWidth: '1200px',         // 최대 너비 (원하는 대로 조정)
  },
  imageContainer: {
    flex: 1,                    // 좌측 영역(이미지) 넓이 비율
    display: 'flex',
    height: '50vh',
    width: '80vw',              // 화면 너비의 80%
    maxWidth: 400,    
    aspectRatio: 1, 
    justifyContent: 'center',
    borderRadius: '20px',
  },
  
  image: {
    width: '50vw', 
     // 부모 컨테이너 내부에서 가로로 꽉 채우되
    height: 'auto',           
    maxWidth: '350px',          // 최대 350px까지 (원하는 크기로 조정)
    
  },
  textContainer: {
    flex: 1,                    // 우측 영역(텍스트) 넓이 비율
    display: 'flex',
    flexDirection: 'column',
   
  },
  title: {
    fontSize: 'clamp(0.5rem, 8vw, 2rem)',
    marginBottom: '16px',
    textAlign: 'left',
  },
  paragraph: {
    fontSize: 'clamp(0.1rem, 5vw, 1.1rem)',
    lineHeight: '1.5',
    marginTop: '8px',
    textAlign: 'left',
  },
  list: {
    marginTop: '16px',
    paddingLeft: '20px',        // ul 기본 들여쓰기
    fontSize: 'clamp(0.1rem, 5vw, 1rem)',
    lineHeight: '1.6',
  },
  buttonContainer: {
    marginTop: '24px',
  },
  button: {
    /* 반응형 폰트 크기 */
    fontSize: 'clamp(0.8rem, 1.5vw, 1.5rem)',

    /* 반응형 패딩 (세로, 가로) */
    padding: 'clamp(0.1rem, 1.5vw, 0.3rem) clamp(0.1rem, 3vw, 1.0rem)',

    /* 버튼 우측 간격도 반응형으로 */
    marginRight: 'clamp(8px, 2vw, 16px)',

    /* 너비/높이도 필요하다면 clamp로 지정 가능 */
    width:  'clamp(80px, 20vw, 170px)',
    height: 'clamp(40px, 6vh, 60px)',

    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: '#FA7852',
    color: '#fff',
  },
};