import { LanguageBadgeProps } from '../types'

function LanguageBadge(props: LanguageBadgeProps){

  return (

    <p className="absolute top-4 right-4 bg-black bg-opacity-25 font-medium text-gray-200 rounded-md px-2 pt-2 pb-1 text-sm">
      { props.language }
    </p>

  );

}

export default LanguageBadge;

