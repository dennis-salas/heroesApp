import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../helpers/getHeroesByName';
import queryString from 'query-string'
import { useForm } from '../../hook/useForm';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search)

    const [values, handleInputChange] = useForm({
        searchText: q
    });

    const { searchText } = values;
    const heroesFileted = useMemo(() => getHeroesByName(q), [q]);

    const handelSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
    }
    return (
        <div>
            <h1>Búsquedas</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr />
                    <form onSubmit={handelSearch}>
                        <input
                            type="text"
                            placeholder="Buscar un heroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <button
                            className="btn btn-outline-primary mt-1"
                            type="submit"
                        >
                            Buscar...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />

                    {
                        (q === '')
                            ? <div className="alert alert-info">Buscar un héroe</div>

                            : heroesFileted.map(hero => (
                                <HeroCard
                                    key={hero.id}
                                    {...hero}
                                />
                            ))
                    }
                    {
                        (heroesFileted.length === 0) && <div className="alert alert-danger">No hay resultados: {q}</div>
                    }
                </div>
            </div>
        </div>
    )
}
