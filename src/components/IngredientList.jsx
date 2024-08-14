const IngredientList = ({ availableIngredients, addToBurger }) => {
  return (
    <ul>
      {availableIngredients.map((item, index) => (
        <li key={index} style={{ backgroundColor: item.color }}>
          {item.name}
          <button onClick={() => addToBurger(item)}>+</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
