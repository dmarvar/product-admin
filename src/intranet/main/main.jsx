import React from "react";
import styled from "styled-components";
import Box from "../../common/box";
import NotificationList from "./notificationList";
import Hits from "./hits";
import Performance from "./performance";
import Storage from "./storage";
import Orders from "./orders";

//REDUX
import { connect } from "react-redux";

const Content = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  & > div {
    width: 49%;
  }
  & > div:last-child {
    width: 100%;
  }
  @media screen and (max-width: 720px) {
    & > div {
      width: 100%;
    }
  }
`;

function main({ storeData }) {
  console.log(storeData);
  return (
    <div>
      <h2>Dashboard</h2>
      <Content>
        <Box title="Lastest Hits">
          <Hits data={storeData.dasbhoardPage.latestHits} />
        </Box>
        <Box title="Performance">
          <Performance data={storeData.dasbhoardPage.performance} />
        </Box>
        <Box title="Storage Information">
          <Storage data={storeData.dasbhoardPage.performance} />
        </Box>
        <Box title="Notification List">
          <NotificationList
            data={storeData.dasbhoardPage.notifications}
          ></NotificationList>
        </Box>
        <Box title="Orders List">
          <Orders data={storeData.dasbhoardPage.orders} />
        </Box>
      </Content>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    storeData: state
  };
};

export default connect(mapStateToProps)(main);
