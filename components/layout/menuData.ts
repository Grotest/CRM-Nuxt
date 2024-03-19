export interface IMenuItem {
    name: string,
    url: string,
    icon: string
}

export const MENU_DATA:IMenuItem[] = [
    {
        icon: 'icon-park-outline:activity-source',
        name: 'Home',
        url: '/'
    },
    {
        icon: 'oi:globe',
        name: 'Produx',
        url: '/Produx'
    },
    {
        icon: 'oi:globe',
        name: 'Paymenst',
        url: '/Paymenst'
    },
    {
        icon: 'oi:globe',
        name: 'Orders',
        url: '/Orders'
    },
    {
        icon: 'oi:globe',
        name: 'Custums',
        url: '/Custums'
    },
]