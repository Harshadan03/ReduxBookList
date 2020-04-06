import { combineReducers } from 'redux';
import selectBook from './selectBook'
import books from './books'

export default combineReducers({
    books,
    selectBook
})