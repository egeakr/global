import React from 'react';
import "./footer.css";
function Footer() {
    return (
        <footer>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,0L40,16C80,32,160,64,240,106.7C320,149,400,203,480,213.3C560,224,640,192,720,154.7C800,117,880,75,960,80C1040,85,1120,139,1200,165.3C1280,192,1360,192,1400,192L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
            <div className="text col-md-7 col-lg-8 text-center text-md-start">
                <div className="text2 -decoration-color: rgb(255, 255, 255);">
                    © 2023 Global Tekstil.
                </div>
                <div className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d24084.634561062874!2d28.807011000000003!3d41.01258!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAwJzQ1LjMiTiAyOMKwNDgnMjUuMiJF!5e0!3m2!1str!2sus!4v1701410441085!5m2!1str!2sus" style={{width:'600',height:'450',border:0}}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='iletişim_bilgileri'>
                    <ul>
                        <li><p>Tevfik Bey Mah. Çınaryolu Keskin Sokak No:42</p></li>
                        <li><p>Sefaköy/İSTANBUL/TÜRKİYE</p></li>
                        <li><p>TEL:+90 212 601 01 85</p></li>
                        <li><p>FAX:+90 212 601 00 51</p></li>
                        <li><a href="https://outlook.live.com/">info@globaltextile.com.tr</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
export default Footer;