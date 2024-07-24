import { useState } from 'react';

const App = () => {
  const [addValue, setAddvalue] = useState('');
  const [list, setList] = useState([]);
  const handleAdd = () => {
    if (list?.some((item) => item.id === addValue?.replace(' ', ''))) {
      alert('Bạn đã thêm trùng công việc');
      setAddvalue('');
    } else {
      setList((e) => [...e, { id: addValue.replace(' ', ''), job: addValue }]);
      setAddvalue('');
      alert('Bạn đã thêm thành công công việc');
    }
  };
  const removeAdd = (id) => {
    console.log(id);
    setList((pre) => pre.filter((item) => item.id !== id));
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        <input
          type="text"
          className="outline-none h-[30px] w-[280px] border border-blue-600"
          value={addValue}
          onChange={(e) => setAddvalue(e.target.value)}
        />
        <button
          type="button"
          className="outline-none ml-3 border w-[70px] h-[30px] border-blue-600 bg-blue-700 text-white rounded-md"
          onClick={handleAdd}
        >
          Add
        </button>

        <div className="listText mt-5">
          <h3>Danh sách nhập</h3>
          <div>
            {list?.map((item) => {
              return (
                <li
                  className="flex items-center justify-between cursor-pointer"
                  key={item.id}
                >
                  <div> {item.job}</div>{' '}
                  <span onClick={() => removeAdd(item.id)}>X</span>
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
