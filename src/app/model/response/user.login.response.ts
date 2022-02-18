

export interface Data {
    accessToken: string;
}

export interface UserLoginResponse {
    success: boolean;
    data: Data;
    statusCode:String,
    message:String,
    error:String

}


