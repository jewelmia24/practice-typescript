//* type safe function

const sum = (a:number,b:number):number=> a + b;

console.log(sum(50, 10));


//* optional, default and rest parameters (...args)

const fullName = (firstName:string, lastName?:string) : string => {
    if(!lastName){
        return firstName;
    }
    return firstName + " " + lastName;
}

console.log(fullName("jewel","rana"))


const greetings = (fullName:string, greeting:string = "hello")=>{
    console.log(fullName + " " + greeting)
}

greetings("jewel")


//* rest parameters (...args)

const add = ( ...numbers:number[]) => {
    return numbers.reduce((acc, curr)=> acc+curr, 0)
}

console.log(add(2,5,4,5))


const logUserAction = (...args:[name:string, age:number, isActive:boolean])=>{
    const [name, age, isActive] = args;
    console.log(name, "is", age, isActive)
}


logUserAction("jewel", 25, true)
