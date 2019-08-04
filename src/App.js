import React from 'react';

import './App.css';
import TitlebarGridList from './Projects';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <AppBar position="sticky">
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Proyectos" {...a11yProps(0)} />
          <Tab label="Hora" {...a11yProps(1)} />
          <Tab label="Bienvenida" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
      <TabPanel value={value} index={0} dir={theme.direction}> */}
        <TitlebarGridList />
      {/* </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Clock />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <img src="https://media.tenor.com/images/2e2f908309dd8a576d1193506c16f147/tenor.gif" className="App-logo" alt="logo" />
          <p>
            Mir&aacute;, tengo una p&aacute;gina.
          </p>
        </TabPanel>
      </SwipeableViews> */}
      </header>
    </div>
  );
}

export default App;
