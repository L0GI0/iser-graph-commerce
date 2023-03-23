import type React from 'react'

export * from './src/utils/isMonorepo'
export * from './src/utils/resolveDependenciesSync'
export * from './src/withGraphCommerce'
export * from './src/generated/config'
export * from './src/config'


export type PluginProps<P extends Record<string, unknown> = Record<string, unknown>> = P & {
  Prev: React.FC<P>
}