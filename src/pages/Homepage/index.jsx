import React, { useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScollableContainer from "../../components/ScrollableContainer"
import { Container, Row, Col } from "reactstrap";
import ScrollableContainer from "../../components/ScrollableContainer";

export default function Homepage() {

  return (
    <div className="Home-container">
      <Header />
      <body>
        <div className="box">
          <div className="detail-box">
            <p className="title">Yang akan datang</p>
            <p className="description">{`Ayo belajar berinvestasi bersama pakar terbaik 
            Siapkan kertas dan telingamu`}</p>
            <div className="detail-btn" >Lihat Detail</div>
          </div>
        </div>
        <div className="articles">
          <div className="items-container">
            <h2>Kegiatan Sebelumnya</h2>
            <div><h3>Lihat Semua</h3></div>
          </div>
          <div className="scroll-container" >
            <ScrollableContainer items={activityList} type={"activity"} />
          </div>
        </div>
        <div className="articles">
          <div className="items-container">
            <h2>Cuplikan Suara</h2>
            <div><h3>Lihat Semua</h3></div>

          </div>
          <div className="scroll-container" >
            <ScrollableContainer items={podcastList} type={"podcast"} />
          </div>
        </div>
        <div className="articles">
          <div className="question-box shadow" >
            <p className="title">Ajukan pertanyaanmu disini</p>
            <p>></p>
          </div>
        </div>
      </body>
      <Footer />
    </div>
  );
}

const textActivity = { 'title': 'Kita Butuh Asuransi', 'image': 'https://picsum.photos/200', 'date': '22/08/2020', 'rate': 4.5, 'detail': 'Ayo cari tahu tentang seberapa penting asuransi buat masa depan kamu dan keluarga' }
const textPodcast = { 'title': 'Kita Butuh Asuransi', 'image': 'https://picsum.photos/200', 'date': '22/08/2020', 'rate': 4.5, 'audio': 'asd' }
const activityList = Array(20).fill(textActivity)
const podcastList = Array(20).fill(textPodcast) 