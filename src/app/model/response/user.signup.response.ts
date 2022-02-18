
export interface UserResponse {
    password: string;
    email: string;
    lastname: string;
    language:string;
    firstname: string;
    _id: string;
    __v: number;
}

export interface Data {
    accessToken: string;
    user: UserResponse;
}

export interface UserSignUpResponse {
    success: boolean;
    data: Data;
    statusCode: String,
    message: String,
    error: String

}


