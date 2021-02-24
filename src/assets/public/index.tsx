const assets = '/assets'

export const bearImg = '/assets/media/other/bear.jpeg'
export const giftsImg = '/assets/media/other/gifts.jpeg'
export const cnsImg = (num: 1|2|3|4|number) => `/assets/media/cns/cns${num}.jpg`

export const amazonImg = '/assets/media/registry/amazon-logo.png'
export const targetImg = '/assets/media/registry/target-logo.png'

export const fav_icon = `${assets}/logo/moji_m.png`

export const moji_loaders = [
    {
        name: 'Moji loader 1',
        src: '/assets/mojis/loader/moji_loader1.png'
    },
    {
        name: 'Moji loader 2',
        src: '/assets/mojis/loader/moji_loader2.png'
    },
    {
        name: 'Moji loader 3',
        src: '/assets/mojis/loader/moji_loader3.png'
    }
]

export const moji_selfies = [
    {
        name: 'Moji cheese',
        src: '/assets/mojis/selfie/cns.png'
    },
]

export const moji_err = {
    404: '/assets/mojis/error/404.png',
    err: '/assets/mojis/error/moji_err.png'
}