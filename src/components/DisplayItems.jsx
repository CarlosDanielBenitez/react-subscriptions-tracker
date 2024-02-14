import SingleItem from "./SingleItem";

const DisplayItems = ({ subs, eliminarItem,editItem }) => {
    return (
        <>
            <h2>Subscripciones</h2>
            {
                subs.map(item => (
                    <SingleItem
                        key={item.id}
                        id={item.id}
                        type={item.type}
                        price={item.price}
                        eliminarItem={eliminarItem}
                        editItem={editItem}
                        
                    />
                ))
            }
        </>
    );
}

export default DisplayItems;