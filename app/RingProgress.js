import { View, Text } from 'react-native';
import SVG, { Circle } from 'react-native-svg';
import Animated, { useAnimatedProps, useSharedValue, withTiming} from 'react-native-reanimated';
import { useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const color = 'blue';

const RingProgress = ({
  radius = 100,
  strokeWidth = 35,
  progress,
}: RingProgressProps) => {
  const innerRadius = radius - strokeWidth/2;
  const circumference = 2 * Math.PI * innerRadius;
  
  const fill = useSharedValue(0);

  const animatedProps = useAnimatedProps(() => ({
    strokeDasharray: [circumference * fill.value, circumference]
  }));

  useEffect(() => {
    fill.value = withTiming(progress, { duration: 1000 });
  }, [progress]);

  

  return (
    <View style={{ width: radius * 2, height: radius * 2, alignSelf: 'center'}}>

      <SVG>
        {/* Outer Circle */}
        <Circle
          cx={radius} 
          cy={radius} 
          r={innerRadius} 
          fill={'#4BA5E3'}
          strokeWidth={strokeWidth}
          stroke={color}
          opacity={0.2}
        />
        {/* Inner Circle */}
        <AnimatedCircle
          cx={radius} 
          cy={radius} 
          r={innerRadius} 
          fill='none'
          strokeWidth={strokeWidth}
          stroke={color}
          animatedProps={animatedProps}
          strokeLinecap='round'
          rotation="-90"
          originX={radius}
          originY={radius}
        />
      </SVG>
      <AntDesign 
      name="arrowright" 
      size={strokeWidth * 0.8} 
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