import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import { connect } from 'react-redux';
import NavBar from './navbar'


class ContainerWrapper extends Component{
    componentDidMount(){
        this.props.init()
    }
    render(){
        return(
            <Container maxWidth="false">
            <NavBar />
            { this.props.posts.map((el)=>{ console.log(el); return <h1 key={el.id}>{el.title}</h1>})}
            </Container>
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

export default connect(mapStateToProps,mapDispatchToProps)(ContainerWrapper)