/* eslint import/no-webpack-loader-syntax: off */
// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Layout,
  Fill,
  Fit,
  Appear,
  Code,
  CodePane
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import yoga from 'yoga-layout';

const rootNode = yoga.Node.create();

rootNode.setPadding(yoga.EDGE_TOP, 10);
rootNode.setPadding(yoga.EDGE_BOTTOM, 10);

rootNode.setHeight(100);
rootNode.setWidth(100);

rootNode.setDisplay(yoga.DISPLAY_FLEX);
rootNode.setFlexWrap(yoga.WRAP_NO_WRAP);
rootNode.setFlexDirection(yoga.FLEX_DIRECTION_COLUMN);

const rows = [];
for (let i = 0; i < 10; i += 1) {
  const rowNode = yoga.Node.create();
  rowNode.setFlexGrow(1);
  rootNode.insertChild(rowNode, i);
  rows.push(rowNode);
}

rootNode.calculateLayout();

rows.forEach((row, i) => {
  console.log(`Row ${i} y: ${row.getComputedTop()}, w: ${row.getComputedHeight()}, h: ${row.getComputedWidth()} `);
});

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Text margin="20px 0" textColor="tertiary" textSize={1} fit bold>
            PIXI.js – Canvas – 60 fps
          </Text>

          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Teamdeck – Analiza technik optymalizacji
          </Heading>

          <Text textColor="tertiary" textAlign="right" margin="50px 0 0" textSize={18}>
            – Patryk Ziemkowski / Head of frontend development @ Apptension
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Image src={require('./assets/teamdeck-logo.png')} />

          <Text size={6} textColor="primary" margin="50px 0">
            A complete resource management solution
          </Text>

          <video src={require('./assets/cs_teamdeck_1_29-2.mp4')} width={920} autoPlay loop />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Text size={6} textColor="primary" margin="50px 0">
            New beginnings
          </Text>

          <video src={require('./assets/new_calendar.mp4')} width={920} autoPlay loop />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Text size={6} textColor="primary" margin="50px 0">
            What do we need?
          </Text>

          <List textColor="primary">
            <ListItem margin="10px 0"><Text textColor="tertiary" style={{ display: 'inline' }}>60 FPS</Text> for all
              Canvas
              updates</ListItem>
            <ListItem margin="10px 0">Full <Text textColor="tertiary"
                                                 style={{ display: 'inline' }}>Interactivity</Text> of UI
              elements</ListItem>
            <ListItem margin="10px 0"><Text textColor="tertiary" style={{ display: 'inline' }}>Relative
              positioning</Text> of UI
              elements</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Text size={6} textColor="primary" margin="50px 0">
            <Text textColor="tertiary" style={{ display: 'inline' }}>Culling</Text> - Reduce the number of elements in a
            render tree
          </Text>

          <Image src={require('./assets/culling.png')} width={920} />
        </Slide>

        <CodeSlide
          transition={['fade']}
          lang="js"
          code={require('./assets/cullingSimple').code}
          ranges={[
            { loc: [0, 0], title: 'Simplest possible culling' },
            { loc: [4, 8], note: 'Let\'s create a PIXI app' },
            { loc: [10, 11] },
            { loc: [11, 12] },
            { loc: [13, 15] },
            { loc: [16, 17] },
            { loc: [19, 20], note: 'Clear canvas' },
            { loc: [21, 27], note: 'Add visible elements to canvas' },
            { loc: [28, 34] },
            { loc: [21, 22], note: 'Oops, we\'re iterating over all objects!' },
          ]} />

        <Slide transition={['fade']} bgColor="secondary">
          <Text size={6} textColor="primary" margin="50px 0">
            <Text textColor="tertiary" style={{ display: 'inline' }}>Spatial hashing</Text> – divide space into buckets
            and quickly find potential collisions
          </Text>

          <Image src={require('./assets/culling.png')} />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Text size={6} textColor="primary" margin="50px 0">
            <Text textColor="tertiary" style={{ display: 'inline' }}>Spatial hashing</Text>
          </Text>

          <Image src={require('./assets/spatialHash.png')} />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Text size={6} textColor="primary" margin="50px 0">
            <Text textColor="tertiary" style={{ display: 'inline' }}>Spatial hashing</Text>
          </Text>

          <Image src={require('./assets/spatialHashKernel.png')} />
        </Slide>

        <CodeSlide
          transition={['fade']}
          lang="js"
          code={require('./assets/spatialHashing').code}
          ranges={[
            { loc: [0, 0], title: 'npm install spatial-hash' },
            { loc: [1, 8], note: 'Create new spatial hash object' },
            { loc: [9, 14] },
            { loc: [15, 24], note: 'Insert element to a hash' },
            { loc: [26, 27], note: 'Clear canvas' },
            { loc: [28, 34], note: 'Retrieve visible objects' },
            { loc: [35, 39], note: 'Iterate over and render only visible objects' },
          ]} />

        <Slide transition={['fade']} bgColor="secondary">
          <Text size={6} textColor="primary" margin="50px 0">
            <Text textColor="tertiary" style={{ display: 'inline' }}>Object pooling</Text> - Create in advance
            and reuse expensive objects
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Text size={6} textColor="primary" margin="50px 0">
            <Text textColor="tertiary" style={{ display: 'inline' }}>Object pooling</Text>
          </Text>

          <Image src={require('./assets/pooling.png')} />
        </Slide>

        <CodeSlide
          transition={['fade']}
          lang="js"
          code={require('./assets/objectPooling').code}
          ranges={[
            { loc: [3, 4], note: 'Let\'s define an object pool registry' },
            { loc: [4, 5] },
            { loc: [6, 7] },
            { loc: [7, 11], note: 'Get instance if it exists' },
            { loc: [12, 13], note: 'Create new instance' },
            { loc: [15, 18], note: 'Return instance to the pool' },
            { loc: [20, 21] },
            { loc: [22, 28] },
            { loc: [29, 39] },
            { loc: [45, 51] },
            { loc: [51, 59], note: 'Retrieve instance and set properties' },
            { loc: [40, 44], note: 'Release old instances' },
          ]} />

        <Slide transition={['fade']} bgColor="secondary">
          <Text size={6} textColor="primary" margin="50px 0">
            <Text textColor="tertiary" style={{ display: 'inline' }}>Relative positioning</Text> - how do I do it on
            Canvas?
          </Text>

          <Appear>
            <Code textColor="primary">
              npm install yoga-layout
            </Code>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" align="center center">
          <Text size={6} textColor="primary" margin="50px 0">
            <Text textColor="tertiary" style={{ display: 'inline' }}>YOGA</Text> by Facebook
          </Text>

          <video src={require('./assets/yoga.mp4')} height={500} autoPlay loop />
        </Slide>

        <CodeSlide
          transition={['fade']}
          lang="js"
          code={require('./assets/yogaLayout').code}
          ranges={[
            { loc: [1, 2] },
            { loc: [3, 4], note: 'Layout is a tree, same as DOM' },
            { loc: [5, 7] },
            { loc: [8, 10] },
            { loc: [11, 16], note: 'Is this... flex?' },
            { loc: [18, 24]},
            { loc: [19, 20]},
            { loc: [20, 21]},
            { loc: [21, 22]},
            { loc: [22, 23]},
            { loc: [25, 26], note: 'The tree is ready, let\'s calculate the layout'},
            { loc: [27, 30]},
            { loc: [32, 33]},
            { loc: [33, 34]},
            { loc: [34, 35]},
            { loc: [32, 42]},
          ]} />
      </Deck>
    );
  }
}
