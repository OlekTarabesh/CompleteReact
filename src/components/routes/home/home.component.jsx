import Directory from '../../directory/directory.component.jsx';

const Home = () => {

  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageURL: 'https://static.cropp.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/0/7/0772K-88X-050-1-465151_10.jpg' 
    },
    {
      id: 2,
      title: 'Jackets',
      imageURL: 'https://img.freepik.com/premium-photo/hanger-stand-with-warm-jackets-winter-jackets-with-fur-collar-hang-on-white-wooden-hangers_99272-899.jpg' 
    },
    {
      id: 3,
      title: 'Sneakers',
      imageURL: 'https://static.goldengoose.com/image/upload/q_auto/v1/Asset/E-Commerce/PLPaperture/G41/woman/apertura_Wsnk.webp' 
    },
    {
      id: 4,
      title: 'Womans',
      imageURL: 'https://www.footasylum.com/images/articles/MegaMenu/FA_WK36_WOMENS_CLOTHING_746x424px.jpg' 
    },
    {
      id: 5,
      title: 'Mans',
      imageURL: 'https://manofmany.com/wp-content/uploads/2021/07/Best-Australian-Stores-Australia-1067x800.jpg' 
    },
  ];

  return (
    <Directory categories={categories} />
  );
}

export default Home; 