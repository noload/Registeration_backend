import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.register.create({
        data:{
            name:"Neeraj",
            email:"Neeraj@123gmail.com",
            password:"Neeraj@123K",
            dateOfBirth:new Date(1980,2,10)
        }
    })

    console.log(user);
    
}

main()