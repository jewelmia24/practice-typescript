//* type assertion

//* "as" syntax

type TStatus = "success" | "error" | "loading"

const someStatus : string = "success"

const showStatus = (status: TStatus) => {
    console.log(status)
}

showStatus(someStatus as TStatus)


//* null assertion

interface IConfig {
    port?:number
}

const config: IConfig = {  
    port: 3000
}

const port : number = config.port!


//* constant assertion

const configuration =  {
    port: 3000,
    host: "localhost"
} as const


//! configuration.port = 4000  


//* generic type 


type TResponse<T> = {
    status: TStatus,
    data: T
}

const response: TResponse<string> = {
    status: "success",
    data: "This is a string"
}