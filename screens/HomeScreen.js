import React from "react";
import { Container, Tabs, Tab, Text } from "native-base";
import { DefaultTabBar } from "../DefaultTabBar";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Basic Tabs"
  };

  render() {
    return (
      <Container>
        <Tabs
          initialPage={2}
          renderTabBar={() => <DefaultTabBar initialPage={2} />}
        >
          <Tab heading="Favorites">
            <Text>page 1</Text>
          </Tab>
          <Tab heading="USDT">
            <Text>page 2</Text>
          </Tab>
          <Tab heading="BTC">
            <Text>page 3</Text>
          </Tab>
          <Tab heading="ETH">
            <Text>page 4</Text>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
