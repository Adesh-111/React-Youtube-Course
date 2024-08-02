import PropTypes from "prop-types";

function List(props) {


    // fruits.sort((a,b) => a.name.localeCompare(b.name));

    // fruits.sort((a,b) => a.calorie - b.calorie);

    // const lowCalFruits = fruits.filter(fruit => fruit.calorie < 100);

    const items = props.items;
    const category = props.category;

    const listItems = items.map(item => <li key={item.id}>
        {item.name} : {item.calorie}</li>);


    return (
        <>
            <h1 className="list-category">{props.category}</h1>
            <ul className="list-items">
                {listItems}
            </ul>
        </>

    )
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calorie: PropTypes.number
    }))
}

List.defaultProps = {
    category: "Category",
    items: [],
}

export default List;