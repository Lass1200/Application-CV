import { ListItem } from "./ListItem";
function List(props) {
    return (
      <ul>
        {props.animals.map((animal) => {
          return <ListItem key={animal} animal={animal} />;
        })}
      </ul>
    );
  }

export {List}