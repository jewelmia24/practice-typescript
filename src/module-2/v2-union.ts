//* literal type

type TStatus = "pending"

const status: TStatus = "pending"
console.log(status)

//* basic union type

type TIdentity = string | number 

const identity : TIdentity = "Din Islam"

console.log(identity)

//* literal union type

type TUserRole = "admin" | "user" 

const userRole: TUserRole = "admin"
console.log(userRole)


//* oject union type

type  admin = {
    name: string,
    role: "admin",
    adminLevel: number
}

type user = {
    name: string,
    role: "user"
    userStatus: "active" | "inactive"
}

type TUser = admin | user

const user:TUser = {
    name: "Din Islam",
    role: "user",
    userStatus: "active"

}