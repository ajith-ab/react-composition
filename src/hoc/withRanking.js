import React, { Component } from 'react';
import { FetchRankAPi } from './fetchApi';

const withRanking = WrappedComponent => {
    return class extends Component { 

         constructor(props){
             super(props)
             this.state = {
                 rank: 0
             }
         }

        componentDidMount(){
            FetchRankAPi(this.props.id).then((ranking)=> this.setState({ rank: ranking  }))
        }
            

        render(){
            return (
                <WrappedComponent {...this.state} {...this.props} />
            )
        }
    }
}

export default withRanking;