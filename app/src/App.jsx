import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./Compnent/SearchResult/SearchResult";

export const BASE_URL = "http://localhost:9000";


const App = () => {

  const [data, setData] = useState(null);
  const [filteredData, setfilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState (null);
    const [selectedBtn, setSelectedBtn] = useState("all");


  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const json = await response.json();
        setData(json);
        setfilteredData(json);
      } catch (error) {
        setError("Unable to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchFoodData();
  }, []);

  console.log(data);

  const searchFood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);
    if (searchValue === ""){
      setfilteredData(null);
    }
    const filter = data?.filter ((food) => 
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setfilteredData(filter);
  }
  const filterFood = (type) => {
    if (type === "all") {
      setfilteredData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setfilteredData(filter);
    setSelectedBtn(type);
  };


  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  

  return (
    <>
    <Container>
      <TopContainer>
        <div>
          <img src="public/logo.svg" alt="logo" />
        </div>
        <div className="search">
          <input onChange={searchFood} placeholder="Search Food" />
        </div>
      </TopContainer>
      
      <FilterContainer>
        <button onClick={() => filterFood("all")}>All</button>
        <button onClick={() => filterFood("breakfast")}>Breakfast</button>
        <button onClick={() => filterFood("lunch")}>Lunch</button>
        <button onClick={() => filterFood("dinner")}>Dinner</button>
      </FilterContainer>
    </Container>
    <SearchResult data={filteredData} />
    </>
    
  );
};

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopContainer = styled.div`
  height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
  @media (0 < width < 800px) {
    flex-direction: column;
    height: 120px;
    justify-content: center;
    align-items: center;
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
      display: flex;
      margin-top: 6px;
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
  button {
    background: #ff4343;
    border-radius: 5px;
    padding: 6px 12px;
    border: none;
    color: white;
  }
  button:hover{
    cursor: pointer;
    background: #e12c2c;
    transform: scale(1.1);
  }
`;



