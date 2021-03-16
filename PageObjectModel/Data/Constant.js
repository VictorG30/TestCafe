import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    VALID_USER:{
        USERNAME:'testuser@example.com',
        PASSWORD:'test123'
    },    
    INVALID_USER:{
        USERNAME:'INVALID',
        PASSWORD:'INVALID'
    }
}