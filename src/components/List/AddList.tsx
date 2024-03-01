import React, { useState } from 'react'
import { Item } from '../../store/type';
import styled from 'styled-components';

interface Props {
  items : Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const AddList = ({ items, setItems }: Props) => {

  const [nextId, setnextId] = useState(1);
  const [content, setContent] = useState("");
  const changeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  }

  const ClickButton = () => {
    setItems([...items, {id:nextId, content}]);
    setContent("");
    // console.log(content)
    setnextId(nextId + 1);
    // console.log(nextId)
  }

  return (
    <Container>
      <ContentInput type='text' placeholder='오늘의 할 일' value={content} onChange={changeContent} />
      <AddBtn onClick={ClickButton}>ADD</AddBtn>
    </Container>
  )
}

export default AddList;

const Container = styled.div`
  padding: 10px;
`

const ContentInput = styled.input`
  outline: none;
  font-size: 16px;
  font-weight: 700;
  margin-right: 10px;
`;

const AddBtn = styled.button`
  background-color: #333;
  color: #fff;
  border: 3px solid #fff;
  border-radius: 5px;
`;