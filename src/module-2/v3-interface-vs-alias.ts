//* interface vs type alias

//? interface generally ued in objects
//? type alias generally used in literals, union, tuples, primitives, etc

//TODO: type alias

type Id = number

//! interface id = number

type TRole = "admin" | "user" | "guest"

//! interface TRole = "admin" | "user" | "guest"


//TODO: interface


interface IUser {
    name: string,
    age: number,
}


interface IUser1 extends IUser {
    role: "admin" | "user"
}


const user: IUser1 = {
    name: "John",
    age: 30,
    role: "admin"   
}

type TUser ={
    name: string,
    age: number
}

type TUser1 = TUser & {
    role: "admin" | "user"
}


const user1: TUser1 = {
    name: "John",
    age: 30,
    role: "admin"   
}

