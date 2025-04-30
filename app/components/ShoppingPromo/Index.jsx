

export default function ShoppingPromo({ isActive }) {


  return (
    <div style={styles.background} >

   
    <div style={styles.container}>
      {/* 첫 문구 */}
      <h2 className={isActive ? 'fadeInDown' : ''} style={styles.title}>
        포인트 쌓고 쇼핑하자 🛍️
      </h2>

      {/* 두 번째 문구 (애니메이션 지연 0.2초) */}
      <p className={isActive ? 'fadeInDown' : ''} style={{ ...styles.paragraph, animationDelay: '0.2s' }}>
        포인트를 얻으면 국산 제품을 반값에 🏷️
      </p>

      {/* 세 번째 문구 (애니메이션 지연 0.4초) */}
      <p className={isActive ? 'fadeInDown' : ''} style={{ ...styles.paragraph, animationDelay: '0.4s' }}>
        습관도 고치면서 포인트 보상으로 저렴하게 물건 구매해요 🚀
      </p>

      {/* 쇼핑 이미지 (애니메이션 지연 0.6초) */}
      <div style={styles.wrapper}>
      <div style={styles.scroller}>
        {[...Array(2)].map((_, i) => (
          <div key={i} style={styles.row}>
            <img src="/appImage2.svg" style={styles.image} />
            <img src="/appImage3.svg" style={styles.image} />
            <img src="/appImage4.svg" style={styles.image} />
            <img src="/appImage5.svg" style={styles.image} />
            <img src="/appImage6.svg" style={styles.image} />
            <img src="/appImage7.svg" style={styles.image} />
            <img src="/appImage8.svg" style={styles.image} />
            <img src="/appImage9.svg" style={styles.image} />
            <img src="/appImage10.svg" style={styles.image} />
          </div>
        ))}
      </div>
    </div>

            <style jsx>{`
          .fadeInDown {
            opacity: 0;
            animation: fadeInDown 1s ease forwards;
            animation-fill-mode: both;
          }

          @keyframes fadeInDown {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .scrollRight {
            animation: scrollRight 5s linear infinite alternate;
          }

         @keyframes scrollRight {
            from { transform: translateX(0%); }
            to   { transform: translateX(50%); }
          }
        `}</style>
    </div>
    </div>
  );
}

/* CSS-in-JS 스타일 정의 */
const styles = {
  background : {
    marginTop: '-30px',
    marginBottom: '-60px',
    backgroundColor: '#444546',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center', // 가로 가운데
    alignItems: 'center', 
  },
  container: {
    color : 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',      // 중앙 정렬
    justifyContent: 'center',  // 수직 중앙(필요에 따라 조정)
    padding: '40px 20px',
  },
  title: {
  
    fontSize: '1.8rem',
    marginBottom: '16px',
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: 1.5,
    margin: '8px 0',
    animationDelay: '0s',      // 개별 애니메이션 지연 (기본값)
  },
  wrapper: {
    marginTop: '50px',
    width: '100%',
    overflow: 'hidden',
  },
  scroller: {
    display: 'flex',
    animation: 'scrollRight 25s linear infinite alternate',
  },
  row: {
    marginTop: '50px',
    display: 'flex',
  },
  image: {
    width: '20vw',       // 뷰포트 너비의 20% (또는 '100%'도 가능)
    height: 'auto',       // 비율 유지
    maxHeight: '300px',   // 너무 커지지 않도록 제한
    marginRight: '1rem',  // 반응형 여백
    objectFit: 'cover', // 이미지가 잘리지 않도록 조절
    borderRadius: '8px', 
  }
};

