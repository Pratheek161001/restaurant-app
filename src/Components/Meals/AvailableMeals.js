import React from 'react'
import clasees from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Butter Chicken',
      description: 'Finest chicken , mouth watering flavour.',
      price: 80.00,
    },
    {
      id: 'm2',
      name: 'Chicken Tikka ',
      description: 'Smoky barbeque chicken!',
      price: 70.00,
    },
    {
      id: 'm3',
      name: 'Salad',
      description: 'Healthy ,fresh green veggies.',
      price: 30.00,
    },
    {
      id: 'm4',
      name: 'Virgin Mohito',
      description: 'fizzy... chilled...refreshing',
      price: 50.00,
    },
  ];
const AvailableMeals = () => {
    const melasList=DUMMY_MEALS.map(meal=><MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>);
  return (
    <section className={clasees.meals}>
        <Card>
        <ul>
            {melasList}
        </ul>
        </Card>
       
    </section>
  )
}

export default AvailableMeals;