import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  height: auto;
  margin: 20px auto;
  .modal{
    display: flex;
    height: 50px;
    width: 70%;
    align-items: center;
    justify-content: space-between;
    margin-left: 15px;
    gap: 10px;
  }
  .table{
    width: 100%;
    border-collapse: collapse;

    tr{
      height: 35px;
      font-size: 18px;
    }
    .id{
      text-align: center;
      padding: 0;
    }
    td{
      padding-left: 10px;
    }
  }
  .action{
    width: 250px;
  }
  .input{
      width: 200px;
      height: 30px;
      font-size: 17px;
      border-radius: 10px;
      border: 1px solid gray;
      padding-left: 10px;
    }
  h1{
    text-align: center;
  }
  .navbar{
    display: flex;
    height: 50px;
    background-color: white;
    width: 100%;
    box-sizing: border-box;
    padding: 0 15px;
    justify-content: space-between;
    align-items: center;
    select{
      width: 80px;
      height: 30px;
      font-size: 15px;
      border-radius: 10px;
      border: 1px solid gray;
      margin-left: 10px;
      padding-left: 5px;
      cursor: pointer;
    }
  }
`

export const Btn = styled.button`
  width: 100px;
  background-color: ${({backColor}) => backColor ? `${backColor}` : 'white'};
  height: 30px;
  color: ${(props) => props.color ? `${props.color}` : 'black'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  border-radius: 10px;
  border: 1px solid ${({borderColor}) => borderColor ? `${borderColor}` : 'black'};
  margin-left: 10px;
  cursor: pointer;
  :active{
    transform: scale(0.9);
  }
`

