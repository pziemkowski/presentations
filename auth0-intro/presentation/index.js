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
  Anim,
  Image,
  CodePane,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme({
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quarternary: '#CECECE'
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
});

const animProps = {
  order: 1,
  fromStyle: { opacity: 0 },
  toStyle: [{ opacity: 1 }],
  easing: 'quadInOut',
  transitionDuration: 250
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Auth0
          </Heading>

          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Identity as a service
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={4} fit caps lineHeight={1} textColor="primary">
            Why do we need a 3rd party service for this?
          </Heading>

          <Anim {...animProps}>
            <Heading margin="40px 0 0" size={4} fit caps lineHeight={1} textColor="tertiary">
              Authentication is hard to get right
            </Heading>
          </Anim>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} caps lineHeight={1} textColor="tertiary">
            How often do you treat those as too expensive to implement?
          </Heading>

          <List textColor="quarternary" size={6}>
            <Anim {...animProps}><ListItem>OAuth 2.0</ListItem></Anim>
            <Anim {...animProps}><ListItem>Rate limiting for each user / IP</ListItem></Anim>
            <Anim {...animProps}><ListItem>Passwordless authentication</ListItem></Anim>
            <Anim {...animProps}><ListItem>Single Sign On</ListItem></Anim>
            <Anim {...animProps}><ListItem>Multifactor Authentication</ListItem></Anim>
            <Anim {...animProps}><ListItem>Forced password reset</ListItem></Anim>
            <Anim {...animProps}><ListItem>Blocking suspicious IPs</ListItem></Anim>
            <Anim {...animProps}><ListItem>Analytics</ListItem></Anim>
            <Anim {...animProps}><ListItem>Monitor public data breaches of other systems</ListItem></Anim>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} caps lineHeight={1} textColor="tertiary">
            How do you know that your system won't be hacked?
          </Heading>

          <Heading size={6} lineHeight={1} textColor="primary">
            Are you better then those big players?
          </Heading>

          <List textColor="quarternary">
            <ListItem>Equifax</ListItem>
            <ListItem>Yahoo</ListItem>
            <ListItem>Adobe</ListItem>
            <ListItem>Sony</ListItem>
          </List>

          <Anim {...animProps}>
            <Text margin="10px 0 0" textColor="primary" size={6}>
              Trust your users' passwords in someone who specialises in security.
            </Text>
          </Anim>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} caps lineHeight={1} textColor="tertiary">
            How does it work?
          </Heading>

          <Image src={require('../assets/authz-code-flow.png')} />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} caps lineHeight={1} textColor="tertiary">
            Show me the code
          </Heading>

          <Text margin="10px 0 0" textColor="primary" size={6}>
            The stack:
          </Text>

          <List textColor="quarternary">
            <ListItem>django</ListItem>
            <ListItem>social-auth-app-django</ListItem>
          </List>
        </Slide>

        <CodeSlide
          transition={['fade']}
          lang="python"
          code={require('raw-loader!../assets/configuration.py')}
          ranges={[
            { loc: [2, 5], title: 'Configure an auth backend' },
          ]} />

        <CodeSlide
          transition={['fade']}
          lang="python"
          code={require('raw-loader!../assets/auth_backend.py')}
          ranges={[
            { loc: [9, 16], note: 'Regular OAuth backend' },
            { loc: [17, 19] },
            { loc: [20, 22] },
            { loc: [36, 38] },
            { loc: [39, 41] },
            { loc: [45, 60] },
            { loc: [46, 52] },
            { loc: [53, 60] },
            { loc: [61, 63] },
          ]} />


        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} caps lineHeight={1} textColor="tertiary">
            Live example!
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} caps lineHeight={1} textColor="tertiary">
            Thank you!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
