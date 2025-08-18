'use client';
import { useRouter } from 'next/navigation'; 
import Head from 'next/head';
import { useState } from 'react';


export default function SupportPage() {
  const router = useRouter();


  const [copied, setCopied] = useState(false);
    const email = 'doaction93@gmail.com';

    const handleMail = (e) => {
        e.preventDefault();
    
        // 1) mailto 스킴 호출 시도
        const newWindow = window.open(
          `mailto:${email}`,
          '_blank', 
          'noopener,noreferrer'
        );
    
        // 2) 호출 실패 시(newWindow===null) → 클립보드에 복사
        if (!newWindow) {
          navigator.clipboard.writeText(email)
            .then(() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            })
            .catch(() => {
              // 복사도 실패할 경우 알림만 띄움
              alert(`메일 앱을 열 수 없고, 주소 복사도 실패했습니다.\n수동으로: ${email}`);
            });
        }
      };
  
  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>고객 지원 - 일단해</title>
      </Head>
      <main style={styles.container}>


        <h1 style={styles.header}>📞 고객 지원</h1>
        <p>앱 사용 중 문제가 발생하거나 개인정보 관련 문의가 필요하신가요? 아래 내용을 참고해주세요.</p>

        <section style={styles.section}>
          <h2>📋 자주 묻는 질문 (FAQ)</h2>
          <ul style={styles.ul}>
            <li><strong>Q. 개인정보는 어디에 저장되나요?</strong><br />A. Firestore에 안전하게 저장됩니다.</li>
            <li><strong>Q. 회원 탈퇴 시 개인정보는 어떻게 되나요?</strong><br />A. 탈퇴 즉시 3개월간 개인정보 저장되며 이후 무조건 삭제됩니다.</li>
            <li><strong>Q. 개인정보를 수정하고 싶어요.</strong><br />A. 앱 내에 있는 기능으로 비밀번호, 닉네임 등등 변경이 가능합니다.</li>
            <li><strong>Q. 개인정보 열람/삭제를 요청하고 싶어요.</strong><br />A. 아래 이메일로 요청해주세요: doaction93@gmail.com</li>
            <li><strong>Q. 제3자에게 개인정보가 제공되나요?</strong><br />A. 고객 동의 없이 제공되지 않습니다.</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2>📧 고객센터 이메일</h2>
          <p>개인정보 문의:  <a
              href={`mailto:${email}`}
              onClick={handleMail}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',    // a 태그를 블록처럼
                textDecoration: 'none',     // 밑줄 제거
              }}
            >
                이메일 문의</a><br />
              </p>

              <p></p>
        </section>

        <section style={styles.section}>
          <h2>🛠 앱 정보</h2>
          <p>앱 이름: 일단해<br />버전: 1.0.48</p>
        </section>
      </main>

        <div style={styles.backButtonContainer}>
        <button onClick={handleBack} style={styles.backButton}>뒤로가기</button>
        </div>
      
    </>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
  },
  backButtonContainer:{
    width : '100%',
    display: 'flex',               // 👉 flex 레이아웃 활성화
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {

    marginBottom: '1.5rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#ffffff',
    border: '2px solid #ccc',
    borderRadius: '6px',
    cursor: 'pointer',
    width : '20%',
    fontSize: '1rem',
  },
  header: {
    fontSize: '1.8rem',
    marginBottom: '1rem',
  },
  section: {
    marginTop: '2rem',
  },
  ul: {
    listStyle: 'none',
    padding: 0,
  },
};