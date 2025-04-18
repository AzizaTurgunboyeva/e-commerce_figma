import styled from "styled-components";
import { Swiper } from "swiper/react";
import { colors } from "@/styles/theme";

export const CatalogWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  .catalog-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 16px;
    }

    h2 {
      font-size: 40px;
      font-family: "Roboto", sans-serif;
      font-weight: 700;
      color: ${colors.main};
      margin: 0;
    }
  }

  .all-catalog {
    display: flex;
    align-items: center;
    padding: 14px 48px;
    cursor: pointer;
    border: 1px solid rgb(61, 60, 60);
    border-radius: 50px;

    p {
      font-size: medium;
      font-family: "Roboto", sans-serif;
      font-weight: 200;
      color: ${colors.main};
      margin: 0;
    }

    img {
      margin-left: 8px;
      width: 16px;
      height: 16px;
      object-fit: contain;
    }

    &.desktop-only {
      @media (max-width: 768px) {
        display: none;
      }
    }

    &.mobile-only {
      display: none;

      @media (max-width: 768px) {
        display: flex;
        margin-top: 24px;
        justify-content: center;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        border-radius: 50px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        padding: 14px 48px;
      }
    }
  }

  .mobile-catalog-container {
    @media (min-width: 769px) {
      display: none;
    }
  }

  .swiper-pagination-custom {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;

    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      background: #d9d9d9;
      opacity: 1;
      margin: 0 4px;

      &.swiper-pagination-bullet-active {
        background: #000;
      }
    }
  }
`;

export const DesktopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 768px) {
    display: none;
  }

  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${colors.light};
    border-radius: 12px;
    padding: 20px;

    .card-left {
      p {
        font-size: 20px;
        font-weight: 500;
        font-family: "Roboto", sans-serif;
        margin-bottom: 32px;
        color: ${colors.main};
      }

      .card-sum {
        display: flex;
        align-items: center;
        margin-top: 127px;

        p {
          margin: 0;
          width: 85px;
          font-weight: 400;
          color: #444;
        }

        img {
          margin-left: 8px;
          width: 19px;
          height: 11px;
          object-fit: contain;
        }
      }
    }

    .card-right {
      img {
        max-width: 100%;
        height: auto;
        object-fit: contain;
      }
    }
  }
`;

export const MobileSwiper = styled(Swiper)`
  display: block;
  padding-bottom: 0;

  .swiper-wrapper {
    padding-bottom: 10px;
  }

  .swiper-slide {
    height: auto;
  }

  .card {
    display: flex;
    flex-direction: column;
    background: #f2f2f2;
    border-radius: 12px;
    padding:2px;
    overflow: hidden;

    .title {
      font-size: 20px;
      font-weight: 500;
      font-family: "Roboto", sans-serif;
      color: ${colors.main};
      text-align: left;
      padding: 20px 0px 10px 30px;
      margin: 0;
    }

    .image-container {
      display: flex;
      align-items: center;
      height: 140px;
      width: 100%;
    

      img {
        max-width: 100%;
        max-height: 100%;
        padding-left: 60px;
        object-fit: contain;
      }
    }

    .card-sum {
      display: flex;
      align-items: center;
      padding: 0px 0px 20px 30px;

      margin-top: auto;

      p {
        font-size: 16px;
        font-weight: 400;
        color: #444;
        margin: 0;
      }

      img {
        margin-left: 6px;
        width: 18px;
        height: 10px;
        object-fit: contain;
      }
    }
  }
`;
