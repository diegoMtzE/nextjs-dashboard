import { Ubuntu, Nunito, Lusitana} from 'next/font/google'

export const nunito=Nunito({subsets:["latin"]})

export const lusitana=Lusitana({subsets:["latin"],weight: ["400", "700"]})

export const ubuntu=Ubuntu({
    subsets: ["latin"],
    weight: '400'
})
