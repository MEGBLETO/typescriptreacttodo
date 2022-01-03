import React, { FC } from 'react'
import { Itask } from '../interface'



interface Props{
    task ?: Itask
}

const Todotask = ({task}: Props)  => {
    return (
        <div>
            {task?.taskName}
        </div>
    )
}

export default Todotask
