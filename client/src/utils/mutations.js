import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            email
            string
        }
    }
`

export const ADD_USER = gql`
    mutation createUser($username: String!, $email: String!, $password: String!) {
        createUser(username: $username, email: $email, password: $password) {
            token
            username
            email
            string
        }
    }
`

export const SAVE_BOOK = gql`
    mutation saveBook($bookdata : bookInput!) {
        saveBook(bookData: $bookData) {
            _id
            bookInput
        }
    }
`

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
        removeBook(bookId: $bookId) {
            bookId
        }
    }
`