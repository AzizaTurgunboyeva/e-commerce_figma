import styled from "styled-components";
import { colors } from "@/styles/theme";

export const CatalogTitle = styled.div`
max-width: 1200px;
  margin: 40px 0;

  .catalog-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    h2 {
      margin: 0;
      font-size: 24px;
      font-family: "Roboto", sans-serif;
      font-weight: 700;
      color: ${colors.main};
    }

    .all-catalog {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid ${colors.main};
      border-radius: 50px;
      cursor: pointer;

      p {
        font-size: 16px;
        color: #333;
      }
      img {
        width: 16px;
        height: 16px;
        object-fit: contain;
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 20px;
    .catalog-title {
      display: contents;
    }

    .catalog-title h2 {
      order: 1;
      text-align: center;
      margin-bottom: 20px;
    }

    .all-catalog {
      width: 100%;
      order: 3;
      margin-top: 40px;
      align-self: center;
    }
  }
`;

export const CatalogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  
  @media (max-width: 768px) {
    order: 2; 
    grid-template-columns: repeat(2, 1fr);
  }

  .catalog-grid {
    background-color: #fff;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    padding: 30px 40px 50px 30px;
    text-align: left;
    cursor: pointer;

    .grid-img {
      background-color: ${colors.main};
      border-radius: 10px;
      padding: 10px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 40px;

      img {
        width: 40px;
        height: 40px;
        object-fit: contain;
      }
    }
    .title {
      p {
        margin: 0.25rem 0;
        &:first-child {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #333;
        }
        &:last-child {
          font-size: 0.875rem;
          color: #777;
        }
      }
    }

    @media (max-width: 768px) {
      padding: 20px;
      .grid-img {
        margin-bottom: 30px;
      }
    }
  }
`;
