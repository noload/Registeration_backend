import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
 const deletedUser=   await prisma.register.update({
        where:{
            id:1
        },
        data:{
            isHidden:true
        }
    })

    console.log("deleted User",deletedUser);
    
}
main()