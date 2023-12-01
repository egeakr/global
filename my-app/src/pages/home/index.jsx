import "./style.css";
import resim1 from "../home/images/resim1.jpg";
import resim2 from "../home/images/resim2.jpg";
import resim3 from "../home/images/resim3.jpg";
import resim4 from "../home/images/resim4.jpg";
import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function App() {
  return (
    <Carousel
      emulateTouch
      autoPlay
      infiniteLoop
      useKeyboardArrows
      transitionTime={2000}
      interval={5000}
      width="100%"
      showArrows={true}
      showThumbs={true}
      showStatus={false}
      axis="vertical"
      selectedItem={1}
    >
      <div className="slide-holder">
        <img className="bmw" alt="" src={resim1} />
        <div className="text-container">
          <h2>Koleksiyon</h2>
          <p style={{fontSize: '20px'}}>
            Global Tekstil, kendi bünyesinde bulundurduğu Kalite kontrol, Model
            hane, Kesimhane, Ütü paket departmanlarında ürünlerin Türkiye'nin en
            iyi kalitesi ürün kalitesi sunan üretici firmalarından bir
            tanesidir. Modern çizgilerle ve modayı yansıtan tarzı ile bayan/bay
            ve bebek, tüm örme dış giyim modellerini aynı kalite ve verimlilikte
            sunabilen Global Tekstil, günümüzde müşteri memnuniyetini en önemli
            unsuru olarak görmekte ve müşterileri için kendi koleksiyonunu
            oluşturma yolunda emin adımlarla hızla ilerlemektedir.
          </p><br />
        </div>
      </div>
      <div className="slide-holder">
        <img className="porsche" alt="" src={resim2} />
        <div className="text-container" style={{ display: "inline-block" }}>
          <h2>Mümessillik</h2>
          <p style={{fontSize: '20px'}}>
            Global Tekstil Paz. ‘nın bünyesinde bulunan mümessilik firmasında
            marka zincirlerine servis vermektedir. Bu işi en iyi kalite, en iyi
            fiyat ve hızlı servisle sağlamaktadır. Türkiye’deki birçok
            bağlantısını kullanarak müşterine çok kapsamlı olarak hizmet
            etmektedir. Amacımız, müşterilerimine en iyi fiyat ve hizmet
            anlayışıyla, müşteri standartlarında mal üretilmesini garantiler.
          </p><br />
        </div>
      </div>
      <div className="slide-holder">
        <img className="gtr" alt="" src={resim3} />
        <div className="text-container">
          <h2>Üretim</h2>
          <p style={{fontSize: '20px'}}>
            üretimin tüm aşamalarının izlenebilir olmasını sağlayan Global
            Tekstil, üretimin her sürecinde fizik ve kalite kontrol
            laboratuvarında uluslararası standartlara uygun test yapmakta ve
            müşterilerine servis vermektedir.
          </p>
        </div><br />
      </div>
      <div className="slide-holder">
        <img className="mustang" alt="" src={resim4} />
        <div className="text-container">
          <h2>Tasarım</h2>
          <p style={{fontSize: '20px'}}>
            Hazırladığımız özel tasarımların ve kapsül koleksiyonların daima
            müşteri beklentilerini karşılayan hatta aşan düzeyde olması için
            uğraşıyoruz. Gelecek sezon trendleriyle ilgili tüm bilgileri
            edinerek müşterilerimizin stillerini belirlemelerine destek
            oluyoruz. Kumaşlarımız, aksesuarlarımız, baskı-nakış, yıkama ve
            boyama tekniklerimizi sürekli geliştirerek kullandığımız tasarım
            uygulamalarını daima daha ileriye taşıyoruz. Geliştirdiğimiz
            materyalleri uygun modellemeyle ürünlerimize adapte ettikten sonra
            nihai ürünlerimizi müşterilerimize sunuyoruz. Müşterilerimizin
            koleksiyonlarını geliştirmek üzere aksesuarları ve konsepte uygun
            parçaları dahil ettiğimiz özgün setler oluşturuyoruz. Ürün ve
            koleksiyon sunumlarından siparişe, siparişten teslimata kadar
            müşterilerimizle açık iletişim kurmaya, ve süreç boyunca bağlantıda
            kalmaya önem veriyoruz.
          </p>
        </div><br />
      </div>
    </Carousel>
  );
}

export default App;
