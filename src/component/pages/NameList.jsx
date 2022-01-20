import React, { useState, useEffect } from "react";
import NameListItem from "./NameListItem";

function NameList() {

  const [loadData, setLoadData] = useState(new Date());

  const [nameList, setNameList]  = useState([
    {
      id: 1,
      name: {
        title: "mr",
        first: "brad",
        last: "gibson",
      },
      location: {
        city: "kilcoole",
      },
      email: "brad.gibson@example.com",
      dob: {
        date: "1993-07-20T09:44:18.674Z",
        age: 26,
      },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
      },
    },

    {
      id: 2,
      name: {
        title: "mrs",
        first: "kulani",
        last: "gamage",
      },
      location: {
        city: "kilcoole",
      },
      email: "kulani.gamage@example.com",
      dob: {
        date: "1991-04-20T09:44:18.674Z",
        age: 26,
      },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/women/52.jpg",
      },
    },

    {
      id: 3,
      name: {
        title: "mr",
        first: "gayan",
        last: "gamge",
      },
      location: {
        city: "kilcoole",
      },
      email: "gayan.gamage@example.com",
      dob: {
        date: "1991-01-30",
        age: 26,
      },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/men/1.jpg",
      },
    },
  ]);

//useeffect 
  useEffect(()=>{

    fetch("https://randomuser.me/api").then((response)=>{

    return response.json();

    }).then(responseData => {

      setNameList(nameList=>[...nameList, responseData.results[0]]);

    });

  },[loadData]);



  const nameListComponent = () => {
    return nameList.map((aName) => {
      return (
        <NameListItem
          key={aName.id}
          name={
          aName.name.first + " " + aName.name.last
          }
          city={aName.location.city}
          email={aName.email}
          birthday={aName.dob.date + " " + aName.dob.age}
          avatar={aName.picture.medium}
        />
      );
    });
  };

  const addUserHandler =()=>{

    setLoadData(new Date());
/*     const newUser = {
      id: new Date(),
      name: {
        title: "mr",
        first: "Christina",
        last: "Powell",
      },
      location: {
        city: "kilcoole",
      },
      email: "christina.powell@example.com",
      dob: {
        date: "1991-01-30T09:44:18.674Z",
        age: 26,
      },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/men/84.jpg",
      },
    };

    //setNameList((nameList) =>nameList.concat(newUser));

    // spread operator

    setNameList((nameList) =>[...nameList, newUser]); */

  };

  return (
    <React.Fragment>
      <div className="container mt-4">
        <button className="btn btn-primary mb-2" onClick={addUserHandler}>Add Name</button>
        <ul className="list-group">{nameListComponent()}</ul>
      </div>
    </React.Fragment>
  );
}

export default NameList;
