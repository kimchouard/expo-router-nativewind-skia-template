import { StatusBar } from 'expo-status-bar';
import { Platform, useWindowDimensions } from 'react-native';
import { View, Text  } from '@/src/components/Themed';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import Breathe from '../components/Breathe';
import { MonoText } from '../components/StyledText';

export default function ModalScreen() {
  const { width, height } = useWindowDimensions();

  return (<>
    <View style={{ width, height }} className="flex flex-1 items-center justify-center absolute top-0 left-0">
      <Breathe />
    </View>
    <View className="flex flex-1 items-center justify-center !bg-transparent">
      <Text className="text-xl font-bold text-neutral-700">Keep Calm, and Use Skia</Text>
      
      <View className="items-center mx-12 !bg-transparent">
        <Text className="text-lg text-center">
          Open up the code for this screen:
        </Text>

        <View className="rounded-lg px-3 py-1 my-3 bg-neutral-600/40">
          <MonoText>src/app/modal.tsx</MonoText>
        </View>
        
        <Text className="text-lg text-center">
          Background animation loaded from:
        </Text>

        <View className="rounded-lg px-3 py-1 my-3 bg-neutral-600/40">
          <MonoText>src/components/Breathe.tsx</MonoText>
        </View>
      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  </>);
}
