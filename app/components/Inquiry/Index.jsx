import '../../globals.css';

export default function Inquiry() {
 
 
  const inquiries = [
    {
      title: '일단해 쇼핑',
      highlight: '판매자 입점',
      desc: '관련 문의',
      email: 'doaction93@gmail.com',
    },
    {
      title: '일단해 제휴',
      highlight: '제휴 광고',
      desc: '관련 문의',
      email: 'doaction93@gmail.com',
    },
    {
      title: '일단해 앱 서비스',
      highlight: '서비스',
      desc: '관련 문의',
      email: 'doaction93@gmail.com',
    },
  ];
  
  
  return (
    <div style={styles.background} >
      <div style={styles.container} className="inquiryContainer">
        {inquiries.map((inquiry, index) => (
          <div key={index} style={styles.card} className="inquiryCard">
            <h3 style={styles.title}>{inquiry.title}</h3>
            <p style={styles.subtitle}>
              <span style={styles.highlight}>{inquiry.highlight}</span> {inquiry.desc}
            </p>
            <a href={`mailto:${inquiry.email}`} style={styles.button}>
              문의하기
            </a>
          </div>
        ))}
      </div>

      {/* 스타일 정의 */}
      <style jsx>{`
        a:hover {
          background-color: #3b82f6;
          color: white;
        }
      `}</style>
   </div>
  );
}


const styles = {
  background : {
    marginTop: '-30px',
    marginBottom: '-60px',
    backgroundColor: '#F56A5E',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center', // 가로 가운데
    alignItems: 'center', 
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems : 'center',
    padding: '40px 0',
    flexWrap: 'wrap',
    gap: 24,
  },
  card: {
    display: 'flex',          // flex 컨테이너로 변경
    flexDirection: 'column',
    alignItems : 'center',
    justifyContent : 'center',
    width: '25vw',          // 전체의 90% 너비
    maxWidth: 500, 
    aspectRatio: 1,
    background: 'white',
    borderRadius: 12,
    padding: 20,
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 12,
  },
  highlight: {
    color: '#FE4238',
    fontWeight: 'bold',
  },
  button: {
    display: 'inline-block',
    marginTop: 10,
    padding: '10px 16px',
    borderRadius: 6,
    backgroundColor: '#FA7852',
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'white',
    transition: 'all 0.2s',
  },
};
