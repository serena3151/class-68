import * as React from "react"
import SearchScreen from "./screens/searchScreen"
import TransactionScreen from "./screens/transactionsScreen"
import {createAppContainer} from "react-navigation"
import {createBottomTabNavigator} from "react-navigation-tabs"
export default class App extends React.Component{
  render(){
    return(
<AppContainer  />
    )
  }
}
const TabNavigator = createBottomTabNavigator({
  SearchScreen: SearchScreen,
  TransactionScreen:TransactionScreen
})
const AppContainer = createAppContainer(TabNavigator)
