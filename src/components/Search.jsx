function AnimalSearch({ placeholder, className, search }) {
    const handleInputChange = async (e) => {
        const q = e.target.value;
        search(q);
    };
    return (
        <>
            <input
                type="search"
                placeholder={placeholder}
                className={className}
                onChange={handleInputChange}
            />
        </>
    );
}

export default AnimalSearch;