import React from 'react'
// import "./section.scss"

const Section = () => {
  return (
    <>
      <div id="section" className="about">
        <div className="container">
          <div className="about_box">
          <h2 className="about_title">
                About Me
              </h2>
            <div className="about_esse">
              <div className="about_img">
              <img src="/public/coputer.png" alt=" bu yerda react rasmi bor" />
            </div>
              <div className="about_text_box">
              <p className="about_text">
                Men Frontend Developer, React, Redux, Sass, Zustand, HTML, CSS,
                JavaScript yaxshi bilim
                egasman. Qiziqtarli veb loyihalarni
                yaratishda o'zimizga ishlayman, sizning
                veb fikrlaringizni hayotga o'tkazishga
                yordam berishga tayyorman. ProWeb
                O'quv Markazida o'qigan vaqtimda,
                veb rivojlanishning turli asoslari
                haqida ko'p narsa o'rganib chiqdim
                va doimiy ravishda o'z bilimlarimi
                kengaytirishga harakat qilaman.
                Sairlar, restoranlar, biznes yoki
                kichik tadbirlar uchun veb-saytlar
                yaratish bo'lsa, men veb loyihalaringizni
                yaratish va tasavvurlaringizni amalga
                oshirishga tayyorman.
              </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Section
