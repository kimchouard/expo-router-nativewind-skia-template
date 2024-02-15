import React from 'react';

import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import HelloSkia from './HelloSkia';

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View className="items-center mx-12">
        <Text className="text-lg text-center">
          Open up the code for this screen:
        </Text>

        <View className="rounded px-1 my-3">
          <MonoText>{path}</MonoText>
        </View>

        <Text className="text-lg text-center">
          Change any of the text, save the file, and your app will automatically update.
        </Text>
        
        <View className="my-7 h-[1px] w-[80%] bg-black/10"/>

        <Text className="text-lg text-center">
          You also get React Native Skia working out of the box for Native & Web.
        </Text>

        <View className="rounded px-1 my-3">
          <MonoText>src/components/HelloSkia.tsx</MonoText>
        </View>

        <HelloSkia />
      </View>

      <View className="mt-4 mx-5 items-center">
        <ExternalLink
          className="py-4"
          href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet">
          <Text className="text-center text-link">
            Tap here if your app doesn't automatically update after making changes
          </Text>
        </ExternalLink>
      </View>
    </View>
  );
}