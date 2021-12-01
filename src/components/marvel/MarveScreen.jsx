import React from 'react'
import { HeroList } from '../hero/HeroList'

export const MarveScreen = () => {
    return (
        <div>
            <h1>MarveScreen</h1>
            <hr />
            <HeroList
                publisher={'Marvel Comics'}
            />
        </div>
    )
}
