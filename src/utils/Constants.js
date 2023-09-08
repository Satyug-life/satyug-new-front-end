const ENV = process.env;
export const ENVIRONMENT = {
  RAZORPAY_KEY: ENV.REACT_APP_RAZORPAY_KEY,
  MAP_key: ENV.REACT_APP_GOOGLE_API_KEY
};
export const URL_LINK = `https://www.stage-user.satyug.life/?id=`
export const FORMIK_REGEX = {
  ALPHA_REGEX: /^[A-Za-z\s]+$/,
  MOBILE_NUMBER_REGEX: /^(\+\d{1,3}[- ]?)?\d{10}$/,
  EMAIL_REGEX:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  EMAIL_REGEX_NEW:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  ADDRESS_REGEX: /^[a-zA-Z a-zA-Z0-9\n-/@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/,
  POSTAL_REGEX: /^(\d{4}|\d{10})$/,
  NUMERIC_REGEX: /^\d+$/,
};
export const GAME_TOKEN = {
  GameAccessToken: "GameAccessToken",
  GameVerifyToken: "GameVerifyToken",
  UserRegisterToken: "UserRegisterToken",
  Collectible: "collectible",
};

export const S3_BUCKET = {
  IMAGES: "https://satyug-bucket.s3.amazonaws.com/satyugImages",
  VIDEOS: "https://satyug-bucket.s3.amazonaws.com/satyugvideos",
  SHIRT: "https://satyug-bucket.s3.amazonaws.com/products/Tshirt.png",
  CAP: "https://satyug-bucket.s3.amazonaws.com/products/cap.png",
};
export const S3_BUCKET_AUDIO = {
  AFTER_GAME: "https://satyug-bucket.s3.amazonaws.com/audio/AfterGame.mp3",
  DONATE: "https://satyug-bucket.s3.amazonaws.com/audio/Donate.mp3",
  MANDIR_CONSTRUCTION:
    "https://satyug-bucket.s3.amazonaws.com/audio/MandirConstruction.mp3",
  QUIZ: "https://satyug-bucket.s3.amazonaws.com/audio/Quiz.mp3",
  SHARE: "https://satyug-bucket.s3.amazonaws.com/audio/share.mp3",
};
