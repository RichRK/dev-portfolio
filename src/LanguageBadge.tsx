function LanguageBadge(props: any){

  const bgColour = ( language: string ): string => {
    switch ( language ) {
      default:
      case "C#":
        return "bg-blue-500";
      case "jQuery":
        return "bg-pink-500";
      case "Python":
        return "bg-green-500";
      case "Vue":
        return "bg-purple-500";
    }
  }

  return (
    <p className={`absolute top-2 right-4 ${ bgColour( props.language ) } text-gray-100 rounded-md px-2 py-1 text-sm`}>
      { props.language }
    </p>
  );

}

export default LanguageBadge;

