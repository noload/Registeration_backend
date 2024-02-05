import {PrismaClient} from '@prisma/client'
import { format } from 'date-fns';

const prisma = new PrismaClient();

async function main() {
    const newUser =await prisma.register.update({
        where:{
            id:1
        },
        data:{
            email:"vaibhavkamble023@gmail.com",
            name:"Vaibhav p Kamble",
            dateOfBirth:new Date(1998,6,12)
        }

    })

    console.log(newUser);
    
}

main()