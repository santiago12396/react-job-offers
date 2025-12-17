import { useId, useRef, useState } from 'react'
import styles from './SearchForm.module.css'


const Filters = Object.freeze({
    Technology: Symbol('technology'),
    Location: Symbol('location'),
    ExperienceLevel: Symbol('experienceLevel')
});

export const SearchForm = ({ onSearch, onSearchTerm }) => {

    const [isFocused, setIsFocused] = useState(false);

    const formRef = useRef(null);

    const searchId = useId();
    const technologyId = useId();
    const locationId = useId();
    const experienceLevelId = useId();

    // const handleSubmit = event => {
    //     event.preventDefault();

    //     const formData = new FormData(event.target);

    //     const filters = {
    //         search: formData.get(searchId),
    //         technology: formData.get(technologyId),
    //         location: formData.get(locationId),
    //         experienceLevel: formData.get(experienceLevelId),
    //     }

    //     console.log({filters})

    //     onSearch(filters);
    // }

    const handleSearchChange = event => {
        const searchTerm = event.target.value;
        onSearchTerm(searchTerm);
    }

    const handleFilterChange = (event, filteredField) => {
        const fieldValue = event.target.value;

        const formData = new FormData(formRef.current);

        const filters = {
            technology: formData.get(technologyId),
            location: formData.get(locationId),
            experienceLevel: formData.get(experienceLevelId),
        }

        const filtersResult = {
            ...filters,
            [filteredField.description]: fieldValue
        }

        onSearch(filtersResult);
    }

    const handleOnFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <section className={styles.jobsSearch}>
            <h1>Encuentra tu próximo trabajo</h1>
            <p>Explora miles de oportunidades en el sector tecnológico.</p>

            <form ref={formRef} onSubmit={event => event.preventDefault()} id="empleos-search-form" role="search">

            <div className={`${styles.searchBar} ${isFocused ? styles.focused : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                </svg>
                
                <input
                    name={searchId}
                    onChange={handleSearchChange}
                    onFocus={handleOnFocus}
                    onBlur={handleBlur}
                    id="empleos-search-input" type="input"
                    placeholder="Buscar trabajos, empresas o habilidades"
                />
            </div>

            <div className={styles.searchFilters}>
                <select onChange={event => handleFilterChange(event, Filters.Technology)} name={technologyId} id="filter-technology">
                    <option value="">Tecnología</option>
                    <optgroup label="Tecnologías populares">
                        <option value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="react">React</option>
                        <option value="nodejs">Node.js</option>
                    </optgroup>
                    <option value="java">Java</option>
                    <hr />
                    <option value="csharp">C#</option>
                    <option value="c">C</option>
                    <option value="c++">C++</option>
                    <hr />
                    <option value="ruby">Ruby</option>
                    <option value="php">PHP</option>
                </select>

                <select onChange={event => handleFilterChange(event, Filters.Location)} name={locationId} id="filter-location">
                    <option value="">Ubicación</option>
                    <option value="remoto">Remoto</option>
                    <option value="cdmx">Ciudad de México</option>
                    <option value="guadalajara">Guadalajara</option>
                    <option value="monterrey">Monterrey</option>
                    <option value="barcelona">Barcelona</option>
                </select>

                <select onChange={event => handleFilterChange(event, Filters.ExperienceLevel)} name={experienceLevelId} id="filter-experience-level">
                    <option value="">Nivel de experiencia</option>
                    <option value="junior">Junior</option>
                    <option value="mid">Mid-level</option>
                    <option value="senior">Senior</option>
                    <option value="lead">Lead</option>
                </select>
            </div>
            </form>

            <span id="filter-selected-value"></span>
        </section>
    )
}
