"use client";
import React, { createContext, useState } from "react";

export const UsersContext = createContext();
export const PostProvider = ({ children }) => {
  const [togle, setTogle] = useState(false);
  const [chairNumber, setChairNumber] = useState(0);

  const [togleIndex, setTogleIndex] = useState(-1); // Initialize to -1 to indicate no button is selected

  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "tharadon",
      lastName: "phithak",
      phoneNumber: "0936407666",
      chairId: 1,
      date:'02/10/2023'
    },
    {
      id: 2,
      firstName: "nopadon",
      lastName: "jaidee",
      phoneNumber: "097560097",
      chairId: 3,
      date:'02/10/2023'
    },
  ]);

  const [events, setEvents] = useState([
    {
      id: 1,
      eventName: "ตัน & ตัน",
      description: "........",
      limitChair: 20,
      date:'10/10/2023',
      active:true,
      image:'https://image.bangkokbiznews.com/uploads/images/contents/w1024/2022/07/m0pPFE8f8K4c92Ewc0fZ.webp'
    },
    {
      id: 2,
      eventName: "รวมมิตร เฟส",
      description: "........",
      limitChair: 50,
      date:'09/09/2023',
      active:false,
      image:'https://mpics.mgronline.com/pics/Images/566000001208701.JPEG'
    }
  ]);

  const [chair, setChair] = useState([
    {
      "id": 1,
      "active": false
    },
    {
        "id": 2,
        "active": false
    },
    {
      "id": 3,
       "active": false
    },
    {
      "id": 4,
       "active": false
    },
    {
      "id": 5,
       "active": false
    },
    {
      "id": 6,
       "active": false
    },
    {
      "id": 7,
       "active": false
    },
    {
      "id": 8,
       "active": false
    },
    {
      "id": 9,
       "active": false
    },
    {
      "id": 10,
       "active": false
    },
    {
        "id": 11,
        "active": false
      },
      {
          "id": 12,
          "active": false
      },
      {
        "id": 13,
         "active": false
      },
      {
        "id": 14,
         "active": false
      },
      {
        "id": 15,
         "active": false
      },
      {
        "id": 16,
         "active": false
      },
      {
        "id": 17,
         "active": false
      },
      {
        "id": 18,
         "active": false
      },
      {
        "id": 19,
         "active": false
      },
      {
        "id": 20,
         "active": false
      }
  ]);
 

  const addEvent = (newUser) => {
    setEvents([...events, newUser]);
  };

  const addUsers = (newUser) => {
    setUsers([...users, newUser]);
  };
  const addChair = (newChair) => {
    setChair([...chair, newChair]);
  };
  const updateChair = (id,updateChair) => {
    setChair(prevChair => {
      return prevChair.map(chairs => {
        if(chairs.id === id) {
          return {...chairs, ...updateChair}
        }
        return chairs
      })
    })
  };
  const deleteChair = (id) => {
    const updateChair = chair.filter((chairNO) => chairNO.id !==id );
    setChair(updateChair)
  };

  return (
    <UsersContext.Provider value={{deleteChair,updateChair,chairNumber,setChairNumber, addChair,chair,setChair,users, addUsers,addEvent,events,togle ,setTogle ,setTogleIndex ,togleIndex}}>
      <div>{children}</div>
    </UsersContext.Provider>
  );
};
