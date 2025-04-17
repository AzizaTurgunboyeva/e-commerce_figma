import React from "react";
import { CatalogWrapper, DesktopGrid, MobileSwiper } from "./Catalog.style";
import vector2 from "../../../../assets/images/catalog/icons/vector2.png";
import bra from "../../../../assets/images/catalog/images/bra.png";
import lyustri from "../../../../assets/images/catalog/images/lyustri.png";
import nastolniyLampa from "../../../../assets/images/catalog/images/nastolniyLampa.png";
import spoti from "../../../../assets/images/catalog/images/spoti.png";
import svetelnik from "../../../../assets/images/catalog/images/svetilnik.png";
import torsher from "../../../../assets/images/catalog/images/torsher.png";
import { SwiperSlide } from "swiper/react";
import { Pagination, Grid } from "swiper/modules";

export default function FurnitureCatalogSection() {
  const catalog = [
    { id: 1, title: "Люстры", sum: "От 540₽", img: lyustri },
    { id: 2, title: "Светильники", sum: "От 540₽", img: svetelnik },
    { id: 3, title: "Бра", sum: "От 540₽", img: bra },
    { id: 4, title: "Торшеры", sum: "От 540₽", img: torsher },
    { id: 5, title: "Настольные лампы", sum: "От 540₽", img: nastolniyLampa },
    { id: 6, title: "Споты", sum: "От 540₽", img: spoti },
  ];

  return (
    <CatalogWrapper>
      {/* Header (only title + desktop “all catalog”) */}
      <div className="catalog-header">
        <h2>Каталог</h2>
        <div className="all-catalog desktop-only">
          <p>Весь каталог</p>
          <img src={vector2} alt="icon" />
        </div>
      </div>

      {/* Desktop Grid */}
      <DesktopGrid>
        {catalog.map(({ id, title, sum, img }) => (
          <div className="card" key={id}>
            <div className="card-left">
              <p>{title}</p>
              <div className="card-sum">
                <p>{sum}</p>
                <img src={vector2} alt="vector icon" />
              </div>
            </div>
            <div className="card-right">
              <img src={img} alt={title} />
            </div>
          </div>
        ))}
      </DesktopGrid>

      {/* Mobile Swiper */}
      <MobileSwiper
        modules={[Pagination, Grid]}
        grid={{ rows: 2, fill: "row" }}
        slidesPerView={2}
        spaceBetween={12}
        pagination={{ clickable: true }}
      >
 
           {catalog.map(({ id, title, sum, img }) => (
          <SwiperSlide key={id}>
            <div className="card">
              <div className="card-left">
                <p>{title}</p>
                <div className="card-sum">
                  <p>{sum}</p>
                  <img src={vector2} alt="vector icon" />
                </div>
              </div>
              <div className="card-right">
                <img src={img} alt={title} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      
      </MobileSwiper>

      {/* Mobile “Весь каталог” link below cards */}
      <div className="all-catalog mobile-only">
        <p>Весь каталог</p>
        <img src={vector2} alt="icon" />
      </div>
    </CatalogWrapper>
  );
}
