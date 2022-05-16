import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();



const Feed = () =>{


    return <View>
        <Text>Feed</Text>
    </View>
}


const Article = () =>{


    return <View>
        <Text>Article</Text>
    </View>
}

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}


