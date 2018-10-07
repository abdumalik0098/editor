import connect from "react-redux/es/connect/connect";
import {toggleTodo} from "../actions/add";
import AddList from "../components/AddList";


const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(AddList)