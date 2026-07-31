// made this file to keep the data model seperate from UI
// https://www.typescriptlang.org/docs/handbook/2/objects.html used as refernce

// starting with just 1st and last name for child
export interface Child {
    firstName: string;
    lastName: string;
}

// adress to be nested inside "person"
export interface Address {
    street: string;
    city: string;
    country: string;
}
// again starting with 1st and last name for person, and address and children as nested objects from above
export interface Person {
    firstName: string;
    lastName: string;
    address: Address;
    children: Child[];
}

// https://vuejs.org/guide/essentials/reactivity-fundamentals.html#declaring-reactive-state used as reference for creating empty person object
export function createEmptyPerson(): Person {
    return {
        firstName: '',
        lastName: '',
        address: {
            street: '',
            city: '',
            country: ''
        },
        children: []
    };
}