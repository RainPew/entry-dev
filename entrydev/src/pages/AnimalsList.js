/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react'
import { Input } from 'antd'
import { useQuery, useMutation } from '@apollo/client'
import { GET_ANIMALS} from '../gql/mutation';


export default function AnimalsList() {
    const [search, setSearch] = useState('');
    const { error, data, loading } = useQuery(GET_ANIMALS);

    if (loading) return <div>Loading ...</div>

    if (error) return <div>{error.message}</div>
    return (
        <div className='container mt-5'>
            <label className='mr-3' htmlFor="">search:</label>
            <Input.Search
                className='mb-4'
                type="text"
                onChange={(event) => {
                    setSearch(event.target.value)
                }}
            />
            <div className='row'>
                {data.animals.filter((ani) => {
                    if (search == "") {
                        return ani
                    } else if (ani.name.toLowerCase().includes(search.toLowerCase())) {
                        return ani
                    }
                }).map((ani, index) => {
                    return (
                        <div className='col-4 mt-3'>
                            <div className="card p-3">
                                <img src="https://picsum.photos/id/237/200/300" alt="" style={{ width: 100, height: 100, borderRadius: 5 }} />
                                <h1>Name: {ani.name}</h1>
                                <h3>Age: {ani.age}</h3>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )


}
