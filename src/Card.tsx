import logo from './logo.svg';

function Card(props: any){

  return (
    <div className="bg-gray-200 rounded-lg text-gray-700">
      <img src={ logo } alt="Screenshot of the project" />
      <p className="p-5 font-bold">{props.title}</p>
    </div>
  );

}

Card.defaultProps = { title: "Title" };

export default Card;

