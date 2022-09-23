
const categories = [
    {title: 'Hats',
        id: 1
    },
    {title: 'Jackets',
        id: 2
    },
    {title: 'Sneakers',
        id: 3
    },
    {title: 'Women\'s',
        id: 4
    },
    {title: 'Mens',
        id: 5
    }
]


const App = () => {


  return (
      <div className="categories-container">
              {categories.map(({title}) => (
                  <div className="category-container">
                        <div className="background image"></div>
                        <div className="category-body-container">
                              <h2> {title} </h2>
                              <p> shop now </p>
                        </div>
                  </div>
              ))}
      </div>

  );
};

export default App;
