export type Admin = boolean
export type Username = string

export type MyCar = {
    dateOfMaking : number,
    color : string ,
    cost : number,
    anyRepairingCost : number
}


export type Password = string

export  type Negate = (a : number) => number


export interface Rectangle {
    length: number,
    breadth: number,
    diagonal?: number
}

export interface Circle {
    radius: number,
    area?: number
}