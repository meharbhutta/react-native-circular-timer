'use strict';

import * as React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, ViewPropTypes } from 'react-native';

const ViewPropTypesStyle = ViewPropTypes ? ViewPropTypes.style : View.propTypes.style;

export default class CircularTimer extends React.Component {
  static propTypes = {
    seconds: PropTypes.number.isRequired,
    radius: PropTypes.number.isRequired,
    showSecond: PropTypes.bool,
    borderWidth: PropTypes.number,
    borderColor: PropTypes.string,
    borderBackgroundColor: PropTypes.string,
    circleColor: PropTypes.string,
    style: ViewPropTypesStyle,
    textStyle: Text.propTypes.style,
    secondStyle: Text.propTypes.style,
    onTimeElapsed: PropTypes.func
  };

  static defaultProps = {
    borderColor: '#0E3657',
    borderBackgroundColor: '#A8C3BC',
    circleColor: '#FFF',
    borderWidth: 10,
    radius: 40,
    seconds: 60,
    showSecond: false,
    style: null,
    textStyle: null,
    secondStyle: null,
    onTimeElapsed: () => {}
  };

  constructor(props) {
    super(props);

    this.state = {
      elapsedTime: props.seconds,
      rotate: 0
    };
  }

  componentDidMount() {
    this._start();
  }

  _clearTimer = () => {
    if (this._timer) clearInterval(this._timer);
  };

  _start = () => {
    this._timer = setInterval(() => {
      const { elapsedTime, rotate } = this.state,
        { seconds, onTimeElapsed } = this.props;
      if (elapsedTime > 0)
        this.setState(
          {
            elapsedTime: elapsedTime - 1,
            rotate: rotate + 360 / seconds
          },
          () => {
            if (elapsedTime - 1 === 0) onTimeElapsed();
          }
        );
      else this._clearTimer();
    }, 1000);
  };

  restart = () => {
    this._clearTimer();
    this.setState(
      {
        elapsedTime: this.props.seconds,
        rotate: 0
      },
      () => {
        this._start();
      }
    );
  };

  componentWillUnmount() {
    this._clearTimer();
  }

  render() {
    const { elapsedTime, rotate } = this.state,
      {
        seconds,
        showSecond,
        borderColor,
        borderBackgroundColor,
        circleColor,
        style,
        textStyle,
        secondStyle,
        radius,
        borderWidth
      } = this.props,
      check = elapsedTime > seconds / 2,
      leftHalfBackColor = check ? borderColor : 'transparent',
      rightHalfBackColor = check ? 'transparent' : borderBackgroundColor,
      fullCircle = {
        width: radius * 2,
        height: radius * 2,
        borderRadius: radius
      },
      halfCircle = {
        width: radius,
        height: radius * 2,
        borderRadius: radius
      },
      innerCircle = {
        width: (radius - borderWidth) * 2,
        height: (radius - borderWidth) * 2,
        borderRadius: radius - borderWidth,
        flex: 0
      };

    return (
      <View style={{ ...style, ...__styles.container, ...fullCircle, backgroundColor: borderBackgroundColor }}>
        <View
          style={{
            ...__styles.move,
            transform: [{ rotate: `${rotate}deg` }],
            ...fullCircle
          }}
        >
          <View
            style={{
              ...__styles.halfCircle,
              ...__styles.rightHalfCircle,
              ...halfCircle,
              backgroundColor: borderColor
            }}
          />
        </View>
        <View style={{ ...__styles.move, ...fullCircle }}>
          <View
            style={{
              ...__styles.halfCircle,
              ...__styles.leftHalfCircle,
              ...__styles.rightMove,
              ...halfCircle,
              backgroundColor: leftHalfBackColor
            }}
          />
          <View
            style={{
              ...__styles.halfCircle,
              ...__styles.rightHalfCircle,
              ...__styles.rightMove,
              ...halfCircle,
              backgroundColor: rightHalfBackColor
            }}
          />
        </View>
        <View style={{ ...__styles.circle, ...innerCircle, backgroundColor: circleColor }}>
          <Text style={textStyle}>{elapsedTime}</Text>
          {showSecond && <Text style={secondStyle}>sec</Text>}
        </View>
      </View>
    );
  }
}

const __styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 8
  },
  move: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  halfCircle: {
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 1,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  rightMove: {
    zIndex: 4
  },
  leftHalfCircle: {
    left: 0,
    transform: [{ rotate: '180deg' }]
  },
  rightHalfCircle: {
    right: 0
  }
});
