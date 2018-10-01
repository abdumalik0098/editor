import connect from "react-redux/es/connect/connect";
import {toggleTodo} from "../actions/add";
import AddList from "../components/AddList";


const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
    mapDispatchToProps
)(AddList)