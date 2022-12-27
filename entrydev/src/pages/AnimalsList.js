import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_ANIMALS } from '../gql/mutation';


export default function AnimalsList() {
    const { error, data, loading } = useQuery(GET_ANIMALS);

    if (loading) return <div>Loading ...</div>

    if (error) return <div>{error.message}</div>
    return (
        <div className='container mt-5'>
            <label className='mr-3' htmlFor="">search:</label>
            <input className='mb-4' type="text" />
            <div className='row'>
                    {data.animals.map((ani, index) => {
                        return (
                            <div className='col-4'>
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
