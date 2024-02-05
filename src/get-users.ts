import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const users = await prisma.register.findMany({
        where:{
            isHidden:false
        },
    })
    console.log(users);
    
}

main()