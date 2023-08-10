const InternalServerErr: string = "Internal server error";
const Unauthorized: string = "Unauthorized";
const notFound = (topic?: string): string =>
    `${topic ? topic + " " : ""}not found`;

export const errMsg = (msg?: string) => ({
    // Internal Server Error
    ise: InternalServerErr,
    // Not Found
    nf: notFound(msg),
    // Custom Message
    custom: msg!,
    // Unauthorized
    ua: Unauthorized,
});
