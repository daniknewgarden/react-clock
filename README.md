# Simple neomorphism react clock 🕘

![screenshot](https://i.imgur.com/6VgTOO2.png)

[**See demo**](https://react-neomorphism-clock.herokuapp.com/home) <br/>

**Here you can read how to run it, and how to use all components. Lets start 👇**<br/>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To do:

- Time format changing
- Temperature units changing

## How to run? 🏃‍♂️

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. 🛠<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode. 🧪<br />
But right now this feature isn't available. 🌚

### `npm build`

Builds the app for production to the `build` folder. 🏗<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

## Components guide 🧩

### Analog clock ⌚

![Analog clock screenshot](https://i.imgur.com/Sf4V7pC.png)

Uses useTime hook to get data about arrows rotation (hh, mm, ss). [See docs](https://github.com/daniknewgarden/amazing-react-hooks#usetime- useTime docs)

### Button 🔘

![Button screenshot](https://i.imgur.com/ob1VRtM.png)

Toggle button

**Props**

| Prop    |   Type   |         Description |
| ------- | :------: | ------------------: |
| text    |  string  |  text inside button |
| icon    |   img    | path to button icon |
| onClick | function |   callback function |

### Date 📆

![Date screenshot](https://i.imgur.com/kmUBAFS.png)

Uses useDate hook to get current day and mountName. [See docs](https://github.com/daniknewgarden/amazing-react-hooks#usedate- useDate docs)

### Digital clock 🕦

![Digital clock screenshot](https://i.imgur.com/jvoYwbl.png)

Uses useTime hook to get current time. [See docs](https://github.com/daniknewgarden/amazing-react-hooks#usetime- useTime docs)

### Settings ⚙

![Settings screenshot](https://i.imgur.com/7OQTGf8.png)

### Switcher

![Switcher screenshot](https://i.imgur.com/zy5pO0f.png)

| Prop         |   Type   |         Description |
| ------------ | :------: | ------------------: |
| ariaLabel    |  string  |    aria description |
| callback     | function |   callback function |
| defaultState | boolean  | enabled or disabled |

### Text

#### Title

![Title screenshot](https://i.imgur.com/unlnTx2.png)

Heading 2

| Prop |  Type  | Description |
| ---- | :----: | ----------: |
| text | string |        text |

#### Subtitle

![Subtitle screenshot](https://i.imgur.com/Ty8PHgX.png)

Heading 3

| Prop |  Type  | Description |
| ---- | :----: | ----------: |
| text | string |        text |

### Weather ☁

![Weather screenshot](https://i.imgur.com/m5DWL4p.png)

| Prop      |  Type  |                         Description |
| --------- | :----: | ----------------------------------: |
| tempUnits | string | celsius `'_c'` or fahrenheit `'_f'` |
