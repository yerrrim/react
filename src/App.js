import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [userInfo, setUserInfo] = useState({
    name: '홍길동'
  })
  const [isEditing, setIsEditing] = useState({
    name: false,
  })

  const handleChange = (field, value) => {
    setUserInfo((prev)=>({...prev, [field]: value}));
  }

  const handleEditToggle = (field) => {
    setIsEditing((prev)=>({...prev, [field]:!prev[field]}))
  }
  
  return (
    <div>
      <header>
        <h3>본인 소개 페이지</h3>
      </header>
      <main>
        <div>
          <label>이름: </label>
          {isEditing.name ? (
            <input value={userInfo.name}
            onChange={(e)=>{handleChange('name', e.target.value);
            }}/>
          ):(
            <span>{userInfo.name}</span>
          )}
          <button onClick={()=>handleEditToggle('name')}>{isEditing.name ? '저장':'수정'}</button>
        </div>
        {/* <div>
          <label>이름: </label>
          <input value={userInfo.name}
          onChange={(e)=>{
            return handleChange('name', e.target.value);
          }}/>
          <button>수정</button>
        </div> */}
      </main>
    </div>
  );
}

export default App;
