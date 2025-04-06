export default function Toolbar() {
  return (
    <menu className="h-14 bg-white  px-6 mt-5 flex justify-between items-center shrink-0 rounded-md shadow-md">
      <div className="flex items-center">
        <button className="btn btn-primary">Добавить</button>
        <button className="btn btn-primary">Удалить</button>
        <button className="btn btn-primary">Изменить</button>
      </div>
      <div className="flex items-center">
        <input type="text" className="input" placeholder="Поиск" />
        <button className="btn btn-primary">Поиск</button>
      </div>
    </menu>
  );
}
