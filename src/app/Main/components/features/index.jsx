import { Fragment, useState } from "react";
import star from "../../../../assets/images/features-card/star.png";
import dolor from "../../../../assets/images/features-card/dollor.png";
import car from "../../../../assets/images/features-card/car.png";
import assorsiment from "../../../../assets/images/features-card/assorsiment.png";
import vector2 from "../../../../assets/images/catalog/icons/vector2.png";
import { CatalogWrapper } from "../catalog/Catalog.style";
import { CatalogTitle,CatalogContainer } from "./Feature.style";
function FeatureSection() {
  const cards = [
    {
      icon: star,
      title: "Только проверенные бренды",
      p: "Бренды, проверенные временем и качеством",
    },
    {
      icon: dolor,
      title: "Самые низкие цены",
      p: "Ниже не будет нигде",
    },
    {
      icon: car,
      title: "Быстрая доствка",
      p: "Доставляем по всей РФ за 1-10 дней",
    },
    {
      icon: assorsiment,
      title: "Большой ассортимент",
      p: "Более 1000 товаров",
    },
  ];
  return (
    <CatalogWrapper>
      <CatalogTitle>
        <div className="catalog-title">
          <h2>Почему NORNLIGHT?</h2>
          <div className="all-catalog">
            <p>О компании</p>
            <img src={vector2} alt="icon" />
          </div>
        </div>

        <CatalogContainer>
          {cards.map((cardItem) => (
            <div className="catalog-grid" key={cardItem.id}>
              <div className="grid-img">
                <img src={cardItem.icon} alt={cardItem.title} />
              </div>
              <div className="title">
                <p>{cardItem.title}</p>
                <p>{cardItem.p}</p>
              </div>
            </div>
          ))}
        </CatalogContainer>
      </CatalogTitle>
    </CatalogWrapper>
  );
}

export default FeatureSection;
