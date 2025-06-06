import React from "react";
import styled from "styled-components";
import { BASE_URL, Container } from "../../App";

const SearchResult = ({ data }) => {
  return (
    <FoodCardContainer>
      <Container>
      <FoodCards>
        {
          data?.map(({ name, image, text, price }) => (
            <FoodCard key={name}>
              <div className="food-image">
                <img src={BASE_URL + image}/>
              </div>
              <div className="food-info">
                <div className="info">
                  <h3>{name}</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <button>${price.toFixed(2)}</button>
              </div>
            </FoodCard>
          ) )
        }
      </FoodCards>
      </Container>
    </FoodCardContainer>
  );
};

export default SearchResult;

const FoodCardContainer = styled.section`
  min-height: calc(110vh - 300px);
  background-image: url("/bg.png");
  background-size: cover;
`;

const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;

const FoodCard = styled.div`
  width: 350px;
  height: 157px;
  border: 0.66px solid;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;

  display: flex;
  padding: 8px;

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    h3 {
      margin-top: 8px;
      font-size: 12px;
      font-weight: 500;
    }
    p {
      margin-top: 6px;
      font-size: 18px;
    }
    button {
      font-size: 12px;
    }
  }
  button {
    background: #ff4343;
    border-radius: 5px;
    padding: 6px 12px;
    border: none;
    color: white;
    margin-top: 28px;
    margin-left: 110px;

    transition: background-color 0.3 ease;
  }
  button:hover{
    cursor: pointer;
    background: #e12c2c;
    transform: scale(1.1);
  }
`;

