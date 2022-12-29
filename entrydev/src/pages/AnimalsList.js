/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from 'react'
import { Input } from 'antd'
import { useQuery, useMutation } from '@apollo/client'
import { GET_ANIMALS } from '../gql/Query';


export default function AnimalsList() {
    const [search, setSearch] = useState('');
    const { error, data, loading } = useQuery(GET_ANIMALS);
    const [list, setList] = useState([]);
     

    
    function DeleteList (_id){
        console.log(_id);
        var newList = list?.filter((l) => l._id !== _id);
        setList([...newList]);
    }
    
    useEffect(() => {
        if(data) {
            setList(data.animals)
        }
    }, [data])

    if (loading) return <div>Loading ...</div>;
    
    if (error) return <div>{error.message}</div>;
    

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
                {list?.filter((ani) => {
                    if (search === "") {
                        return ani
                    } else if (ani.name.toLowerCase().includes(search.toLowerCase())) {
                        return ani
                    }
                }).map((ani, index) => {
                    return (
                        <div className='col-4 mt-3' key={ani._id}>
                            <div className="card p-3">
                                <img src="https://picsum.photos/id/237/200/300" alt="" style={{ width: 100, height: 100, borderRadius: 5 }} />
                                <h1>Name: {ani.name}</h1>
                                <h3>Age: {ani.age}</h3>
                                <button className='btn btn-success'>Edit</button>
                                <button className='btn btn-danger mt-2' onClick={() => {
                                    DeleteList(ani._id)
                                }}>Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )


}
