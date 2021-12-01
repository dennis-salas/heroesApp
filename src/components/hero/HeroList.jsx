import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../helpers/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="row rows-cols-1 row-cols-md-2 row-cols-sm-1 g-3 animate__animated animate__fadeIn">
            {
                heroes.map(hero => (

                    <HeroCard key={hero.id} {...hero} />
                ))
            }
        </div>
    )
}
