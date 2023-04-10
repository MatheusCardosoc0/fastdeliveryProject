'use client'

import axios from "axios";
import Container from "../../../components/containers/Container";
import { useEffect, useState } from "react";
import { TbMilkshake } from 'react-icons/tb'
import { MdFastfood, MdFoodBank } from 'react-icons/md'
import { CategoriesIconProps, CategoriesProps } from "../../../types/CategoriesType";



const categoriesIcons: CategoriesIconProps[] = [
  {
    icon: TbMilkshake
  },
  {
    icon: MdFastfood
  },
  {
    icon: MdFoodBank
  }
]

export default function Categories() {

  const [categories, setCategories] = useState<CategoriesProps[]>([])

  async function getCategories() {
    await axios.get('/api/categories')
      .then(response => setCategories(response.data))
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <Container>
      <div
        className="
          flex
          justify-between
          items-center
        ">
        {categories.map((category, i) => (
          <div key={category.id}>
            {categoriesIcons[i].icon()}
            {category.name || 'e'}
          </div>
        ))}
      </div>
    </Container>
  )
}