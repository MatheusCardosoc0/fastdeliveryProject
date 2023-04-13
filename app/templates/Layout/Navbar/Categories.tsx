'use client';

import { usePathname, useSearchParams } from 'next/navigation';

import Container from '../../../components/containers/Container';
import CategoriesContainer from '../../../components/containers/CategoriesContainer';
import { categories } from '../../../constants/categories';




const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
          gap-20
          NOT-SCROLL
        "
      >
        {categories.map((item) => (
          <CategoriesContainer 
            key={item.label}
            name={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;