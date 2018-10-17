import React from "react";
import { Container, Tabs, Tab, Text } from "native-base";
import { ScrollableTab } from "../ScrollableTabBar";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Scrollable Tabs"
  };

  render() {
    return (
      <Container>
        <Tabs
          initialPage={2}
          renderTabBar={() => <ScrollableTab initialPage={2} />}
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
          <Tab heading="More1">
            <Text>page 4</Text>
          </Tab>
          <Tab heading="More2">
            <Text>page 4</Text>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
