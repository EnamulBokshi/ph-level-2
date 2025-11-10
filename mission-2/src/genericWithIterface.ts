interface Developer <T>{
    name: string,
    salar: number,
    device:{
        brand: string,
        model: string,
        releasedYear: string,
    };

    smartWatch: T
}

type smartWatch = {
    brand: string,
    price: number,
    madeInd: string,
}

const poorDev : Developer<smartWatch> = {
    name: 'khalid',
    salar: 40,
    device: {
        brand: 'apple',
        model: 'Mac-Book m4',
        releasedYear: '2027'
    },
    smartWatch:{
        brand: 'apple',
        price: 223,
        madeInd: 'Bangladesh'
    }
}

const richDev : Developer<smartWatch> = {
    name: 'Enamul',
    salar: 40000,
    device: {
        brand: 'apple',
        model: 'Mac-Book m4',
        releasedYear: '2027'
    },
    smartWatch:{
        brand: 'apple',
        price: 33434,
        madeInd: 'Vietnam'
    }
}



// generic with optional properties


interface IUser <T, X = null> {
    id: string,
    age: number,
    profile: {
        name: string,
        phone: string,
        image: string,
        address: string,
    },
    salary: number,
    device:{
        brand: string,
        model: string,
        releasedYear: string,
    };
    accomendation: T,
    car?: X,
}


type Accomention = {
    rent: number,

}

type Car = {
    brand:string,
    model: string, 
    condition: "Old" | "New"
}

// type HrFacilities = Accomention & Car;

const HR: IUser<Accomention, Car> ={
    id: '3434',
    age: 26,
    profile: {
        name: 'Enam',
        phone: '34342',
        image: 'image urls',
        address: 'Monipur',
    },
    salary: 120000,
    device:{
        brand: 'Apple',
        model: 'Mac ',
        releasedYear: '2023',
    },
    accomendation: {
        rent: 23000
    },
    car:{
        brand: 'Ya-Maha',
        model: 'Rfa-2',
        condition: 'New'
    }
}
