import { View, Text } from 'react-native';
import SVG, { Circle } from 'react-native-svg';
import Animated, { useAnimatedProps, useSharedValue, withTiming} from 'react-native-reanimated';
import { useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const RingProgress = ({
  radius = 100,
  strokeWidth = 35,
  progress,
  strokeColor = 'blue',
}: RingProgressProps) => {
  const innerRadius = radius - strokeWidth/2;
  const circumference = 2 * Math.PI * innerRadius;
  
  const fill = useSharedValue(0);

  const animatedProps = useAnimatedProps(() => ({
    strokeDasharray: [circumference * fill.value, circumference]
  }));

  useEffect(() => {
    //console.log("progress updated;", progress);
    fill.value = withTiming(progress, { duration: 1000 });
  }, [progress]);

  

  return (
    <View style={{ width: radius * 2, height: radius * 2, position: 'absolute'}}>

      <SVG>
        {/* Outer Circle */}
        <Circle
          cx={radius} 
          cy={radius} 
          r={innerRadius} 
          fill={'#FFFFFF'}
          strokeWidth={strokeWidth}
          stroke={strokeColor}
          opacity={0.46}
        />
        {/* Inner Circle */}
        <AnimatedCircle
          cx={radius} 
          cy={radius} 
          r={innerRadius} 
          fill='none'
          strokeWidth={strokeWidth}
          stroke={strokeColor}
          animatedProps={animatedProps}
          strokeLinecap='square'
          rotation="-90"
          originX={radius}
          originY={radius}
        />
      </SVG>
      <AntDesign 
      name="arrowright" 
      size={strokeWidth * 0.5} 
      color="white" 
      style={{
        position: 'absolute', 
        alignSelf: 'center', 
        top: strokeWidth*0.1, 
        }} 
      />
    </View>
  );
};

export default RingProgress;