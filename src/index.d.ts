declare module 'react-native-circular-timer' {
  import { ViewStyle, TextStyle } from 'react-native';

  /**
   * Properties of the CircularTimer component.
   */
  interface CircularTimerProps {
    /**
     * The time in seconds is required.
     */
    seconds: number;

    /**
     * The radius of the circle is required.
     */
    radius: number;

    /**
     * The border width of the circle to indicate time elapsed. The default value is 10.
     */
    borderWidth?: number;

    /**
     * The border color of the circle. The default color is "#0E3657".
     */
    borderColor?: string;

    /**
     * The border background color of the circle. The default color is "#A8C3BC".
     */
    borderBackgroundColor?: string;

    /**
     * The color of the circle. The default color is "#FFF".
     */
    circleColor?: string;

    /**
     * Style for the circular timer.
     */
    style?: ViewStyle;

    /**
     * Style to override the default text style.
     */
    textStyle?: TextStyle;

    /**
     * Callback for the timer end.
     */
    onTimeElapsed?(): void;
  }

  class CircularTimer extends React.Component<CircularTimerProps, {}> {
    restart(): void;
  }

  export default CircularTimer;
}
