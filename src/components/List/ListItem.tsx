import React from 'react'
import { Item } from '../../store/type';
import styled from 'styled-components';

interface Props {
  items : Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const ListItem = ({ items, setItems }: Props) => {

  const clickDelete = (data:Item) => {
    setItems(items.filter((item:Item) => item.id !== data.id))
  };


  return (
    <div>
      { items.map((data:Item) => {
        return(
          <Wrapper key={data.id}>
            <TodoContent>{data.content}</TodoContent>
            <DeleteBtn onClick={() => clickDelete(data)}>DELETE</DeleteBtn>  
          </Wrapper>
        )
      })}
    </div>
  )
}

export default ListItem;

const Wrapper = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
`;

const TodoContent = styled.div`
  color: #fff;
  padding: 10px;
`;

const DeleteBtn = styled.button`
  height: 40px;
  background-color: #333;
  color: #fff;
  border: 3px solid #fff;
  border-radius: 5px;
`;