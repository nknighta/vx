import { PrismaClient } from "@prisma/client";

const prismadb = new PrismaClient();

const addedUserDataSearch = async (name: string, email: string) => {
    const user = await prismadb.account.findMany(
        {
            where: {
                accountname: name,
                email: email,
            }
        }
    );
    if (user) {
        return true;
    } else {
        return false;
    }
}

export {addedUserDataSearch};