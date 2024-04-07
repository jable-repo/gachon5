import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Carrer from "./_component";

export default function Home() {
  return (
    <main>
      <div className={styles.resume_subject}>
        <h3>
          박준휘의 포트폴리오
          /CATIA/Siemens NX/C++/Visual
        </h3>
      </div>

      <div className={styles.profile_data}>
        <div className={styles.image_margin}>
          <Image
            className={styles.myimage}
            src="/Park.jpg"
            width={200}
            height={200}
            alt="박준휘 프로필"
          />
        </div>
        <div className={styles.image_left}>
          <div className={styles.image_test}>
            <div className={styles.profile_info_general_name}>박준휘</div>
            <div className={styles.profile_info_general_year}>
              남 2001년 (만 22세)
            </div>
          </div>
          <div className={styles.profile_info_detail}>
            <div class={styles.profile_label}>휴대폰 | 010-9792-8788</div>
            <div class={styles.profile_label}>Email | tommy09302@gmail.com</div>
            <div class={styles.profile_label}>전화번호 | 02-000-0000</div>
            <div class={styles.profile_label}>
              주소 | 경기도 하남시 감일백제로 20 푸르지오 라포레
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className={styles.grid_container}>
          <div>
            <div className={styles.grid_item}>학력</div>
            <div className={styles.grid_item}>가천대 </div>
            <div className={styles.grid_item}>
              <div>대학교(3년)</div>
              <div>재학</div>
            </div>
          </div>

          <div>
            <div className={styles.grid_item}>경력</div>
            <div className={styles.grid_item}>(주)세종 전기공업</div>
            <div className={styles.grid_item}>(주)신광테크</div>
            <div className={styles.grid_item}>
              <div>재직중-</div>
              <div>총 1년 8개월</div>
            </div>
          </div>

          <div>
            <div className={styles.grid_item}>
              인턴&middot;대외활동 / 해외경험
            </div>
            <div className={styles.grid_item}>없음</div>
          </div>

          <div>
            <div className={styles.grid_item}>자격증 / 어학</div>
            <div className={styles.grid_item}>전기 기능사</div>
            <div className={styles.grid_item}>승강기 기능사</div>
            <div className={styles.grid_item}>1종 운전면허</div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.keyword_box}>
          <Link href="https://www.3ds.com/ko/products-services/catia/">
          <button type="button" className={styles.list_btn}>
            <span className={styles.btn_gap}>CATIA</span>
          </button></Link>
          <Link href="https://plm.sw.siemens.com/ko-KR/nx/">
          <button type="button" className={styles.list_btn}>
            <span className={styles.btn_gap}>Siemens NX</span>
          </button></Link>
          <Link href="https://atentsgame.com/landing.do?n_media=335738&n_query=C%2B%2B&n_rank=1&n_ad_group=grp-a001-01-000000039552361&n_ad=nad-a001-01-000000286178678&n_keyword_id=nkw-a001-01-000005888384609&n_keyword=C%2B%2B&n_campaign_type=1&n_ad_group_type=1&n_match=1&NaPm=ct%3Dlunf56fk%7Cci%3D0z80003wDf1A017g6v2C%7Ctr%3Dsa%7Chk%3Dc1d8bd50dce0b7b11fc4dd5f97f3b39767f59b27">
          <button type="button" className={styles.list_btn}>
            <span className={styles.btn_gap}>C++</span>
          </button></Link>
        </div>
      </section>
      <section>
        <h1 className={styles.school_title}>학력</h1>
        <div className={styles.school_title_grid_margin}>
          <div className={styles.school_title_grid}>
            <div>
              <div>2022. 03 ~ 2025. 02</div>
              <div>졸업</div>
            </div>
            <div>
              <div>
                <div>가천대 </div>
                <div>미래자동차학과</div>
              </div>
              <div>
                <div>
                  <div>
                    <div>학점</div>
                    <div>3.50 / 4.5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.school_title_grid}>
            <div>
              <div>2019. 03 ~ 2020. 02</div>
              <div>수료</div>
            </div>
            <div>
              <div>
                <div>대한 상공회의소 </div>
                <div>전기 제어학과</div>
              </div>
              <div>
                <div>
                  <div>
                    <div>취득 점수</div>
                    <div>95 / 100</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.school_title_grid}>
            <div>
              <div>2017. 03 ~ 2020. 02</div>
              <div>졸업 </div>
            </div>
            <div>
              <div>
                <div>대화고등학교 </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Carrer />
    </main>
  );
}
