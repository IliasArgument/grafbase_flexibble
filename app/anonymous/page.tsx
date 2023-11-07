import React from 'react'

type MyObjectType = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

const Anonymous = async (props: any) => {
    return (
        <div>
            <h1>Todos User</h1>
        </div>
    )
}

export default Anonymous;
