import { connect } from 'react-redux';
import { Component } from 'react';
import Layout from './../components/layout';
import Card from './../components/card';
import { getRecipe } from '../actions';

const mapStateToProps = (state) => {
  return {
    inputFields: state.inputFields,
    requestRecipe: state.requestRecipe,
    requestUser: state.requestUser,
  };
};

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from reducers.

const mapDispatchToProps = (dispatch) => {
  return {
    getRecipe: () => dispatch(getRecipe()),
  };
};

class Index extends Component {
  componentDidMount() {
    this.props.getRecipe();
    console.log(this.props);
  }
  render() {
    const recipes = this.props.requestRecipe.recipe;
    return (
      <Layout>
        <h1>Caribbean Recipes</h1>
        <div className='card-list'>
          {this.props.requestRecipe.isPending === false
            ? Object.keys(recipes).length > 0
              ? recipes
                  .filter((recipe) =>
                    recipe.tags.join(' ').toLowerCase().includes('caribbean')
                  )
                  .map((recipe) => (
                    <Card
                      title={recipe.title}
                      tags={recipe.tags}
                      imgURL={recipe.imgURL}
                      description={recipe.description}
                      _id={recipe._id}
                    />
                  ))
              : ''
            : ''}
        </div>
        <h1>Burger Recipes</h1>
        <div className='card-list'>
          {this.props.requestRecipe.isPending === false
            ? Object.keys(recipes).length > 0
              ? recipes
                  .filter((recipe) =>
                    recipe.tags.join(' ').toLowerCase().includes('burger')
                  )
                  .map((recipe) => (
                    <Card
                      title={recipe.title}
                      tags={recipe.tags}
                      imgURL={recipe.imgURL}
                      description={recipe.description}
                      _id={recipe._id}
                    />
                  ))
              : ''
            : ''}
        </div>
        <h1>Drink Recipes</h1>
        <div className='card-list'>
          {this.props.requestRecipe.isPending === false
            ? Object.keys(recipes).length > 0
              ? recipes
                  .filter((recipe) =>
                    recipe.tags.join(' ').toLowerCase().includes('drinks')
                  )
                  .map((recipe) => (
                    <Card
                      title={recipe.title}
                      tags={recipe.tags}
                      imgURL={recipe.imgURL}
                      description={recipe.description}
                      _id={recipe._id}
                    />
                  ))
              : ''
            : ''}
        </div>
      </Layout>
    );
  }
}

// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(Index);
