import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    VALID_USER:{
        USERNAME:'standard_user',
        PASSWORD:'secret_sauce'
    },    
    INVALID_USER:{
        USERNAME:'INVALID',
        PASSWORD:'INVALID'
    }
}

export const USERDATA = {
    USER:{
        Name:'Victor',
        LastName:'Garcia',
        Zip:'78570'
    }
    }
