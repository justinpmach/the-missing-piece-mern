function LandingPage() {
  // useEffect(() => {
  //   if (isError) {
  //     console.log(message);
  //   }

  //   if (!user) {
  //     navigate('/login');
  //   } else {
  //     dispatch(getGoals());

  //     return () => {
  //       dispatch(reset());
  //     };
  //   }
  // }, [user, navigate, isError, message, dispatch]);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <section
        id='hero'
        className='pt-32 grid grid-cols-2 h-[80vh] bg-slate-300/20'
      >
        <div className='z-20 text-right flex flex-col justify-center'>
          <h1 className='text-8xl'>Piece</h1>
          <h6 className='text-xl'>
            Connect, Dream, and Discover - Your Next Adventure Awaits
          </h6>
        </div>
        <div className='border border-blue-500 flex justify-center items-center'>
          <div className='bg-white h-48 w-full max-w-md rounded-md shadow-md'>
            Create a bucket list
          </div>
        </div>
      </section>
      <section id='about' className='grid grid-cols-2 h-[80vh] bg-slate-300/20'>
        <div className='border border-blue-500 flex justify-center items-center'>
          <div className='bg-white h-48 w-full max-w-lg rounded-md shadow-md'>
            Create a bucket list
          </div>
        </div>
        <div className='pt-48 border border-blue-500 flex justify-center items-start'>
          <div className='bg-white h-48 w-full max-w-lg rounded-md shadow-md'>
            Create a bucket list
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
