import React from "react";
import { Layout, Header } from "./Components";
import styled from "@emotion/styled";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const UserDetails = props => {
  console.log(props.location.state);
  const user = props.location.state;
  return (
    <Layout>
      <Header>User Details</Header>
      <CardContainer>
        <Title>First Name : Last Name</Title>
        <Content>
          {user.first_name} {user.last_name}
        </Content>
        <Title>Age</Title>
        <Content>{user.age}</Content>
        <Title>Company Name</Title>
        <Content>{user.company_name}</Content>
        <Title>Email</Title>
        <Content>{user.email}</Content>
        <Title>City : State</Title>
        <Content>
          {user.city}, {user.state}
        </Content>
        <Title>Zip Code</Title>
        <Content>{user.zip}</Content>
        <Title>WebSite</Title>
        <Content>
          <a href={`${user.web}`}>{user.web}</a>
        </Content>
        <Button onClick={() => window.history.back()}>
          <IoIosArrowDropleftCircle size="80px" />
        </Button>
      </CardContainer>
    </Layout>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 7.5rem);
  margin: 2rem;
  background: #fff;
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: capitalize;
`;

const Content = styled.span`
  font-size: 0.775rem;
  color: #444;
`;

const Button = styled.button`
  margin-top: 50px;
  border: none;
  cursor: pointer;
  background-color: #fff;
`;

export default UserDetails;
