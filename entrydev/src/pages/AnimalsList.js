import React from 'react'
import { useQuery, gql, useMutation } from '@apollo/client'

const GET_ANIMALS = gql`
query {
    animals{
        id
        name
        age
    }
  }
`

export default function AnimalsList() {
    const { error, data, loading } = useQuery(GET_ANIMALS);

    if (loading) return <div>Loading ...</div>

    if (error) return <div>{error.message}</div>

    return <div>
        {data.animals.map((ani, index) => {
            return <div key={index}>
                <div className="card">
                    <img src="https://picsum.photos/id/237/200/300" alt="" style={{width: 100, height: 100}} />
                    <h1>Name: {ani.name}</h1>
                    <h3>Age: {ani.age}</h3>
                </div>
            </div>

        })}
    </div>


}
