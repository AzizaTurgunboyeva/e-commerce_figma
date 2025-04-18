import styled from "styled-components";
import { colors } from "@/styles/theme";
import { SwiperSlide } from "swiper/react";

export const SliderWrapper = styled.div`
  margin-bottom: 100px;

  .swiper-pagination {
    right: 100px !important;
    left: auto;
    bottom: 40px !important;
    width: fit-content;
  }

  .my-bullet {
    background-color: red;
  }
  @media (max-width: 768px) {
    .swiper-pagination {
      right: auto !important;
      left: 50% !important;
      transform: translateX(-50%) !important;
      width: fit-content;
    }
  }
`;

export const SwiperItemWrapper = styled.div`
  background-color: ${colors.light};
  border-radius: 50px;
  width: 100%;
  max-width: 1700px;
  margin: 0 auto;

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .swiper-main-title {
      max-width: 500px;
    }
  }
  @media (max-width: 768px) {
    margin-top: 28px;
    padding: 4px;
    .swiper-main-title {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const SwriperSlideCustom = styled(SwiperSlide)`
  padding: 0 20px;
`;
