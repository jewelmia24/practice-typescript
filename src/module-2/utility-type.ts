//* utility type

//* partial type

type stuent = {
  name: string;
  age: number;
  address: string;
};

const student1: Partial<stuent> = {
  name: "jewel",
  age: 25,
};


//* required type 

type student2 = {
  name: string;
  age: number;
  address?: string;
};

const student2 : Required<student2> =  {
    name: "jewel",
    age: 25,
    address: "123 Main St"
}


//* readonly type

type student3 = {
  name: string;
  age: number;
  address: string;
};

type pickStudent = Pick<student3, "name" | "age">;

const student3: Readonly<pickStudent> = {
  name: "jewel",
  age: 25,
};

//* omit type

type student4 = {
  name: string;
  age: number;
  address: string;
};

const student4: Omit<student4, "address"> = {
  name: "jewel",
  age: 25,
};


//* record type

type student5 = {
  name: string;
  age: number;
  address: string;
};

const student5: Record<string, student5> = {
  student1: { name: "jewel", age: 25, address: "123 Main St" },
  student2: { name: "john", age: 30, address: "456 Elm St" },
};