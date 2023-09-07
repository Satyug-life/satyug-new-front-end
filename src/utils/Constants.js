const ENV = process.env;
export const ENVIRONMENT={
    RAZORPAY_KEY:ENV.REACT_APP_RAZORPAY_KEY,
    MAP_key: ENV.REACT_APP_GOOGLE_API_KEY,
}
export const FORMIK_REGEX = {
    ALPHA_REGEX:  /^[A-Za-z\s]+$/,
    MOBILE_NUMBER_REGEX: /^(\+\d{1,3}[- ]?)?\d{10}$/,
    EMAIL_REGEX: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    EMAIL_REGEX_NEW:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ADDRESS_REGEX: /^[a-zA-Z a-zA-Z0-9\n-/@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/,
}
export const GAME_TOKEN = {
    GameAccessToken: 'GameAccessToken',
    GameVerifyToken: 'GameVerifyToken',
    UserRegisterToken: 'UserRegisterToken',
    Collectible: 'Collectible'
};


