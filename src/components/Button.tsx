interface ButtonProps {

  children: string
  icon?: string
  url: string
  
}

function Button(props: ButtonProps){

  return (

    <a className="w-max mb-3" href={ props.url } rel="noreferrer" target="_blank">
      <button className="w-max rounded-md px-4 pt-2 pb-1 border-2 border-gray-700 focus:outline-none focus:ring-4 ring-gray-700">
        { props.children }
        { props.icon ?
          <img
            alt="GitHub logo"
            className="inline opacity-80 ml-3 mb-1"
            src={ props.icon }
          /> :
          null
        }
      </button>
    </a>

  );

}

export default Button;

