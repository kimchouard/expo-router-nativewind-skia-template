// BUGFIX RN Skia
const fs = require('fs');
const path = require('path');

// Load the file located at "node_modules/@shopify/react-native-skia/lib/module/Platform/Platform.web.js" and replace the line with `PixelRatio: window.devicePixelRatio,` with `PixelRatio: (typeof window !== 'undefined') ? window.devicePixelRatio : 1,`
try {
  const platformWebPath = path.join(__dirname, 'node_modules', '@shopify', 'react-native-skia', 'lib', 'module', 'Platform', 'Platform.web.js');
  const platformWeb = fs.readFileSync(platformWebPath, 'utf8');
  const platformWebFixed = platformWeb.replace('PixelRatio: window.devicePixelRatio,', 'PixelRatio: (typeof window !== \'undefined\') ? window.devicePixelRatio : 1,');
  fs.writeFileSync(platformWebPath, platformWebFixed);
} catch (e) {
  console.error('Error while updating @shopify/react-native-skia/lib/module/Platform/Platform.web.js', e);
}
