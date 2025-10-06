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



 export  interface User {
   
    userId : string,
    username: string,
    email: string,
    isAdmin: boolean,
    role: string,
    createdAt?: Date,
    updatedAt?: Date,
    loading : boolean
}




export interface userForm {
    username ? :  string ,
    email : string,
    password : string
}


