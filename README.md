# NativeBase-Tabs-BugFix

This fixed native base tabs initialPage property issue : https://github.com/GeekyAnts/NativeBase/issues/1010

##
How to patch?

You must pass DefaultTabBar or ScrollableTabBar class to your Tab by renderTab property, for example

```js
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
```
or 

```js
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
```
Now, your initialPage works.
