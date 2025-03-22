import React, {useEffect} from 'react';
import {View, Text, StyleSheet, LayoutAnimation} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

interface CircleProps {
  size: number;
  strokeWidth: number;
  progress: number; // 0 to 100
  color: string;
  bidirectional?: boolean;
  startPosition?: number;
  showProgressText?: boolean;
  percentage?: string;
  progressTextStyle?: object;
}

const CircleComponent: React.FC<CircleProps> = ({
  size,
  strokeWidth,
  progress,
  color,
  bidirectional = false,
  percentage = '',
  startPosition = 0,
  showProgressText = true,
  progressTextStyle = {},
}) => {
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;
  const circumference = 2 * Math.PI * radius;

  LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

  const calculateOffset = () => {
    if (!bidirectional) {
      return circumference - (progress / 100) * circumference;
    } else {
      const halfProgress = progress / 2;
      return circumference - (halfProgress / 50) * circumference;
    }
  };

  const strokeDashoffset = calculateOffset();

  const renderCircles = () => {
    const baseCircleProps = {
      cx: center,
      cy: center,
      r: radius,
      stroke: color,
      strokeWidth: strokeWidth,
      fill: 'none',
      strokeLinecap: 'round' as const,
    };

    if (!bidirectional) {
      return (
        <Circle
          {...baseCircleProps}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform={`rotate(${startPosition - 90} ${center} ${center})`}
        />
      );
    }

    return (
      <>
        <Circle
          {...baseCircleProps}
          strokeDasharray={`${circumference / 2} ${circumference / 2}`}
          strokeDashoffset={strokeDashoffset}
          transform={`rotate(${startPosition - 90} ${center} ${center})`}
        />
        <Circle
          {...baseCircleProps}
          strokeDasharray={`${circumference / 2} ${circumference / 2}`}
          strokeDashoffset={strokeDashoffset}
          transform={`rotate(${startPosition + 90} ${center} ${center})`}
        />
      </>
    );
  };

  return (
    <View style={[styles.container, {width: size, height: size}]}>
      <Svg width={size} height={size}>
        {renderCircles()}
      </Svg>
      {showProgressText && (
        <View style={styles.textContainer}>
          <Text style={[styles.progressText, progressTextStyle]}>
            {Math.round(progress)}
            {percentage ? percentage : '%'}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CircleComponent;
