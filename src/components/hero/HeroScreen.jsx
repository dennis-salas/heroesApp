import React, { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from '../../helpers/getHeroById';

export const HeroScreen = () => {

    const { heroeId } = useParams();
    const navigate1 = useNavigate()

    const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

    const handleReturn = () => {
        navigate1(-1)
    }

    if (!hero) {
        return <Navigate to="/" />
    }

    const { id, alter_ego, superhero, publisher, first_appearance, characters } = hero

    const imagePath = `/assets/${id}.jpg`
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={imagePath} alt={superhero} className="img-thumbnail animate__animated animate__fadeInLeft" />
            </div>
            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group">
                    <li className="list-group-item"><b>ALter ego:</b> {alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b> {publisher}</li>
                    <li className="list-group-item"><b>First_appearance:</b> {first_appearance}</li>
                </ul>
                <br />
                <h5>Characters</h5>
                <p>{characters}</p>
                <button
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Regresar
                </button>
            </div>
        </div>
    )
}
