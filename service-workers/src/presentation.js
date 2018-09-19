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
  Notes,
  Image,
  Link,
  CodePane,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const registeringExample = require('!raw-loader!./register.example'); // eslint-disable-line
const installExample = require('!raw-loader!./install.example'); // eslint-disable-line
const activateExample = require('!raw-loader!./activate.example'); // eslint-disable-line
const cacheDefineExample = require('!raw-loader!./cacheDefine.example'); // eslint-disable-line
const cacheFetchExample = require('!raw-loader!./cacheFetch.example'); // eslint-disable-line
const cacheUpdateExample = require('!raw-loader!./cacheUpdate.example'); // eslint-disable-line
const pushGetSubscribtionExample = require('!raw-loader!./pushGetSubscribtion.example'); // eslint-disable-line
const pushSubscribeExample = require('!raw-loader!./pushSubscribe.example'); // eslint-disable-line
const pushShowNotificationExample = require('!raw-loader!./pushShowNotification.example'); // eslint-disable-line
const listenPostMessageExample = require('!raw-loader!./listenPostMessage.example'); // eslint-disable-line
const sendPostMessageExample = require('!raw-loader!./sendPostMessage.example'); // eslint-disable-line
const backgroundSyncRegisterExample = require('!raw-loader!./backgroundSyncRegister.example'); // eslint-disable-line
const backgroundSyncUseExample = require('!raw-loader!./backgroundSyncUse.example'); // eslint-disable-line

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
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Service Workers
          </Heading>

          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            introduction
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            What is a Service Worker?
          </Heading>

          <BlockQuote>
            <Quote textSize={48}>
              A service worker is a script that your browser runs in the background,
              separate from a web page
            </Quote>
          </BlockQuote>

          <Notes>
            Dzięki SW uzyskujemy dostęp do funkcji, które nie potrzebują aplikacji webowej czy interakcji
            ze strony użytkownika
          </Notes>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Overview
          </Heading>

          <List textColor="primary">
            <ListItem>It's a JavaScript Worker</ListItem>
            <ListItem>It's a programmable network proxy</ListItem>
            <ListItem>It's terminated when not in use</ListItem>
          </List>

          <Notes>
            <ol>
              <li>Nie mamy dostępu do DOMu, musimy komunikować się z kontrolowanymi stronami za pomocą postMessage</li>
              <li>Możemy przechwytywać wszystkie żądania sieciowe aplikacji i zmieniać ich zachowanie wg uznania</li>
              <li>SW może zostać zamknięty i wystartowany w dowolnym momencie, jeśli nie jest używany. Oznacza to tyle,
                że nie wolno nam polegać na żadnym globalnym stanie
              </li>
            </ol>

          </Notes>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Life Cycle
          </Heading>

          <Image src="sw-lifecycle.png" height="500px" />
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Registering
          </Heading>

          <CodePane textSize={25} lang="js" source={registeringExample} />
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Installing
          </Heading>

          <CodePane textSize={25} lang="js" source={installExample} />
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Activating
          </Heading>

          <CodePane textSize={25} lang="js" source={activateExample} />
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Common use cases
          </Heading>

          <List textColor="primary">
            <ListItem>Caching requests</ListItem>
            <ListItem>Offline capabilities</ListItem>
            <ListItem>Push notifications</ListItem>
            <ListItem>Background sync</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Cache API
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Cache API – cache static files
          </Heading>

          <CodePane textSize={25} lang="js" source={cacheDefineExample} />

          <Notes>
            <ul>
              <li>Mamy możliwość dodania statycznych plików</li>
              <li>Jeśli nie uda się pobrać pliku to SW się nie zainstaluje!</li>
              <li>event.waitUntil zapewnia, że SW nie zostanie ubity przez przeglądarkę</li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Cache API – fetching
          </Heading>

          <CodePane textSize={25} lang="js" source={cacheFetchExample} />

          <Notes>
            <ul>
              <li>caches.match sprawdza, czy w cache znajduje się już odpowiedź dla requestu</li>
              <li>jeśli nie znajdziemy odpowiedzi w cache to wykonujemy prawdziwy fetch</li>
              <li>respondWith działa podobnie do waitUntil – nie zamknie SW</li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Cache API – updating
          </Heading>

          <CodePane textSize={25} lang="js" source={cacheUpdateExample} />

          <Notes>
            <ul>
              <li>Odpowiedź z fetcha należy sklonować przed dodaniem do cache'a</li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Push Notifications
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Push Notifications – get existing subscription
          </Heading>

          <CodePane textSize={25} lang="js" source={pushGetSubscribtionExample} />
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Push Notifications – subscribe
          </Heading>

          <CodePane textSize={25} lang="js" source={pushSubscribeExample} />
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Push Notifications – Receive & show
          </Heading>

          <CodePane textSize={25} lang="js" source={pushShowNotificationExample} />
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Push Notifications – Send
          </Heading>

          <Text textColor="primary">
            Usually you dispatch notifications from backend, but you can test with
            <Link href="https://web-push-codelab.glitch.me/" target="_blank">
              Push Notifiactions Companion
            </Link>
          </Text>

          <Notes>
            <ul>
              <li>Otrzymujemy parę kluczy – publiczny i prywatny</li>
              <li>Wykorzystujemy pobrany wcześniej obiekt `subscription`</li>
              <li>Powiadomienie może mieć dowolny format</li>
              <li>Dane dostajemy w event.data</li>
            </ul>
          </Notes>
        </Slide>


        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            PostMessage API
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            PostMessage API – listen
          </Heading>

          <CodePane textSize={25} lang="js" source={listenPostMessageExample} />
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            PostMessage API – send
          </Heading>

          <CodePane textSize={25} lang="js" source={sendPostMessageExample} />

          <Notes>
            <ul>
              <li>Klient to dowolna strona kontrolowana przez SW</li>
              <li>Klientów może być wiele – np. kilka otwartych tabów</li>
              <li>Treść wiadomości ma dowolny typ, który można zserializować</li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Background Sync
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Background Sync – Overview
          </Heading>

          <List textColor="primary">
            <ListItem>You can run code even if web page is closed</ListItem>
            <ListItem>Your users don't have to wait for a requests completion</ListItem>
            <ListItem>You can repeat a request if it fails due to networking problems</ListItem>
            <ListItem>You can run a background code when device reconnects to a network</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Background Sync – register
          </Heading>

          <CodePane textSize={25} lang="js" source={backgroundSyncRegisterExample} />
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Background Sync – use
          </Heading>

          <CodePane textSize={25} lang="js" source={backgroundSyncUseExample} />
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Browser Support
          </Heading>

          <Link href="https://jakearchibald.github.io/isserviceworkerready/index.html" target="_blank">
            https://jakearchibald.github.io
          </Link>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Links
          </Heading>

          <List textColor="primary">
            <ListItem>
              <Link href="https://developers.google.com/web/fundamentals/primers/service-workers/">
                Google Developers Guide
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://web-push-codelab.glitch.me/">
                Push Notifiactions Companion
              </Link>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
