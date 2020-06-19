import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {

    switch(action.type)
    {  
        case 'get_blogpost':
            return action.payLoad;

        case 'edit_blogpost':
           return state.map((blogPost) => {
            return blogPost.id === action.payLoad.id ? action.payLoad : blogPost
           });

        case 'delete_blogpost':
        return state.filter((blogPost) => blogPost.id !== action.payLoad);

        default:
            return state;
    }
};


const getBlogPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts');
        dispatch({ type: 'get_blogpost' , payLoad: response.data });
    };
};

const addBlogPost = (dispatch) => {

    return async (title, content, callBack) => {
        await jsonServer.post('/blogposts', { title, content });
        if(callBack) {
            callBack();
        }
    };
};

const deleteBlogPost = (dispatch) => {

    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({ type: 'delete_blogpost' , payLoad: id });
    };
};

const editBlogPost = (dispatch) => {

    return async (id, title, content, callBack) => {

        await jsonServer.put(`/blogposts/${id}`, { title, content });
        dispatch({ type: 'edit_blogpost' , payLoad: { id, title, content } });
        if(callBack) {
            callBack();
        }
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer, 
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts }, 
    []
    );
