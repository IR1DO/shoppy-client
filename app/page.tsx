import getMe from './get-me';

const Home = async () => {
  const me = await getMe();
  console.log(me);

  return <div>Home</div>;
};

export default Home;
