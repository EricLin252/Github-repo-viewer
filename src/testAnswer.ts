export const testAnswer = (answer: number[]) => {
    const a1 = answer[0];
    const a2 = answer[3];
    if(a2){
        switch(a1){
            case 0:
                return 3
            case 1:
                return 5
            default:
                return 6
        }
    }
    else {
        switch(a1){
            case 0:
                return 2
            case 1:
                return 1
            default:
                return 4
        }
    }
}

export const links = [
    'https://www.icon99.com.tw/products',
    'https://www.icon99.com.tw/products/27',
    'https://www.icon99.com.tw/products/200',
    'https://www.icon99.com.tw/products/24',
    'https://www.icon99.com.tw/products/25',
    'https://www.icon99.com.tw/products/170',
    'https://www.icon99.com.tw/products/153'
]