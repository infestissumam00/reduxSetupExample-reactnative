import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import { fetchData } from '../actions/actions'

let styles

const AppContainer = (props) => {
    const {
        container,
        text,
        button,
        buttonText,
        mainContent
    } = styles

    return (
        <View style={container}>
            <Text style={text}>Redux Examples</Text>
            <TouchableHighlight style={button} onPress={() => props.fetchData()}>
                <Text style={buttonText}>Load Data</Text>
            </TouchableHighlight>
            <View style={mainContent}>
                {
                    props.dataReducer.isFetching && <Text>Loading</Text>
                }
                {
                    props.dataReducer.data.length ? (
                        props.dataReducer.data.map((person, i) => {
                            return <View key={i} >
                                <Text>Name: {person.name}</Text>
                                <Text>Age: {person.age}</Text>
                            </View>
                        })
                    ) : null
                }
            </View>
        </View>
    )
}

styles = StyleSheet.create({
    container: {
        marginTop: 100
    },
    text: {
        textAlign: 'center'
    },
    button: {
        height: 60,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0b7eff'
    },
    buttonText: {
        color: 'white'
    },
    mainContent: {
        margin: 10,
    }
})

function mapStateToProps (state) {
    return {
        dataReducer: state.dataReducer
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer)