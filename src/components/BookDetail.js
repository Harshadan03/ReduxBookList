import React, { Fragment } from 'react'
import { connect } from 'react-redux'

const BookDetail = ({ bk }) => {
    return (
        <Fragment>

            {
                bk &&

                <div>
                    <h2>Book Details Are:</h2>
                    <div className="card container mt-5 mb-10">
                        <h1 className="card-header card-header-1 name">{bk.title}</h1>
                        <div className="card-body">
                            <p className="card-p  mt-2 black-10">{bk.description} </p>
                            <p className="card-p  mt-2 black-9">Author :{bk.author} </p>
                            <p className="black-8">Pages: {bk.pages}</p>
                            <p className="black-8">Publisher: {bk.publisher}</p>
                            <p className="black-8">Price : {bk.price}</p>
                        </div>
                    </div>
                </div>
            }

        </Fragment>
    )
}

const mapStateToProps = state => ({
    bk: state.selectBook
})

export default connect(mapStateToProps)(BookDetail)