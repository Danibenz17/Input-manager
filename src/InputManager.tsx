import { useState } from "react";
import "./App.css"

type Props = {
  level?: number;
  onDelete?: () => void;
};

const InputManager = ({ level, onDelete }: Props) => {
  const [text, setText] = useState("");
  const [children, setChildren] = useState<any[]>([]);
  
  const addChild = () => {
    const newChild = <InputManager level={level? level + 1:1} onDelete={() => deleteChild(newChild)} />;
    setChildren([...children, newChild]);
  };

  const deleteChild = (child: any) => {
    setChildren(children.filter((i) => i !== child));
  };

  return (
    <div>
      <h2>Parent {level}</h2>
      <div className="Count" >Characters in children: {text.length}</div>
      <input className="Input" value={text} onChange={(e) => setText(e.target.value)} />
      <button className="Add" onClick={addChild}>Add Child</button>
      {onDelete && <button  className="Delete" onClick={onDelete}>Delete Child</button>}
      {children}
    </div>
  );
};

export default InputManager;
