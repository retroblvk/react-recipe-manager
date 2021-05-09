import { connect } from 'react-redux';
import { Component } from 'react';

import Layout from './../components/layout';

import {
  setTitleField,
  setTagsField,
  setServingsField,
  setIngredientsField,
  setInstructionsField,
  setPrepTimeField,
  setCookTimeField,
  setReadyInField,
  setImgField,
  setDescriptionField,
  postRecipe,
} from '../actions';

const mapStateToProps = (state) => {
  return {
    recipeFields: state.recipeFields,
    requestRecipe: state.requestRecipe,
  };
};

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from reducers.
const mapDispatchToProps = (dispatch) => {
  return {
    onTitleChange: (e) => dispatch(setTitleField(e.target.value)),
    onTagsChange: (e) => dispatch(setTagsField(e.target.value.split(' '))),
    onServingsChange: (e) => dispatch(setServingsField(e.target.value)),
    onIngredientsChange: (e) => dispatch(setIngredientsField(e.target.value)),
    onInstructionsChange: (e) => dispatch(setInstructionsField(e.target.value)),
    onPrepTimeChange: (e) => dispatch(setPrepTimeField(e.target.value)),
    onCookTimeChange: (e) => dispatch(setCookTimeField(e.target.value)),
    onReadyInChange: (e) => dispatch(setReadyInField(e.target.value)),
    onDescriptionChange: (e) => dispatch(setDescriptionField(e.target.value)),
    onImgChange: (e) => dispatch(setImgField(e.target.files[0])),
    postRecipe: (obj) => dispatch(postRecipe(obj)),
  };
};

class UploadRecipe extends Component {
  handleClick = (e) => {
    e.preventDefault();

    this.props.postRecipe(this.props.recipeFields);
  };
  render() {
    return (
      <Layout>
        <form action='' className='upload-form'>
          <h1>Upload Recipe</h1>
          {this.props.requestRecipe.isPending ? 'Loading' : ''}
          <div>
            <label htmlFor='title'>Title</label>
            {this.props.requestRecipe.err.titleField === true ? (
              <p className='error'>{`Title cannot be blank`}</p>
            ) : (
              ''
            )}
            <input
              type='text'
              name='title'
              onChange={this.props.onTitleChange}
              placeholder='Jamaican Rum Punch'
            />
          </div>
          <div>
            <label htmlFor='tags'>Tags</label>
            {this.props.requestRecipe.err.tagsField === true ? (
              <p className='error'>{`Tags cannot be blank`}</p>
            ) : (
              ''
            )}
            <input
              type='text'
              name='tags'
              onChange={this.props.onTagsChange}
              placeholder='Jamaican Rum Punch'
            />
          </div>
          <div>
            <label htmlFor='tags'>Servings</label>
            {this.props.requestRecipe.err.servingsField === true ? (
              <p className='error'>{`Servings cannot be blank`}</p>
            ) : (
              ''
            )}
            <input
              type='text'
              name='tags'
              onChange={this.props.onServingsChange}
              placeholder='4'
            />
          </div>
          <div>
            <label htmlFor=''>
              Ingredients (Split Ingredients with " <span>|</span> " character )
            </label>
            {this.props.requestRecipe.err.ingredientsField === true ? (
              <p className='error'>{`Ingredients cannot be blank`}</p>
            ) : (
              ''
            )}
            <textarea
              name='ingredients'
              onChange={this.props.onIngredientsChange}
              placeholder={
                '2 cups pineapple juice | 1 ½ cup orange juice | 1 cup fruit punch syrup*  | 1 cup rum dark ' +
                '| 1 cup sparkling white wine* | ¼ cup fresh lime juice'
              }
            ></textarea>
          </div>
          <div>
            <label htmlFor='instructions'>Instructions</label>
            {this.props.requestRecipe.err.instructionsField === true ? (
              <p className='error'>{`Instructions cannot be blank`}</p>
            ) : (
              ''
            )}
            <textarea
              name='instructions'
              onChange={this.props.onInstructionsChange}
              placeholder='Mix it all in your favorite pitcher and enjoy over ice 🙂'
            ></textarea>
          </div>
          <div>
            <label htmlFor='prepTime'>Prep Time</label>
            {this.props.requestRecipe.err.prepTimeField === true ? (
              <p className='error'>{`Prep Time cannot be blank`}</p>
            ) : (
              ''
            )}
            <input
              type='text'
              name='prepTime'
              onChange={this.props.onPrepTimeChange}
              placeholder='30 min'
            />
          </div>
          <div>
            <label htmlFor='cookTime'>Cook Time</label>
            {this.props.requestRecipe.err.cookTimeField === true ? (
              <p className='error'>{`Cook Time cannot be blank`}</p>
            ) : (
              ''
            )}
            <input
              type='text'
              name='cookTime'
              onChange={this.props.onCookTimeChange}
              placeholder='30 min'
            />
          </div>
          <div>
            <label htmlFor=''>Ready In</label>
            {this.props.requestRecipe.err.readyInField === true ? (
              <p className='error'>{`Ready In cannot be blank`}</p>
            ) : (
              ''
            )}
            <input
              type='text'
              name='readyIn'
              onChange={this.props.onReadyInChange}
              placeholder='30 min'
            />
          </div>
          <div>
            <label htmlFor=''>Description</label>
            {this.props.requestRecipe.err.descriptionField === true ? (
              <p className='error'>{`Description cannot be blank`}</p>
            ) : (
              ''
            )}
            <textarea
              name=''
              onChange={this.props.onDescriptionChange}
              placeholder="Lots of fruit with a great subtle taste. Be careful on hot days! Fresh lime juice is key to getting the unique flavor of this punch. Don't skimp!"
            ></textarea>
          </div>
          <div>
            <label htmlFor=''>Image</label>
            {this.props.requestRecipe.err.imgField === true ? (
              <p className='error'>{`Image cannot be blank`}</p>
            ) : (
              ''
            )}
            <input
              type='file'
              name='img'
              accept='image/png, image/jpeg'
              onChange={this.props.onImgChange}
            />
          </div>
          <button className='btn' onClick={this.handleClick}>
            Upload
          </button>
        </form>
      </Layout>
    );
  }
}

// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(UploadRecipe);
