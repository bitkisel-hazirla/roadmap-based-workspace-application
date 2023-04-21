export const SearchBar = (props) => {
    const {onChange,placeholder='Search...'} = props;
    return (
        <input placeholder={placeholder} onChange={onChange} className="rounded-lg px-4 py-1" type="search"/>
    )
}