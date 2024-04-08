import SubChildComponent from "./SubChildComponent ";

const ChildComponent=(props)=>{
    return <div>
        <h2>Child Component</h2>
        <SubChildComponent userDetails={props.userDetails}/>
    </div>
};
export default ChildComponent;