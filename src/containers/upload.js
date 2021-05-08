import { connect } from 'react-redux';
import { Component } from 'react';

const mapStateToProps = (state) => {
  return {
    inputFields: state.inputFields,
    // prepTimeField: state.inputFields.prepTimeField,
    // cookTimeField: state.inputFields.cookTimeField,
    // readyInField: state.inputFields.readyInField,
    // descriptionField: state.inputFields.descriptionField,
    // imgField: state.inputFields.imgField,
    // recipe: state.postRecipe.recipe,
    // postRecipeErr: state.postRecipe.err,
  };
};

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from reducers.
const mapDispatchToProps = (dispatch) => {
  return {
    // onTitleChange: (e) => dispatch(setTitleField(e.target.value)),
    // onIngredientsChange: (e) => dispatch(setIngredientsField(e.target.value)),
    // onInstructionsChange: (e) => dispatch(setInstructionsField(e.target.value)),
    // onPrepTimeChange: (e) => dispatch(setPrepTimeField(e.target.value)),
    // onCookTimeChange: (e) => dispatch(setCookTimeField(e.target.value)),
    // onReadyInChange: (e) => dispatch(setReadyInField(e.target.value)),
    // onDescriptionChange: (e) => dispatch(setDescriptionField(e.target.value)),
    // onImgChange: (e) => dispatch(setImgField(e.target.files[0])),
    // postRecipe: (obj) => dispatch(postRecipe(obj)),
  };
};

class Upload extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        {/* <form action='' className='upload-form'>
          <h1>Upload Recipe</h1>
          {Object.keys(this.props.postRecipeErr).length > 0 ? (
            <p className='error'>{`${postRecipeErr.message}`}</p>
          ) : (
            ''
          )}
          <div>
            <label htmlFor=''>Title</label>
            {Object.keys(postRecipeErr).length > 0 &&
            postRecipeErr.titleField === true ? (
              <p className='error'>{`Title cannot be blank`}</p>
            ) : (
              ''
            )}
            <input
              type='text'
              name='title'
              onChange={onTitleChange}
              placeholder='Jamaican Rum Punch'
            />
          </div>
          <div>
            <label htmlFor=''>Ingredients</label>
            {Object.keys(postRecipeErr).length > 0 &&
            postRecipeErr.ingredientsField === true ? (
              <p className='error'>{`Ingredients cannot be blank`}</p>
            ) : (
              ''
            )}
            <textarea
              name='ingredients'
              onChange={onIngredientsChange}
              placeholder={
                '2 cups pineapple juice | 1 ½ cup orange juice | 1 cup fruit punch syrup*  | 1 cup rum dark ' +
                '| 1 cup sparkling white wine* | ¼ cup fresh lime juice'
              }
            ></textarea>
          </div>
          <div>
            <label htmlFor=''>Instructions</label>
            {Object.keys(postRecipeErr).length > 0 &&
            postRecipeErr.instructionsField === true ? (
              <p className='error'>{`Instructions cannot be blank`}</p>
            ) : (
              ''
            )}
            <textarea
              name='instructions'
              onChange={onInstructionsChange}
              placeholder='Mix it all in your favorite pitcher and enjoy over ice 🙂'
            ></textarea>
          </div>
          <div>
            <label htmlFor=''>Prep Time</label>
            {Object.keys(postRecipeErr).length > 0 &&
            postRecipeErr.prepTimeField === true ? (
              <p className='error'>{`Prep Time cannot be blank`}</p>
            ) : (
              ''
            )}
            <input
              type='text'
              name='prepTime'
              onChange={onPrepTimeChange}
              placeholder='30 min'
            />
          </div>
          <div>
            <label htmlFor=''>Cook Time</label>
            {Object.keys(postRecipeErr).length > 0 &&
            postRecipeErr.cookTimeField === true ? (
              <p className='error'>{`Cook Time cannot be blank`}</p>
            ) : (
              ''
            )}
            <input
              type='text'
              name='cookTime'
              onChange={onCookTimeChange}
              placeholder='30 min'
            />
          </div>
          <div>
            <label htmlFor=''>Ready In</label>
            {Object.keys(postRecipeErr).length > 0 &&
            postRecipeErr.readyInField === true ? (
              <p className='error'>{`Ready In cannot be blank`}</p>
            ) : (
              ''
            )}
            <input
              type='text'
              name='readyIn'
              onChange={onReadyInChange}
              placeholder='30 min'
            />
          </div>
          <div>
            <label htmlFor=''>Description</label>
            <textarea name='' onChange={onDescriptionChange}></textarea>
          </div>
          <div>
            <label htmlFor=''>Image</label>
            {Object.keys(postRecipeErr).length > 0 &&
            postRecipeErr.imgField === true ? (
              <p className='error'>{`Image cannot be blank`}</p>
            ) : (
              ''
            )}
            <input
              type='file'
              name='img'
              accept='image/png, image/jpeg'
              onChange={onImgChange}
            />
          </div>
          <button className='btn' onClick={this.handleClick}>
            Upload
          </button>
        </form> */}
      </div>
    );
  }
}

// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(Upload);
