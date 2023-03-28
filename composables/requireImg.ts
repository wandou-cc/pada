export const requireImg = (url: String) => {
    return new URL(`../assets/img/${url}`, import.meta.url).href
}
