import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import { getData } from '../../redux/Products/action'

export const Product = () => {
    //const { id } = useParams()
    const data = useSelector((store) => store.AppReducer.data)
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const loaction = useLocation()

    useEffect(() => {
        if (data.length === 0 || loaction.search) {
            const sortBy = searchParams.get('sortBy')
            let getParams = {
                params: {
                    category: searchParams.getAll('Category'),
                    _order: sortBy
                }
            }
            dispatch(getData(getParams))
        }
    }, [loaction.search])

    // useEffect(() => {
    //     dispatch(getData())
    // }, [])

    console.log("data", data)

    // console.log('id', id)

    return (
        <div>Product</div>
    )
}
