import React from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

const BookList = ({ bk, selectBook }) => {
    return (

        <ul className="list-group ">
            {
                bk.map((book, i) => (
                    <li className="list-group-item" key={i} onClick={() => selectBook(book)} ></li>
                ))
            }
        </ul>
    )
}

const mapStateToProps = (state) => ({
    bk: state.books
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectBook }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)