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
      /* stack title + desktop‑only link, remove gap */
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
        margin-top: 16px;
        justify-content: center;
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
  display: none;
  padding-bottom: 16px; /* for bullets */

  @media (max-width: 768px) {
    display: block;
  }

  .swiper-pagination-bullet {
    background: #000;
  }

  .card {
    display: flex;
    justify-content: center;
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
          margin: 6px;
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
        padding: 12px;
        object-fit: contain;
      }
    }
  }
`;
