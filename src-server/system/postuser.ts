import {Prisma, PrismaClient } from "@prisma/client";

interface CreateAccountDataProps extends PrismaClient {
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
            accountname: "",
            icon: iconpath !== undefined ? iconpath : "/images/default.png",
            user: {
                create: {
                    name: name
                }
            },
            email: "",
            age: userage
        }
    } else {
        postdata ={
            accountname: "",
            icon: "",
            email: ""
        }
    }

    try {
        const resultPostDB = await prisma.account.create({data: postdata})
        return {resultPostDB};
    } catch(e) {
        return e;
    }
}

export {createUser};