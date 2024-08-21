import styled from "styled-components";
import React from 'react';
import { useSelector } from "react-redux";
import { MdDeleteForever, MdHandyman } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {
  const data = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    console.log("Removing user with id:", id);
    dispatch(removeUser(id))
  };
  return (<Wrapper>

    <ul>
      {data.map((item) => (
        <li key={item.id}>
          {item.name}
          <button className="btn-delete" onClick={() => handleRemove(item.id)}>
            <MdDeleteForever className="delete-icon" />
          </button>
        </li>
      ))}
    </ul>
  </Wrapper>
  );
}
const Wrapper = styled.section`
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;

    &:first-child {
      border-top: 1px solid #eee;
    }
 .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
      @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    } 
  }
`;


export default DisplayUsers
