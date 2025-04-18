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
import { Pagination } from "swiper/modules";

export default function FurnitureCatalogSection() {
  const catalog = [
    { id: 1, title: "Люстры", sum: "От 540₽", img: lyustri },
    { id: 2, title: "Люстры", sum: "От 540₽", img: svetelnik }, // Updated title to match the image
    { id: 3, title: "Бра", sum: "От 540₽", img: bra },
    { id: 4, title: "Торшеры", sum: "От 540₽", img: torsher },
    { id: 5, title: "Настольные лампы", sum: "От 540₽", img: nastolniyLampa },
    { id: 6, title: "Споты", sum: "От 540₽", img: spoti },
  ];

  return (
    <CatalogWrapper>
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

      <div className="mobile-catalog-container">
        <MobileSwiper
          modules={[Pagination]}
          slidesPerView={1.9}
          spaceBetween={12}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
          }}
        >
          {catalog.map(({ id, title, sum, img }) => (
            <SwiperSlide key={id}>
              <div className="card">
                <p className="title">{title}</p>
                <div className="image-container">
                  <img src={img} alt={title} />
                </div>
                <div className="card-sum">
                  <p>{sum}</p>
                  <img src={vector2} alt="vector icon" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </MobileSwiper>

        <div className="swiper-pagination-custom"></div>

        <div className="all-catalog mobile-only">
          <p>Весь каталог</p>
          <img src={vector2} alt="icon" />
        </div>
      </div>
    </CatalogWrapper>
  );
}
