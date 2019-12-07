# react-native-circular-timer

Circular Timer component for React Native

<a href="https://twitter.com/intent/follow?screen_name=meharbhutta">
    <img 
        src="https://img.shields.io/twitter/follow/meharbhutta.svg?style=social&logo=twitter"
        alt="follow on Twitter"
    >
</a>

## NPM

- stable release version: ![version](https://img.shields.io/badge/version-1.1.4-blue.svg?cacheSeconds=2592000)
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

- Initialization of a react-native project

```bash
$ npx react-native init AwesomeProject
```

### Note: [GUIDE](https://facebook.github.io/react-native/docs/getting-started)

- Then, edit `AwesomeProject/App.js`, like this:

```javascript
import { View } from 'react-native';
import CircularTimer from 'react-native-circular-timer';

export default class App extends Component<Props> {
  _restartTimer = () => {
    if (this._timerRef) this._timerRef.restart();
  };

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
          ref={refs => (this._timerRef = refs)}
          onTimeElapsed={() => {
            console.log('Timer Finished!');
          }}
          showSecond={true}
        />
        <TouchableOpacity
          onPress={this._restartTimer}
          style={{
            marginTop: 20,
            borderRadius: 6,
            backgroundColor: '#000000'
          }}
        >
          <Text
            style={{
              padding: 16,
              fontSize: 18,
              color: 'white',
              fontWeight: 'bold'
            }}
          >
            Restart Timer
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
```

### Props

| parameter             | type     | required | description                          | default     |
| :-------------------- | :------- | :------- | :----------------------------------- | :---------- |
| seconds               | number   | yes      | Time in seconds                      |             |
| radius                | number   | yes      | Radius of the circle                 |             |
| showSecond            | boolean  | no       | To show the `sec` keyword with timer | `false`     |
| borderWidth           | number   | no       | The border width of the circle       | `10`        |
| borderColor           | string   | no       | The color of the border              | `"#0E3657"` |
| borderBackgroundColor | string   | no       | The background color of the border   | `"#A8C3BC"` |
| circleColor           | string   | no       | The color of the circle              | `"#FFF"`    |
| style                 | object   | no       | To apply style to the timer          |             |
| textStyle             | object   | no       | To override the text style           | default     |
| secondStyle           | object   | no       | To override the second style         | default     |
| onTimeElapsed         | function | no       | Callback for the timer end           | () => {}    |

### Methods

| method  | description                |
| :------ | :------------------------- |
| restart | To restart the timer again |

### Note: 
Firstly, you need to create reference of the component and then call the restart method using that reference [GUIDE](https://stackoverflow.com/questions/37949981/call-child-method-from-parent).

### To run example

```bash
cd example
npm install
npx react-native run-android (For android)
npx react-native run-ios (For ios)
```

#### In case of any issue follow the [GUIDE](https://facebook.github.io/react-native/docs/getting-started).

### Supported React Native Versions  

This project aims to support any version of React Native.

If you require new features or bug fixes for older versions you can fork this project.

### Credits

The idea for this modules came from MrToph react-native-countdown-circle package.

### Licenses

CircularTimer - MIT © MeharBhutta
