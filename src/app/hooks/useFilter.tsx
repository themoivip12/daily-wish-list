import React, { useCallback, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import { useSearchParams } from "react-router-dom"
import { IUseFilter, FilterParams } from "types"
import _ from 'lodash'



const defaultFilter: FilterParams = {
    page: 0,
    pageSize: 25
}

interface Props<T> {
    initFilter?: T
    initVisible?: boolean
    onSubmit: (data: T) => void
}



export const useFilter = <T extends FilterParams>({ initFilter, initVisible, onSubmit }: Props<T>): IUseFilter => {
    const location = useLocation();
    let [searchParams, setSearchParams] = useSearchParams();
    const [filter, setFilter] = useState<T>(initFilter || defaultFilter)
    const [visible, setVisible] = useState(!!initVisible)

    const onFilter = (params: T) => {
        const data = _.pickBy(params, _.identity) as T;
        onSubmit(data);
        setSearchParams(data)
        setFilter(data)
    }

    const onClose = () => setVisible(false)
    const onOpen = () => setVisible(true)

    useEffect(() => {
        const queryParams = Object.fromEntries(searchParams.entries());
        const data = new URLSearchParams(location.search)
        console.log(123123, queryParams);

    }, [])


    return { visible, filter, onFilter, onClose, onOpen }
}
