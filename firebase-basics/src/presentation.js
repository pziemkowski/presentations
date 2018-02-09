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
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import Terminal from 'spectacle-terminal';
// Import theme
import createTheme from 'spectacle/lib/themes/default';

import servicesImage from './assets/services.png';
import cloudMessagingImage from './assets/cloudMessaging.png';
import functionsProject from './assets/functionsProject.png';

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
        transition={['zoom', 'fade']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Firebase
          </Heading>

          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Devtalk #123123124 – kto by to pamiętał?
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={6} textColor="tertiary" caps>
            Firebase
          </Heading>

          <Text size={6} textColor="primary">
            Firebase is a mobile and web application development platform that consists of multiple different services
            that provide virtually a complete environment to produce a serverless app.
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="tertiary" caps>
            Firebase services
          </Heading>

          <Image src={servicesImage} />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Text size={6} textColor="tertiary">
            yarn add firebase
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="tertiary" caps>
            Realtime database
          </Heading>

          <Text size={6} textColor="primary">
            Store and sync data with NoSQL cloud database. Data is synced across all clients in realtime, and remains
            available when your app goes offline.
          </Text>
        </Slide>

        <CodeSlide
          transition={['fade']}
          lang="js"
          code={require('raw-loader!./assets/firebaseSetup.js')}
          ranges={[
            { loc: [0, 1], title: 'Initialize connection' },
            { loc: [2, 8], note: 'You can download this config object from firebase console' },
            // ...
          ]} />

        <CodeSlide
          transition={['fade']}
          lang="json"
          code={require('raw-loader!./assets/dbStructure.json')}
          ranges={[
            { loc: [0, 0], title: 'How to structure your data?' },
            { loc: [1, 33], note: 'Data is kept in a JSON tree nestable 32 times' },
            { loc: [2, 18], },
            { loc: [2, 3], },
            { loc: [18, 33], },
            { loc: [19, 20], },
          ]} />

        <CodeSlide
          transition={['fade']}
          lang="json"
          code={require('raw-loader!./assets/dbDenormalization.json')}
          ranges={[
            { loc: [0, 0], title: 'Denormalize your data' },
            { loc: [2, 10] },
            { loc: [6, 9], note: 'Lists are not supported' },
            { loc: [28, 36], },
            { loc: [31, 35], note: 'Data is often multiplied to optimize selections' },
            { loc: [43, 47], note: 'Empty keys are removed' },
          ]} />

        <CodeSlide
          transition={['fade']}
          lang="json"
          code={require('raw-loader!./assets/dbFlatten.json')}
          ranges={[
            { loc: [0, 0], title: 'Keep it flat', note: 'as much as possible' },
            { loc: [27, 41], },
            { loc: [41, 50], },
            { loc: [42, 46], },
          ]} />

        <CodeSlide
          transition={['fade']}
          lang="js"
          code={require('raw-loader!./assets/dbWrite.js')}
          ranges={[
            { loc: [0, 0], title: 'Write data to DB' },
            { loc: [0, 3], },
            { loc: [4, 5], },
            { loc: [6, 11], },
            { loc: [12, 15], },
            { loc: [16, 21], },
            { loc: [22, 33], },
          ]} />

        <CodeSlide
          transition={['fade']}
          lang="js"
          code={require('raw-loader!./assets/dbRead.js')}
          ranges={[
            { loc: [0, 0], title: 'Read data from DB' },
            { loc: [4, 5], note: 'Assign ref to a constant' },
            { loc: [6, 7], note: 'Start listening for the value changes' },
            { loc: [6, 13], },
            { loc: [14, 15], note: 'Retrieve the value only once' },
            { loc: [14, 22], },
            { loc: [25, 26], note: 'You can add a listener that will fire when a new child is added' },
            { loc: [27, 28], note: 'or removed' },
            { loc: [29, 30], note: 'or changed' },
          ]} />

        <CodeSlide
          transition={['fade']}
          lang="js"
          code={require('raw-loader!./assets/dbRules.json')}
          ranges={[
            { loc: [1, 2], title: 'Database rules' },
            { loc: [2, 6], note: 'They allow you to control the access to each object' },
            { loc: [6, 10], note: 'You can deny access to read or write' },
          ]} />

        <CodeSlide
          transition={['fade']}
          lang="js"
          code={require('raw-loader!./assets/secureDbRules.json')}
          ranges={[
            { loc: [0, 0], title: 'Secure your user\'s data' },
            { loc: [2, 9], note: 'Limit modifications only to specific users!' },
            { loc: [4, 5], note: 'Disallow by default' },
            { loc: [6, 7], note: 'Allow when authenticated user matches the key' },
            { loc: [5, 6], note: 'You can define scoped variables' },
          ]} />

        <CodeSlide
          transition={['fade']}
          lang="js"
          code={require('raw-loader!./assets/validateDbRules.json')}
          ranges={[
            { loc: [0, 0], title: 'Validate your data' },
            { loc: [2, 18], },
            { loc: [8, 9], note: 'Check types and other constraints like length' },
            { loc: [14, 15], note: 'You can also match with regular expressions' },
          ]} />

        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="tertiary" caps>
            Authentication
          </Heading>

          <Text size={6} textColor="primary">
            Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to
            authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated
            identity providers like Google, Facebook and Twitter, and more.
          </Text>
        </Slide>

        <CodeSlide
          transition={['fade']}
          lang="js"
          code={require('raw-loader!./assets/authEmailPassword.js')}
          ranges={[
            { loc: [0, 0], title: 'Email and password' },
            { loc: [5, 6], note: 'Create an auth instance' },
            { loc: [7, 8], note: 'You can create a new user' },
            { loc: [14, 15], note: 'You can log in the user' },
            { loc: [21, 22], note: 'You can also log out the user' },
          ]} />

        <CodeSlide
          transition={['fade']}
          lang="js"
          code={require('raw-loader!./assets/authGoogle.js')}
          ranges={[
            { loc: [0, 0], title: 'Google authentication' },
            { loc: [4, 5], note: 'Create a provider instance' },
            { loc: [5, 6], note: 'Add a scope' },
            { loc: [7, 8], note: 'Open the popup' },
            { loc: [9, 12], note: 'You get the requested user data and a token' },
          ]} />

        <CodeSlide
          transition={['fade']}
          lang="js"
          code={require('raw-loader!./assets/detectAuthState.js')}
          ranges={[
            { loc: [0, 0], title: 'Listen for auth changes' },
            { loc: [4, 5], note: 'This function will be called every time user logs in or out' },
            { loc: [5, 10], note: 'This function is also called at least once when you initialize the app' },
          ]} />

        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="tertiary" caps>
            Cloud Messaging
          </Heading>

          <Text size={6} textColor="primary">
            Firebase Cloud Messaging (FCM) is a cross-platform messaging solution that lets you reliably deliver
            messages at no cost.
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="tertiary" caps>
            Architecture
          </Heading>

          <Image src={cloudMessagingImage} height={450} />
        </Slide>

        <CodeSlide
          transition={['fade']}
          lang="js"
          code={require('raw-loader!./assets/fcmSetup.js')}
          ranges={[
            { loc: [0, 0], title: 'Set up notifications' },
            { loc: [2, 3], note: 'Get messaging instance' },
            { loc: [4, 5], note: 'Ask user for permission to send notifications' },
            { loc: [11, 12], note: 'Retrieve token that identifies this device' },
            { loc: [13, 14], note: 'Send your token to backend so it can send notifications' },
          ]} />

        <CodeSlide
          transition={['fade']}
          lang="js"
          code={require('raw-loader!./assets/fcmReceive.js')}
          ranges={[
            { loc: [0, 0], title: 'Receive notifications' },
            { loc: [4, 5], note: 'Start listening for notifications' },
          ]} />

        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="tertiary" caps>
            Cloud Functions
          </Heading>

          <Text size={6} textColor="primary">
            Cloud Functions for Firebase lets you automatically run backend code in response to events triggered by
            Firebase features and HTTPS requests. Your code is stored in Google's cloud and runs in a managed
            environment. There's no need to manage and scale your own servers.
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="tertiary" caps>
            Project structure
          </Heading>

          <Image src={functionsProject} height={450} />
        </Slide>

        <CodeSlide
          transition={['fade']}
          lang="js"
          code={require('raw-loader!./assets/functionsSetup.js')}
          ranges={[
            { loc: [0, 0], title: 'Setup functions' },
            { loc: [0, 4], note: 'Initialize app as you did on client side' },
            { loc: [5, 6], note: 'Define a name and trigger for your function' },
            { loc: [6, 11], note: 'Implement body of your function' },
            { loc: [6, 7], note: 'Grab a query parameter' },
            { loc: [8, 9], note: 'Make some changes in a realtime DB' },
            { loc: [9, 10], note: 'Return some response' },
            { loc: [0, 11], note: 'This is a regular express app!' },
          ]} />

        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={2} caps fit textColor="tertiary">Deploy your functions</Heading>
          <Terminal title="1. elijahm@elijahm: ~(zsh)" output={[
            'firebase deploy --only functions',
            <div style={{ color: '#33B969' }}>
              Function URL (addMessage): https://us-central1-MY_PROJECT.cloudfunctions.net/addMessage
            </div>,
          ]}
          />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Firebase is really nice and you should try it out</Quote>
            <Cite>Me</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
