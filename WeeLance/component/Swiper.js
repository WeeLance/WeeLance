import React, { Component } from 'react'
import Swiper from 'react-native-deck-swiper'
import { Button, StyleSheet, Text, View , Dimensions} from 'react-native'
import WelcomePage from './WelcomePage'


// demo purposes only
function * range (start, end) {
  for (let i = start; i <= end; i++) {
    yield i
  }
}


const { height, width } = Dimensions.get('window');
const WIDTH = width;
const HEIGHT = height;

export default class Exemple extends Component {
  
  constructor (props) {
    super(props)
    this.state = {
      
      swipedAllCards: false,
      swipeDirection: '',
      cardIndex: 0,
     
    }
  }

  renderCard = (card) => {
    return (
      <View style={styles.card}>
        <Text style={styles.text}>{card} </Text>
      </View>
    )
  };

  onSwiped = (type) => {
    console.log(`on swiped ${type}`)
  }

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    })
  };

  swipeLeft = () => {
    this.swiper.swipeLeft()
  };

  render () {
    return (
      <View  >
        <View  blurRadius ={80}>
          <WelcomePage />  
            </View>
        
             
       
       
        <Swiper
          ref={swiper => {
            this.swiper = swiper
          }}
          onSwiped={() => this.onSwiped('general')}
          onSwipedLeft={() => this.onSwiped('left')}
          onSwipedRight={() => this.onSwiped('right')}
          onSwipedTop={() => this.onSwiped('top')}
          onSwipedBottom={() => this.onSwiped('bottom')}
          onTapCard={this.swipeLeft}
          cards={['Opportunities', "Don't", 'Happen.', 'You', 'Create', 'Them']}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={80}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          stackSize={3}
          stackSeparation={15}  
          animateOverlayLabelsOpacity
          overlayLabelStyle
          animateCardOpacity
          swipeBackCard
        >
          <Button onPress={() => this.swiper.swipeBack()} title='Swipe Back' />
          
        </Swiper>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
 
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
   
  },
  done: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    
    backgroundColor: 'transparent'
    
  },
  overlayLabelStyle:{
    
      fontSize: 45,
      fontWeight: 'bold',
      borderRadius: 10,
      padding: 10,
      overflow: 'hidden'
    
  }
})
