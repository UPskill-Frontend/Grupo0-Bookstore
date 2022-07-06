class AuthError extends Error {
    constructor(message: string, public statusCode: number = 401) {
        super(message);
    }
}
