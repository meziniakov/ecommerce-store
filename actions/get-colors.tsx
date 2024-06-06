import {Color} from '@/types/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`

const getColors = async ():Promise<Color[]> => {
    // const res = await fetch(URL)

    // return res.json()
    return [
        {
            id: '1',
            value: '#545454',
            name: 'Цвет 1',
            storeId: '65b2014a-8368-4f2b-8f72-eef03ac041e3'
        },
        {
            id: '2',
            value: '#364578',
            name: 'Цвет 2',
            storeId: '65b2014a-8368-4f2b-8f72-eef03ac041e3'
        }
    ]
}
export default getColors