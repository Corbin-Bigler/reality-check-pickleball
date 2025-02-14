import { Status } from "./Status";

export enum AppError {
    UserAlreadyExists = "UserAlreadyExists",
    InvalidCredentials = "InvalidCredentials",
    Unauthorized = "Unauthorized",
    ServerError = "ServerError",
    NotEnoughPlayers = "NotEnoughPlayers",
    InvaildRequest = "InvaildRequest",
    CanNotTie = "CanNotTie",
    Unknown = "Unknown",
}

export function appError(error: unknown): AppError {
    let errorString = error as string;
    if (Object.values(AppError).includes(errorString as AppError)) {
        return errorString as AppError;
    } else {
        switch (error) {
            case Status.invalidRequest: return AppError.InvaildRequest
            case Status.unauthorized: return AppError.Unauthorized
            case Status.internalError: return AppError.ServerError
            case Status.notEnoughPlayers: return AppError.NotEnoughPlayers
            default: return AppError.Unknown
        }
    }
}
export function errorMessage(error: AppError): string {
    switch (error) {
        case AppError.UserAlreadyExists:
            return "This email is already in use";
        case AppError.InvalidCredentials:
            return "Invalid credentials";
        case AppError.Unauthorized:
            return "You are not authorized to run this command";    
        case AppError.NotEnoughPlayers:
            return "There are not enough players";    
        case AppError.CanNotTie:
            return "Ties are not allowed";    
        case AppError.ServerError:
            return "A server error has occurred, please try again";    
        default:
            return "An unknown error has occurred";
    }
}
