import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



// 이 부분이 tab을 누루면 바뀌는 부분 따로 파일로 하지말고 한 파일 내에서 바꾸기
function TabPanel(props ) {

    //props 쓰는법 확인
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  
  export default function SimpleTabs() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (

      // Container에는 display, flex-flow, justify-content 등의 속성을 사용할 수 있으며,
      // Items에는 order, flex, align-self 등의 속성을 사용할 수 있습니다.
      <div style={{ display: 'flex' ,justifyContent: 'center' ,flexDirection: 'column',  alignItems: 'center'}}>
        <div>
          <Tabs value={value} style={{}} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
          </div>
        <div style={{}}>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        </div>
      </div>
    );
  }

