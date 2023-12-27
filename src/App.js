import wallpaper from './img/illustration-article.svg';
import avatar from './img/image-avatar.webp';
import './App.css';
import fontBold from './static/Figtree-ExtraBold.ttf';
import fontSemi from './static/Figtree-SemiBold.ttf';
import fontVariable from './Figtree-VariableFont_wght.ttf';
import { useState } from 'react';


function Card({ active,id, type, date, title, description, avatar, author,onElementClick})
{

  let classActive = "cardInactive";
  if(active===Number(id)){
    classActive ="cardActive";
  }else{
    classActive ="cardInactive";
  }
  return(
  <div className={classActive} onClick={onElementClick}>
    <div className="header">
      <img className="wallpaper" src={wallpaper} alt="wallpaper" />
    </div>
    <div className="body">
      <div className="type" style={{ fontFamily: { fontBold } }}>{type}</div>
      <div className="date" style={{ fontFamily: { fontSemi } }}>Published: {date}</div>
      <div className="title" style={{ fontFamily: { fontBold } }}>{title}</div>
      <div className="description" style={{ fontFamily: { fontVariable } }}>{description}</div>
      <div className="author" style={{ fontFamily: { fontBold } }}>
        <img className="avatar" src={avatar} alt="avatar" />
        {author}
      </div>
    </div>
  </div>
  );
}

function App() {
  const [active, setActive] = useState(null);

  function handleClick(i)
  {
    setActive(i);
  }


  return (
    <div className="App" >
      <header className="main" >
      <Card active={active} id="0" onElementClick={()=>handleClick(0)} type="Learning" date="21 Dec 2023" title="HTML & CSS foundations" description="These languages are the backbone of every website, defining structure, content, and presentation. " avatar={avatar} author="Greg Hooper"/>
      </header>
    </div>
  );
}

export default App;
