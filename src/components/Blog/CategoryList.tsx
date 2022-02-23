import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'



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

const CategoryTitle = styled.div`
    font-size: 24px;
    font-weight: 800;
    margin-top: 100px;
    border-bottom: 20px;
`

const CategoryBox = styled.div`
    margin: 30px;
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
    <Link {...props} />
)) <CategoryItemProps>`
    margin-right: 20px;
    padding: 5px 0;
    font-size: 18px;
    font-weight: ${({ active }) => (active ? '800' : '400')};
    cursor: pointer;
  
    &:last-of-type {
        margin-right: 0;
      }
    
      @media (max-width: 768px) {
        font-size: 15px;
      }
`

const CategoryList: FunctionComponent<CategoryListProps> = function ({
    selectedCategory,
    categoryList,
}) {
    return (
        <CategoryListWrapper>
            <CategoryTitle>
                Blog
            </CategoryTitle>
            <CategoryBox>
                {Object.entries(categoryList).map(([name, count]) => (
                    <CategoryItem
                        to={`/blog/?category=${name}`}
                        active={name === selectedCategory}
                        key={name}
                    >
                        #{name}({count})
                    </CategoryItem>
                ))}
            </CategoryBox>

        </CategoryListWrapper>
    )
}

export default CategoryList