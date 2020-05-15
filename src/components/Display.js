import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { render } from '@testing-library/react';
 
export default () => (
      <Tabs class="Tab">
      <TabList>
      <Tab >Title 1</Tab>
      <Tab >Title 2</Tab>
      <Tab >Title 3</Tab>
      </TabList>

      <TabPanel class="TabPanel">
      <h2>tab 1 content is showing here. </h2>
      </TabPanel >
      <TabPanel class="TabPanel">
      <h2>tab 2 content is showing here.</h2>
      </TabPanel>
      <TabPanel class="TabPanel">
      <h2>tab 3 content is showing here.</h2>
      </TabPanel>
      </Tabs>
)

