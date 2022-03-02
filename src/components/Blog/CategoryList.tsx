import React, { FunctionComponent, ReactNode } from 'react'
import { Link } from 'gatsby'

import styled from '@emotion/styled'


export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}

type CategoryItemProps = {
  active: boolean;
}

type GatsbyLinkProps = {
  children: ReactNode;
  className?: string;
  to: string;
} & CategoryItemProps



// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
)) <CategoryItemProps>`
    display: inline-flex;
    align-items: center;
    margin: 5px;
    border-radius: 10px;

    font-weight: 700;
    color: ${({ active }) => (active ? '#FFFFFF' : '#868E96')};
    background: ${({ active }) => (active ? '#ADB5BD' : '#DEE2E6')};
  
    &:last-of-type {
        margin-right: 0;
      }

`

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <CategoryListWrapper>
      <Header>
        <Title>
          Blog
        </Title>
      </Header>
      <CategoryBox>
        {Object.entries(categoryList).map(([name, count]) => (
          <CategoryItem
            to={`/blog/?category=${name}`}
            active={name === selectedCategory}
            key={name}
          >
            <CategoryText>
              {name} {count}
            </CategoryText>
          </CategoryItem>
        ))}
      </CategoryBox>

    </CategoryListWrapper>
  )
}

export default CategoryList


const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.div`
  line-height: 50px;
  width: 160px;    
  font-size: 30px;

  border-bottom: solid;
`

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 20px auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`

const CategoryText = styled.span`
  padding: 6px 14px 4px 14px;
  font-size: 12px;
  line-height: 14px;
  transition: all 300ms ease-out;
`;

const CategoryBox = styled.div`
  margin: 15px;
`