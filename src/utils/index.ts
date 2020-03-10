export * from './history'

export const formatRoutePath = function(path: string): string { 
  if (path === '/') return 'home'
  return path.substring(1).replace(/\/:/g, '/').replace(/\//g, '-')
}
