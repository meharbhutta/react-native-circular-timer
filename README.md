# react-native-circular-timer
Circular Timer component for React Native

<a href="https://twitter.com/intent/follow?screen_name=meharbhutta">
    <img 
        src="https://img.shields.io/twitter/follow/meharbhutta.svg?style=social&logo=twitter"
        alt="follow on Twitter"
    >
</a>

## NPM

- stable release version: ![version](https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000)
- package downloads: ![downloads](https://img.shields.io/badge/downloads-22%2Fweek-brightgreen.svg?cacheSeconds=2592000)
- [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## Show Case
![](https://raw.githubusercontent.com/meharbhutta/react-native-circular-timer/master/example/react-native-circular-timer.gif) 

## Getting Started

### Installation

```bash
npm i react-native-circular-timer --save
```

### Basic Usage

- Install react-native-cli first

```bash
$ npm install -g react-native-cli
```

### Note: [GUIDE](https://facebook.github.io/react-native/docs/getting-started)

- Initialization of a react-native project

```bash
$ react-native init AwesomeProject
```

- Then, edit `AwesomeProject/App.js`, like this:

```javascript
import { View } from 'react-native';
import CircularTimer from 'react-native-circular-timer';

export default class App extends Component<Props> {
    render() {
        return (
            <View 
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white'
                }}
            >
            <CircularTimer
                onTimeElapsed={() => {
                    console.log('Timer Finished!');
                }}
            />
        </View>
        );
    }
}
```

### Props

| parameter | type  | required | description | default |
| :--------------------- | :------------------------------------------------------------------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------- |
| seconds | number | yes |  Time in seconds  |  |
| radius | number | yes | Radius of the circle |  |
| borderWidth | number | no | The border width of the circle | `10` |
| borderColor | string | no | The color of the border | `"#0E3657"` |
| borderBackgroundColor | string | no | The background color of the border | `"#A8C3BC"` |
| circleColor | string | no | The color of the circle | `"#FFF"` |
| style | object | no | To apply style to the timer |
| textStyle | object  | no | To override the text style | default |
| onTimeElapsed | function | no | Callback for the timer end | () => {} |

### Methods

| method | description |
| :------------------------ | :----------------------------------------------- |
| restart | To restart the timer again |

### To run example

```bash
cd example
npm install
react-native run-android (For android)
react-native run-ios (For ios)
```

#### In case of any issue follow the [GUIDE](https://facebook.github.io/react-native/docs/getting-started).
