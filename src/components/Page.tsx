function Page(props: any){

  return (
    <div className="grid grid-cols-1 gap-8">
      <h1 className="font-bold text-5xl">{ props.title }</h1>
      <p className="col-start-1 col-span-full mb-4 sm:w-2/3 lg:w-1/2 xl:mb-6">Here's some text.</p>
    </div>
  );

}

export default Page;

