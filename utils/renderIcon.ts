import { NIcon } from 'naive-ui'
import { RouterLink } from 'vue-router'
import { h } from 'vue'

// icon: please refer to the: https://ionic.io/ionicons/ name 改成大驼峰
async function renderIcon (icon): Promise<Function> {
    const { [icon]: iconCompontent } = await import('@vicons/ionicons5')
    return () => h(NIcon, null, { default: () => h(iconCompontent) })
}
// interface op {
//     label: Function,
//     key: string,
//     icon: Function | string,
//     children: Array<Object>
// }
const getMenu:(menuItem: Array<Object>) => Promise<Object> = async function (menuItem: Array<Object>): Promise<Object> {
    const menuOptions = await Promise.all(
        menuItem.map(async (item) => {
            if (item.children && item.children.length !== 0) {
                const children = await Promise.all(
                    item.children.map(async (childrenItem: any) => await getOption(childrenItem))
                )
                const menu = await getOption(item)
                menu.children = children
                return menu
            } else {
                return await getOption(item)
            }
        })
    )
    return menuOptions
}

const getOption = async (menu) => {
    return {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: menu.url
                    }
                },
                { default: () => menu.label }
            ),
        key: menu.url,
        icon: menu.icon && await renderIcon(menu.icon),
        children: menu?.children
    }
}

export default getMenu
