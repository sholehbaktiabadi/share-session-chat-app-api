import lodash from "lodash";
export const eventMapper = (user1: string, user2: string): string => {
    const arrangeChannel: string[] = [user1, user2];
    const [u1, u2] = lodash.orderBy(arrangeChannel, [], ["asc"]);
    const base64 = Buffer.from(`${u1}-separator-${u2}`).toString('base64')
    return base64;
};
