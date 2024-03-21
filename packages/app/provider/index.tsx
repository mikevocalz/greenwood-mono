import { SafeArea } from './safe-area'
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { ReactNode } from 'react'
import { config as defaultConfig } from '@gluestack-ui/config';
import { createConfig } from '@gluestack-ui/themed';

const config = createConfig({
  ...defaultConfig,
})

export function Provider({ children }: { children: ReactNode }) {
  return (
    <SafeArea>
      <GluestackUIProvider config={config}>
        {children}
      </GluestackUIProvider>
    </SafeArea>
  )
}
