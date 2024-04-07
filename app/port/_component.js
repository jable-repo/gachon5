import styles from "./page.module.css";

export default function Carrer() {
  return (
    <>
      <section>
        <div className={styles.back_white}>
          <div className={styles.school_title_top}>
            <h1 className={styles.school_title}>경력 </h1>
            <div className={styles.school_title_down}>
              <div>총 18년 1개월</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.carrer_top}>
          <div>
            <div>2020. 01 ~ 2020. 07</div>
            <div>7개월</div>
          </div>
          <div>
            <div>(주)세종 전기공업 </div>
            <div>세종 하이테크 생산부서 사원</div>
          </div>
          <div>
            <div>
              <div>주요직무</div>
              <div>
                - 분전반·수배전반 설비 제작
                <br />
                <br />
                - 소방용 M.C.C(Motor Control Center)판넬 동력제어반 제작<br />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.carrer_top}>
          <div>
            <div>2023. 03 ~ 현재</div>
            <div>1년 1개월</div>
          </div>
          <div>
            <div>신광테크 </div>
            <div>B/Holder Line 생산팀 생산관리자 </div>
          </div>
          <div>
            <div>
              주요직무
              <br />
              <br /> - 생산설비 품목별 시간당 생산량, Tact Time 분석 및 개선
              <br /> - 설비 고장시 대응 조치
              <br /> - 불량 내용분석 및 조치
              <br /> 
              <br /> - B/Holder 자동조립기 제어 및 양품 양산
              <br />
              <br /> - 생산 작업일보,Sub용접 생산집계 문서 입력작업
              <br /> - 년,월 별 생산량 데이터화 작업
              <br /> <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
