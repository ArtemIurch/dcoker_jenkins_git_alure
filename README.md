npm install webdriverio@7 @wdio/cli@7 

npx wdio config

```json
{
  "dependencies": {
    "@wdio/cli": "^7.36.0",
    "webdriverio": "^7.36.0"
  },
  "scripts": {
    "wdio": "wdio run wdio.conf.js"
  },
  "devDependencies": {
    "@wdio/allure-reporter": "^7.33.0",
    "@wdio/local-runner": "^7.36.0",
    "@wdio/mocha-framework": "^7.33.0",
    "@wdio/selenium-standalone-service": "^7.33.0",
    "@wdio/spec-reporter": "^7.33.0"
  }
}

npm install
npx wdio run wdio.conf.js

///////////////////////////////////////////////////////////////////////////
services:
  selenium-hub:
    image: selenium/hub:4.8.0
    container_name: selenium-hub
    ports:
      - "4442:4442"
      - "4443:4443"
      - "4444:4444"

  chrome:
    image: selenium/node-chrome:4.8.0
    shm_size: 2gb
    depends_on:
      - selenium-hub
    environment:
      - SE_EVENT_BUS_HOST=selenium-hub
      - SE_EVENT_BUS_PUBLISH_PORT=4442
      - SE_EVENT_BUS_SUBSCRIBE_PORT=4443
      - SE_VNC_NO_PASSWORD=true

  firefox:
    image: selenium/node-firefox:4.8.0
    shm_size: 2gb
    depends_on:
      - selenium-hub
    environment:
      - SE_EVENT_BUS_HOST=selenium-hub
      - SE_EVENT_BUS_PUBLISH_PORT=4442
      - SE_EVENT_BUS_SUBSCRIBE_PORT=4443
      - SE_VNC_NO_PASSWORD=true

  edge:
    image: selenium/node-edge:4.8.0
    shm_size: 2gb
    depends_on:
      - selenium-hub
    environment:
      - SE_EVENT_BUS_HOST=selenium-hub
      - SE_EVENT_BUS_PUBLISH_PORT=4442
      - SE_EVENT_BUS_SUBSCRIBE_PORT=4443
      - SE_VNC_NO_PASSWORD=true

docker-compose -f docker-compose.yml up -d 
```