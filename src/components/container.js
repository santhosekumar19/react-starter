import React, { Component } from 'react';
import { connect } from 'react-redux';


class Container extends Component{
    componentDidMount(){
        this.props.init()
    }
    render(){
        return(
            <>{ this.props.posts.map((el)=>{ console.log(el); return <h1 key={el.id}>{el.title}</h1>})}
            </>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.posts)
      return {
        posts: state.posts, 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        init: () => dispatch({ type: 'GET_POST' }),
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Container)