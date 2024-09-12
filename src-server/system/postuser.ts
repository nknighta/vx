import {Prisma, PrismaClient } from "@prisma/client";

interface CreateAccountDataProps {
    name: string,
    iconpath: string,
    userage: number;
    createUserFromData: boolean
    email: string
}

async function createUser ({name, iconpath, createUserFromData, userage, email}:CreateAccountDataProps) {
    const prisma = new PrismaClient();
    let includeAccount = createUserFromData == null ? true: createUserFromData;
    let postdata: Prisma.AccountCreateInput;
    if (includeAccount) {
        postdata = {
            accountname: name !== undefined ? iconpath : "/images/default.png" ,
            icon: iconpath !== undefined ? iconpath : "/images/default.png",
            user: {
                create: {
                    name: name
                }
            },
            email: email !== undefined ? email : "",
            age: userage
        }
    } else {
        postdata ={
            accountname: name !== undefined ? iconpath : "/images/default.png" ,
            icon: iconpath !== undefined ? iconpath : "/images/default.png",
            email: email !== undefined ? email : "",
            age: userage
        }
    }

    try {
        const resultPostDB = await prisma.account.create({data: postdata})
        console.log(resultPostDB)
        return {resultPostDB};
    } catch(e) {
        return e;
    }
}

export default createUser;