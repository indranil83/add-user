import styled from "styled-components";
import React from 'react'
import {useSelector} from "react-redux"
import { MdDeleteForever, MdHandyman } from 'react-icons/md';
import {useDispatch} from 'react-redux';
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {
    const dispatch = useDispatch();
    const data=useSelector((state)=> state.users);
    
    const handleRemove = (id) => {
        console.log("Removing user with id:", id);
        dispatch(removeUser(id))};
    return (<Wrapper>
       
        <ul>
        {data.map((item,id)=>(
             <li key={id}>
                {item}
                <button className="btn-delete" onClick={()=>handleRemove(item.id)}>
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

    .btn-delete {
      margin-left: auto; /* Pushes the delete button to the end */
      background: none;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
    }

    .delete-icon {
      font-size: 1.5rem;
      color: #ff0000; /* Adjust the color as needed */
    }
  }
`;


export default DisplayUsers
