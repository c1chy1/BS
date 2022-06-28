import { MenuItem } from '~~/types/menuItem.interface'
import { Link } from '~~/types/link.interface'

export const ids: MenuItem[] = [
    {
        label: 'tankstelle',
        id: 'tankstelle',
    },
    {
        label: 'frachtenvermittlung / spedition',
        id: 'frachtenvermittlung',
    },
    {
        label: 'baustoffhandel',
        id: 'baustoffhandel',
    },
    {
        label: 'reifendienst',
        id: 'reifendienst',
    },
    {
        label: 'dienstleistungen im bereich hdd spülbohrverfahren',
        id: 'dienstleistungen',
    },
    {
        label: 'kontakt',
        id: 'kontakt',
    },
]
export const legal: Link[] = [
    {
        label: 'Impressum',
        route: 'impressum',
    },
    {
        label: 'Datenschutz',
        route: 'datenschutz',
    },
]

