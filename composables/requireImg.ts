export const requireImg = (path: string): string => {
   const glob = import.meta.glob(`~/assets/**/*`, { eager: true, import: 'default'})
   return glob['/assets/' + path]
}