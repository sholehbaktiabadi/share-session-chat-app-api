import lodash from "lodash";
export const eventMapper = (user1: string, user2: string): string => {
    const arrangeChannel: string[] = [user1, user2];
    const [u1, u2] = lodash.orderBy(arrangeChannel, [], ["asc"]);
    return `${u1}-${u2}`;
};
