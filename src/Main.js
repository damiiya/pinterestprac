import "./main.css";
import React from "react";
import styled from "styled-components";
import Pin from "./Pin";

const Main = (props) => {
  let { pins } = props;

  return (
    <Wrapper>
      <Container className="main__container">
        {pins.map((pin, index) => {
          let { urls } = pin;
          return <Pin key={index} urls={urls} />;
        })}
      </Container>
    </Wrapper>

        // <div>
    //   {postList.map((a) => (
    //     <>
    //       <div>{a.title}</div>
    //       <div>{a.content}</div>
    //       <div>{a.imageUrl}</div>
    //     </>
    //   ))}
    //   <button onClick={toUpload}>업로드 이동</button>
    // </div>
  );
};

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 15px;
  justify-content: center;
`;

const Container = styled.div`
  margin: 0 auto;
  height: 100%;
  background-color: white;
`;

export default Main;
