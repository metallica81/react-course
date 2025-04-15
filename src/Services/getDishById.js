export const getDishById = async (dishId) => {
    const result = await fetch(`http://localhost:3001/api/dishes?dishId=${dishId}`)

    return result.json();
};
